import React from 'react';
import { FiShare2 } from 'react-icons/fi';
import { BiSolidBookmarkAltPlus } from 'react-icons/bi';
import { FaRegEye } from 'react-icons/fa';
import Image from 'next/image';
/*  <FiShare2 /> <FaRegEye />
            <BiSolidBookmarkAltPlus /> */
const NewsFeedPage = ({ news }) => {
  const {
    title,
    author: { img } = {},
    author: { name },
    author: { published_date },
    image_url,
    thumbnail_url,
    details
  } = news;
  console.log(news, 'news feed');
  return (
    <div className="my-5 rounded px-5">
      <div className="card bg-base-100 pb-10 w-full shadow-sm overflow-hidden">
        <div className="card-body p-0 space-y-1 sm:space-y-2 md:space-y-3">
          {/* author */}
          <div className="flex items-center justify-between bg-gray-100 px-4 py-4">
            <div className="flex items-center gap-2 sm:gap-4">
              <Image
                src={img}
                alt={name}
                width={0}
                height={50}
                className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full object-cover"
              />

              <div>
                <h3 className="text-xs md:text-base font-semibold text-gray-700">
                  {name}
                </h3>

                <p className="text-[8px] md:text-xs text-gray-500">
                  {published_date}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 sm:gap-3 text-xs md:text-base lg:text-xl text-gray-500">
              <BiSolidBookmarkAltPlus className="cursor-pointer hover:text-black duration-200" />
              <FiShare2 className="cursor-pointer hover:text-black duration-200" />
            </div>
          </div>

          {/* title */}
          <div className="px-4 pt-3">
            <h2 className="card-title text-slate-800 text-base md:text-lg lg:text-xl font-bold">
              {title}
            </h2>
          </div>

          {/* image */}
          <figure className="px-4 pt-6 pb-4">
            <Image
              src={image_url}
              alt="thumbnail"
              width={600}
              height={100}
              className="w-full rounded-lg object-cover"
            />
          </figure>
          <p className="px-4 py-4 line-clamp-2 ">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsFeedPage;
