import React from "react";
import Button from "../component/Button";

const Home = () => {
  return (
    <>
      <section className="flex flex-row my-13 gap-4 md:gap-15 justify-center items-center py-6 md:py-10 max-w-7xl mx-auto">
        <div className="space-y-4 w-1/2 md:w-auto">
          <div className="space-y-2 text-left">
            <h2 className="text-sm sm:text-lg md:text-2xl font-bold">
              Hello, it's me
            </h2>
            <h1 className="text-lg sm:text-2xl md:text-4xl font-bold">
              Wai Yan Hein Oo
            </h1>
            <h2 className="text-sm sm:text-lg md:text-2xl font-bold">
              I'm a student
            </h2>
            <p className="text-xs sm:text-sm md:text-lg font-bold">
              Please hold your breath as we dive into a world full of creativity
              with designer John.
            </p>
          </div>
          <div className="w-full md:w-60">
            <div className="flex items-center justify-start md:justify-between my-3 md:my-13 gap-2 md:gap-0">
              <a
                href="#"
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/1200px-2023_Facebook_icon.svg.png"
                  alt=""
                  className="w-5 sm:w-6 md:w-10"
                />
              </a>
              <a
                href="#"
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
                  alt=""
                  className="w-5 sm:w-6 md:w-10"
                />
              </a>
              <a
                href="#"
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center"
              >
                <img
                  src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg"
                  alt=""
                  className="w-5 sm:w-6 md:w-10"
                />
              </a>
            </div>
            <Button
              text="My Portfolio"
              className="text-xs sm:text-sm md:text-lg w-full"
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-1/2 md:w-auto">
          <img
            src="https://www.pngall.com/wp-content/uploads/9/Male-Entrepreneur-PNG-Free-Image.png"
            alt="Artist John"
            className="w-full max-w-36 sm:max-w-48 md:max-w-64 lg:w-80"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
