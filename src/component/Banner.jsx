import React from "react";
import IconRatingHalf from "../assets/images/rating-half.png";
import IconRating from "../assets//images/rating.png";
import ImgMovie from "../assets/images/temp-1.jpeg";
import IconPlay from "../assets/images/play-button.png";

const Banner = () => {
  return (
    <div className="w-full h-[700px] bg-[url(src/assets/images/temp-1.jpeg)] bg-center bg-cover bg-no-repeat relative">
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30"/>
      <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
        <div className="flex flex-col space-y-5 items-baseline w-[50%]">
          <p className="bg-gradient-to-r from-red-600 to-red-300 py-2 px-6">
            TV Show
          </p>
          <div className="flex flex-col space-y-4">
            <h1 className="text-[40px] font-bold text-white ">
              Nghe nói em thích tôi
            </h1>
          </div>
          <div className="flex items-center space-x-3">
            <img src={IconRating} alt="rating" className="w-8 h-8" />
            <img src={IconRating} alt="rating" className="w-8 h-8" />
            <img src={IconRating} alt="rating" className="w-8 h-8" />
            <img src={IconRating} alt="rating" className="w-8 h-8" />
            <img src={IconRatingHalf} alt="rating" className="w-8 h-8" />
          </div>
          <p className="text-white">
          "Nghe Nói Em Thích Tôi" là một câu chuyện tình nhẹ nhàng giữa hai tâm hồn cô đơn vô tình tìm thấy nhau giữa dòng đời tấp nập. 
          Cô – một người sống nội tâm, luôn giấu kín cảm xúc. Anh – một chàng trai thẳng thắn, ấm áp nhưng chưa từng tin vào định mệnh. 
          Một tin đồn vô tình lan truyền: “Nghe nói em thích tôi”… và từ đó, những hiểu lầm, 
          những khoảnh khắc ngại ngùng, và cả những rung động đầu đời bắt đầu chớm nở.
          </p>
          <div className="flex items-center space-x-4">
            <button className="p-3 text-white bg-black font-bold text-sm">
              Chi tiết
            </button>
            <button className="p-3 text-white bg-red-600 font-bold text-sm">
              Xem phim
            </button>
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center">
          <div className="relative w-[300px] h-[400px] group cursor-pointer">
            <img
              src={ImgMovie}
              alt="banner"
              className="object-cover w-full h-full"
            />
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"> 
              <img
                src={IconPlay}
                className="w-16 h-16"  
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
