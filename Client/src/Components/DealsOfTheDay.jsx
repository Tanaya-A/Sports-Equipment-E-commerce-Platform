import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import AOS from "aos";

const DealsOfTheDay = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0); // Last day of current month

      const difference = lastDayOfMonth - now;
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    const intervalId = setInterval(calculateTimeLeft, 1000);

    calculateTimeLeft();

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-black text-white p-8">
      <div
        data-aos="fade-right" // Add AOS animation to the left side
        className="text-center md:text-left md:w-1/2"
      >
        <h1 className="text-4xl font-bold">
          DEALS <span className="text-red-600">OFF THE DAY.</span>
        </h1>
        <p className="mt-4 text-lg font-light"> SPORTS Equipment</p>
        <div className="flex justify-center md:justify-start gap-4 mt-6 text-center">
          <div>
          {/* <p className="animate__animated animate-ping animate__infinite text-red-700  p-1">

{equipment.stockStatus}
</p> */}
            <p className="text-4xl font-bold ">{countdown.days}</p>
            <p className="text-sm font-light">DAYS</p>
          </div>
          <div>
            <p className="text-4xl font-bold">{countdown.hours}</p>
            <p className="text-sm font-light">HOURS</p>
          </div>
          <div>
            <p className="text-4xl font-bold">{countdown.minutes}</p>
            <p className="text-sm font-light">MINS</p>
          </div>
          <div>
            <p className="text-4xl font-bold ">{countdown.seconds}</p>
            <p className="text-sm font-light">SECS</p>
          </div>
        </div>
        <Link to="/all-products" className="btn mt-6 px-6 py-2 border border-white hover:bg-red-600 transition">
          MORE DETAILS →
        </Link>
      </div>

      {/* Image Section */}
      <div
        data-aos="fade-left" // Add AOS animation to the right side
        className="md:w-1/2 mt-8 md:mt-0"
      >
        <img
          src="https://www.eslecollege.com/wp-content/uploads/2022/07/sports-at-school.png"
          alt="Deals Off The Day"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default DealsOfTheDay;
