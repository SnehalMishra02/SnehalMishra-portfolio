'use client';

import { useEffect, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data = [
  { dateLabel: '19th March 2004', title: 'Spawn Point 🎮' },
  { dateLabel: '2009', title: "Joined The Mother's International School 🕊️" },
  { dateLabel: '2008', title: 'Got My First PC 🖥️' },
  { dateLabel: '2010', title: 'Started Playing Football ⚽' },
  { dateLabel: '2020', title: 'Started Coding in Python 💻' },
  { dateLabel: 'November 2020', title: 'Adopted Bolt (My Dog) 🐶' },
  { dateLabel: 'July 2022', title: 'Graduated High School 👨‍🏫' },
  { dateLabel: 'September 2022', title: 'Began B.Tech in IT @ VIT, Vellore 👨‍🎓' },
];

export default function Timeline() {
  const [swiperInstance, setSwiperInstance] = useState<Swiper | null>(null);

  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      pagination: { clickable: true },
      grabCursor: true,
      navigation: {
        nextEl: '.next-slide',
        prevEl: '.prev-slide',
      },
    });
    setSwiperInstance(swiper);
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-[250%] font-extrabold text-white text-center mb-4">Milestones and Moments</h1>
      <div className="swiper-container">
        <div className="swiper-control flex justify-end gap-2 mb-4">
        </div>
        <div className="swiper-wrapper timeline">
          {data.map((item, index) => (
            <div key={index} className="swiper-slide text-center">
              <div className="timestamp">
                <span className="date font-light m-2 text-white">{item.dateLabel}</span>
              </div>
              <div className="status border-t-4 border-black relative pt-5 mt-5">
                <span className="font-semibold text-white">{item.title}</span>
                <span className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-100 border-4 border-blue-300 rounded-full"></span>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}
