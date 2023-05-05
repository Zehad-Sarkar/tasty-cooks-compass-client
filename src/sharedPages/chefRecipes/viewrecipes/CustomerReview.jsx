import React from "react";

const CustomerReview = () => {
  return (
    <div className="">
      <h2 className="mb-4 text-3xl font-bold text-center text-purple-400">Customer Reviews</h2>
      <div className="gap-4 p-2 my- mx- auto md:flex">
        <div className="p-6 mb-4 bg-white rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <img
              className="w-10 h-10 mr-4 rounded-full"
              src="https://randomuser.me/api/portraits/women/21.jpg"
              alt="Customer profile"
            />
            <div>
              <p className="font-medium text-gray-800">Jane Smith</p>
              <p className="text-sm text-gray-600">3 days ago</p>
            </div>
          </div>
          <p className="text-gray-700">
            "I had a great experience with this company. The customer service
            was top-notch and the product exceeded my expectations. I would
            definitely recommend them to anyone looking for quality products and
            great service."
          </p>
        </div>
        <div className="p-6 mb-4 bg-white rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <img
              className="w-10 h-10 mr-4 rounded-full"
              src="https://randomuser.me/api/portraits/men/41.jpg"
              alt="Customer profile"
            />
            <div>
              <p className="font-medium text-gray-800">John Doe</p>
              <p className="text-sm text-gray-600">1 week ago</p>
            </div>
          </div>
          <p className="text-gray-700">
            "I've been using their products for years and have always been
            impressed with their quality and reliability. Their customer service
            is also excellent and always prompt in addressing any concerns I
            have. Highly recommend!"
          </p>
        </div>
        <div className="p-3 mb-4 bg-white rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <img
              className="w-10 h-10 mr-4 rounded-full"
              src="https://randomuser.me/api/portraits/men/41.jpg"
              alt="Customer profile"
            />
            <div>
              <p className="font-medium text-gray-800">daniel joe</p>
              <p className="text-sm text-gray-600">1 week ago</p>
            </div>
          </div>
          <p className="text-gray-700">
            "I've been using their products for years and have always been
            impressed with their quality and reliability. Their customer service
            is also excellent and always prompt in addressing any concerns I
            have. Highly recommend!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
