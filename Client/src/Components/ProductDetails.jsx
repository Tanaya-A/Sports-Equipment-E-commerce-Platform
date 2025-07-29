import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { FaStar } from "react-icons/fa6";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Loading from "./Loading";

const Modal = ({ onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md w-80">
        <h2 className="text-lg font-semibold">Confirm Purchase</h2>
        <p className="  my-4">Are you sure you want to buy this product?</p>
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-[#0FABCA] text-white rounded-md hover:bg-[#0FABCA]/90"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductDetails = () => {
  const { id } = useParams();
  const [equipment, setEquipment] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("black");
  const [isFavorite, setIsFavorite] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 45,
    seconds: 5,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://sports2.vercel.app/data/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setEquipment(data[0]);
        } else {
          setEquipment(data);
        }
      })
      .catch((error) => console.error("Error fetching product details:", error));

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [id]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % (equipment.images?.length || 1));
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + (equipment.images?.length || 1)) % (equipment.images?.length || 1));
  };

  const formatNumber = (number) => number.toString().padStart(2, "0");

  if (!equipment) {
    return <Loading />;
  }

  const handleBuyNow = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalConfirm = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <div className="mx-auto lg:px-8 lg:pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-4">
          <div className="relative aspect-square">
            <div className="absolute top-4 left-4 z-10 space-y-2">
              <span className="inline-block px-2 py-1 text-xs font-semibold bg-black text-white">
                {equipment.stockStatus > 0 ? "NEW" : "OUT OF STOCK"}
              </span>
              {equipment.discount && (
                <div className="inline-block px-2 py-1 text-xs font-semibold bg-emerald-500 text-white">
                  {`-${equipment.discount}%`}
                </div>
              )}
            </div>

            <div className="relative ">
              <img
                src={equipment.image}
                alt={equipment.itemName}
                className="w-1/2 mx-auto"
              />
              <button
                onClick={previousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-[#0FABCA] hover:text-white"
                aria-label="Previous image"
              >
                <BiChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-[#0FABCA] hover:text-white"
                aria-label="Next image"
              >
                <BiChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex gap-4 justify-between">
            {(equipment.images || []).map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative transition-all duration-300 w-[8rem] aspect-square ${currentImageIndex === index
                  ? "ring-2 ring-[#0FABCA]"
                  : "hover:ring-2 hover:ring-[#0FABCA]"
                  }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-4 h-4 fill-black" />
              ))}
            </div>
            <span className="text-sm ">{equipment.rating} Reviews</span>
          </div>

          <h1 className="text-[1.6rem] lg:text-[1.9rem]   font-semibold">
            {equipment.itemName}
          </h1>

          <p className="  text-[0.9rem]">{equipment.description}</p>

          <div className="flex items-center gap-3">
            <span className="text-[1.5rem]   font-medium">${equipment.price}</span>
            {equipment.originalPrice && (
              <span className="text-lg  line-through">
                ${equipment.originalPrice}
              </span>
            )}
          </div>

          <div className="pb-2">
            <p className="font-medium text-[0.9rem]  ">Offer expires in:</p>
            <div className="flex items-center gap-[10px] mt-2">
              <div className="flex items-center justify-center flex-col gap-[0.2rem]">
                <h5 className="py-2 px-3   text-[1.9rem] font-semibold">
                  {formatNumber(timeLeft.days)}
                </h5>
                <span className="text-[0.7rem]">Days</span>
              </div>
              <div className="flex items-center justify-center flex-col gap-[0.2rem]">
                <h5 className="py-2 px-3   text-[1.9rem] font-semibold">
                  {formatNumber(timeLeft.hours)}
                </h5>
                <span className="text-[0.7rem]">Hours</span>
              </div>
              <div className="flex items-center justify-center flex-col gap-[0.2rem]">
                <h5 className="py-2 px-3   text-[1.9rem] font-semibold">
                  {formatNumber(timeLeft.minutes)}
                </h5>
                <span className="text-[0.7rem]">Minutes</span>
              </div>
              <div className="flex items-center justify-center flex-col gap-[0.2rem]">
                <h5 className="py-2 px-3   text-[1.9rem] font-semibold">
                  {formatNumber(timeLeft.seconds)}
                </h5>
                <span className="text-[0.7rem]">Seconds</span>
              </div>
            </div>
          </div>

          <div className="flex gap-5">
            <button
              onClick={handleBuyNow}
              className="px-6 py-3 bg-[#0FABCA] text-white text-lg font-semibold rounded-md w-full hover:bg-[#0FABCA]/90"
            >
              Buy Now
            </button>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="text-2xl text-[#0FABCA] hover:text-[#0FABCA]/80"
            >
              {isFavorite ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && <Modal onClose={handleModalClose} onConfirm={handleModalConfirm} />}
    </div>
  );
};

export default ProductDetails;
