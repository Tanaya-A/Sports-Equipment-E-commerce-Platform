require("dotenv").config();
const bcrypt = require("bcryptjs");
const express = require("express");
const cors = require("cors");
const { ObjectId } = require("mongodb");

const connectToDB = require("./db"); // make sure this is the correct path
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

console.log("🟡 index.js is starting...");

app.get("/", (req, res) => {
  res.send("Hello from Sports Equipment Shop backend!");
});

let usersCollection;

connectToDB().then((database) => {
  usersCollection = database.collection("users");
  if (!usersCollection) {
  return res.status(500).json({ message: "Database not connected yet" });
}

});

async function startServer() {
  try {
    const db = await connectToDB();
    const collection = db.collection("products");

    app.post("/data", async (req, res) => {
      console.log("📦 New product data received:", req.body);
      try {
        const data = await collection.insertOne(req.body);
        res.json(data);
      } catch (error) {
        res.status(500).send("Error inserting data into database");
      }
    });

    // Register route
    app.post("/register", async (req, res) => {
      const { name, email, password, photo } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      try {
        const existingUser = await usersCollection.findOne({ email });
        if (existingUser) {
          return res.status(409).json({ error: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
          name,
          email,
          password: hashedPassword, // ⚠️ Hashing is recommended in production
          photo: photo || "",
          createdAt: new Date(),
        };

        const result = await usersCollection.insertOne(newUser);
        res.status(201).json({ message: "User registered", userId: result.insertedId });
      } catch (error) {
        res.status(500).json({ error: "Registration failed" });
      }
    });

    app.post("/login", async (req, res) => {
      const { email, password } = req.body;

      const user = await usersCollection.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      console.log("🧪 Comparing:", password, "with", user.password);

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log("❌ Password mismatch for user:", email);
        return res.status(401).json({ message: "Invalid credentials" });
      }

      res.status(200).json({ message: "Login successful", user });
    });

    app.get("/data", async (req, res) => {
      try {
        const data = await collection.find({}).toArray();
        res.json(data);
      } catch (error) {
        res.status(500).send("Error fetching data");
      }
    });

    app.get("/data-limit", async (req, res) => {
      try {
        const data = await collection.aggregate([{ $sample: { size: 6 } }]).toArray();
        res.json(data);
      } catch (error) {
        res.status(500).send("Error fetching random data");
      }
    });

    app.get("/data/:id", async (req, res) => {
      const { id } = req.params;
      try {
        const product = await collection.findOne({ _id: new ObjectId(id) });
        if (product) {
          res.json(product);
        } else {
          res.status(404).json({ error: "Product not found" });
        }
      } catch (error) {
        res.status(500).json({ error: "Error fetching product" });
      }
    });

    app.put("/data/:id", async (req, res) => {
      const { id } = req.params;
      const updateData = req.body;
      delete updateData._id;

      try {
        const result = await collection.updateOne(
          { _id: new ObjectId(id) },
          { $set: updateData }
        );
        if (result.matchedCount > 0) {
          res.status(200).json({ message: "Product updated successfully" });
        } else {
          res.status(404).json({ error: "Product not found" });
        }
      } catch (error) {
        res.status(500).json({ error: "Error updating product" });
      }
    });

    app.delete("/data/:id", async (req, res) => {
      const { id } = req.params;
      try {
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount > 0) {
          res.status(200).send("Deleted successfully");
        } else {
          res.status(404).send("Product not found");
        }
      } catch (error) {
        res.status(500).send("Error deleting data");
      }
    });

    app.put("/update-profile/:id", async (req, res) => {
    const { id } = req.params;
    const { name, photoUrl } = req.body;

    try {
      const result = await db.collection("users").updateOne(
        { _id: new ObjectId(id) },
        { $set: { name, photoUrl } }
      );

      if (result.matchedCount === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json({ message: "Profile updated successfully" });
    } catch (err) {
      res.status(500).json({ error: "Failed to update profile" });
    }
    });

    app.put("/users/:id", async (req, res) => {
      const db = await connectToDB();
      const users = db.collection("users");
      const { id } = req.params;
      const { name, photo } = req.body;

      try {
        const result = await users.updateOne(
          { _id: new ObjectId(id) },
          { $set: { name, photo } }
        );
        if (result.modifiedCount > 0) {
          res.json({ message: "Profile updated" });
        } else {
          res.status(404).json({ error: "User not found or unchanged" });
        }
      } catch (error) {
        res.status(500).json({ error: "Update failed" });
      }
    });


    // Start the server AFTER DB connects
    app.listen(port, () => {
      console.log(`✅ Server running at http://localhost:${port}`);
    });

  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
  }
}

startServer();



