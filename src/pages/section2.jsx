

import React from 'react';
import { GoArrowRight } from 'react-icons/go';

const Sec = ({ title, subtitle, description, image, linkText }) => {
  return (
    <section className="container flex gap-[10%] py-[100px]">
              <div className="pt-[50px]">
        <img src={image} alt="section-img" />
      </div>


      <div>
        <p className="text-[22px] text-[#BDBDBD] font-normal mb-[10px]">
          {subtitle}
        </p>

        <h1 className="text-[96px] text-[#292830] font-bold leading-none mb-[50px]">
          {title}
        </h1>

        <p className="text-[24px] text-[#BDBDBD] font-normal my-[20px]">
          {description}
        </p>

        <p className="flex items-center gap-[15px] text-[24px] text-orange-500">
          {linkText}
          <GoArrowRight />

        </p>
      </div>

    </section>
  );
};

export default Sec;