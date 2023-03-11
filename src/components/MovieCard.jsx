import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ title, release_date, poster_path, id }) => {
  const navigate = useNavigate();

  return (
    <div className="!z-5 relative flex flex-col rounded-xl max-w-[300px] bg-clip-border shadow-3xl shadow-shadow-500 w-full mx-auto p-2 bg-purple-500">
      <div className="flex flex-col h-full w-full">
        <div className="relative w-full">
          <img
            src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
            className="mb-3 object-cover rounded-xl 3xl:h-full 3xl:w-full"
            alt=""
          />
        </div>
        <div className="bg-white rounded-xl p-1 backdrop-blur-md grow flex flex-col">
          <div className="mb-3 flex items-center justify-between px-2 md:items-start">
            <div className="mb-2">
              <p className="text-lg font-bold text-navy-700"> {title}</p>
              <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
                {release_date}
              </p>
            </div>
          </div>
          <div className="grow flex items-end">

          <button
            onClick={() => navigate(title, { state: { id: id } })}
            className="linear rounded-[20px] block mx-auto my-3 bg-brand-900 px-10 py-2 text-base font-medium border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700"
          >
            Details
          </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
