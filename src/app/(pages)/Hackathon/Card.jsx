import React from "react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

function getDeadlineColor(registrationDeadline) {
  const currentDate = new Date();
  const deadlineDate = new Date(registrationDeadline);

  const daysDifference = Math.floor(
    (deadlineDate - currentDate) / (1000 * 60 * 60 * 24)
  );

  if (daysDifference === 0) {
    return "bg-red-500"; 
  } else if (daysDifference < 0) {
    return "bg-blue-500"; 
  } else {
    return "bg-green-500"; 
  }
}

function Card({
  title,
  description,
  location,
  prizePool,
  teamSize,
  image,
  registrationDeadline,
}) {
  const deadlineColor = getDeadlineColor(registrationDeadline);

  return (
    <div className="max-w-sm h-[32rem] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-101 hover:shadow-2xl m-4 bg-gray-100 flex flex-col justify-between">
      {/* Image Section */}
      <div className="relative h-44 w-full">
        <Image
          src={image}
          alt={title}
          className="rounded-t-lg w-full object-cover"
          layout="fill"
        />
      </div>

      {/* Content Section */}
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-2xl text-gray-800 ">{title}</div>
        <div className="gap-2">
          <Badge className="mr-2">Prize Pool: {prizePool}</Badge>
          <Badge className="mr-2">{teamSize}</Badge>
          <Badge className="mr-2">{location}</Badge>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed mt-3">
          {description}
        </p>
      </div>

      {/* Action Button Section */}
      {/* <div className="px-6 py-4 flex justify-center">
        
        <p className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-600 transition duration-300 transform hover:scale-105">
        Registration Deadline:  {new Date(registrationDeadline).toLocaleDateString()}
        </p>
      </div> */}

      <div className="px-6 py-4 flex justify-center">
        <p
          className={`inline-block px-4 py-2 text-white rounded-lg shadow-md transition duration-300 transform hover:scale-105 ${deadlineColor}`}
        >
          Registration Deadline:{" "}
          {new Date(registrationDeadline).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default Card;
