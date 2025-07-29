import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const customerReviews = [
  {
    avatar: 'A',
    name: 'Alice Johnson',
    date: 'November 20, 2024',
    review: 'The paella recipe turned out amazing! It was flavorful and easy to follow. Definitely making this again!',
    rating: 5,
  },
  {
    avatar: 'B',
    name: 'Bob Smith',
    date: 'November 21, 2024',
    review: 'Loved the detailed instructions. The saffron added a unique flavor, and everyone at dinner enjoyed it.',
    rating: 4,
  },
  {
    avatar: 'C',
    name: 'Catherine Lee',
    date: 'November 22, 2024',
    review: 'This recipe was good, but I had to adjust the seasoning to suit my taste. The method was clear, though.',
    rating: 4,
  },
  {
    avatar: 'D',
    name: 'David Brown',
    date: 'November 23, 2024',
    review: 'A delightful dish to prepare with friends! The mussels and shrimp combination was a hit.',
    rating: 5,
  },
];

const StarRating = ({ rating }) => {
  const stars = Array(5)
    .fill(null)
    .map((_, index) => (
      <span
        key={index}
        className={`inline-block ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  return <div className="text-sm">{stars}</div>;
};

const CustomerReviewCard = ({ review }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      data-aos="fade-up"
    >
      {/* Gradient Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 flex items-center">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white text-blue-600 font-bold">
          {review.avatar}
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-white">{review.name}</h4>
          <p className="text-blue-100 text-xs">{review.date}</p>
        </div>
      </div>
      {/* Review Content */}
      <div className="p-4">
        <StarRating rating={review.rating} />
        <p className="text-gray-600 text-sm mt-3">{review.review}</p>
      </div>
    </div>
  );
};

const CustomerReview = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: 'ease-in-out', // Animation easing
      once: true, // Only animate once
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {customerReviews.map((review, index) => (
        <CustomerReviewCard key={index} review={review} />
      ))}
    </div>
  );
};

export default CustomerReview;
