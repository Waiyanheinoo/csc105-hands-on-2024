import React from "react";
import Button from "../component/Button";

const AboutMe = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12 my-13 py-10 md:py-10 px-4 md:px-12 lg:px-16">
        <div className="flex justify-center md:justify-start">
          <img
            src="https://pngimg.com/d/man_PNG6531.png"
            alt="Artist John"
            className="w-56 md:w-96 object-cover"
          />
        </div>
        <div className="mt-6 md:mt-0">
          <div className="space-y-3 md:space-y-6 mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-extrabold">About Me</h1>
            <h2 className="text-lg md:text-xl font-semibold">
              Artist & Designer
            </h2>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              eveniet doloribus similique unde! Eligendi, deserunt totam quaerat
              laborum, veritatis aliquid placeat quis hic facilis officiis
              dolore ea aperiam consequuntur modi? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Officiis blanditiis eum laborum
              nesciunt vero inventore voluptatum sed nemo, placeat fuga esse
              iure accusantium reiciendis magni enim impedit nulla quo
              obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Eos ipsum quaerat praesentium soluta rerum doloribus sunt,
              molestiae nemo? Architecto vel voluptate eligendi neque enim autem
              molestias officiis, nam ad dolorem.
            </p>
          </div>
          <Button text="Read More" />
        </div>
      </section>
    </>
  );
};

export default AboutMe;
