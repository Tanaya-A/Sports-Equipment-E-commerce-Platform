import React from "react";
import Marquee from "react-fast-marquee";

const SportsBrands = () => {
  const brands = [
    {
      name: "Nike",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    },
    {
      name: "Adidas",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    },
    {
      name: "Puma",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/da/Puma_complete_logo.svg/330px-Puma_complete_logo.svg.png",
    },
    {
      name: "Under Armour",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Under_armour_logo.svg/225px-Under_armour_logo.svg.png",
    },
    {
      name: "Reebok",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Reebok_red_logo.svg/330px-Reebok_red_logo.svg.png",
    },
    {
      name: "Asics",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Asics_Logo.svg/330px-Asics_Logo.svg.png",
    },
    {
      name: "New Balance",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/New_Balance_logo.svg/270px-New_Balance_logo.svg.png",
    },
    {
      name: "Fila",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Fila_logo_%283%29.svg/330px-Fila_logo_%283%29.svg.png",
    },
   

   
  ];

  return (
    <div className="my-8">
      <Marquee>
        {brands.map((brand, index) => (
          <img
            key={index}
            src={brand.logo}
            alt={brand.name}
            className="h-16 mx-6"
            title={brand.name}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default SportsBrands;
