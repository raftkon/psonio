import React from "react";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div
      className="min-w-[30%] h-[240px] flex-auto flex items-center
          justify-center mt-0 mx-2 mb-4 overflow-hidden 
          hover:cursor-pointer first:mr-2 last:ml-2 group rounded-xl shadow-2xl"
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-[100%] h-[100%] bg-cover bg-center object-cover transition duration-1000 group-hover:scale-110 group-hover:ease-in-out"
      />
      {/* category-body-container */}
      <div
        className="h-[90px] py-0 px-6 flex rounded-sm flex-col items-center 
              justify-center bordeborder-black bg-white opacity-70
              absolute group-hover:opacity-90 "
      >
        <h2 className="text-xl text-[#4a4a4a] my-0 mx-2 font-bold">{title}</h2>
        <p className="font-extralight text-lg">Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
