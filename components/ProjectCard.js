import React from "react";
import Image from "next/image";

const ProjectCard = ({ title, subtitle, image, altImage }) => {
  return (
    <div className="card flex flex-col justify-start my-12 bg-white shadow-2xl rounded-xl overflow-hidden">
      <div className="w-full h-70">
        {image && (
          <Image
            src={image}
            alt={altImage}
            width="700"
            height="350"
            layout="responsive"
          />
        )}
      </div>
      <div className="flex flex-col justify-start w-full p-6 z-10">
        <h2 className="text-3xl font-sans font-extrabold">{title}</h2>
        <p className="text-xl font-sans font-extrabold text-gray-600">
          {subtitle}
        </p>
      </div>
      <style jsx>{`
        .card {
          position: relative;
          cursor: pointer;
          min-width: 500px;
          width: 90%;
          height: 500px;
          max-width: 700px;
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
