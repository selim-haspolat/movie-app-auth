import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const [youtube, setYoutube] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    state: { id },
  } = useLocation();
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

  const getMovieDetail = async () => {
    const { data } = await axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    );
    setMovieDetail(data);
  };

  const getVideo = async () => {
    const { data } = await axios(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
    );
    setYoutube(data);
    setLoading(false);
  };

  useEffect(() => {
    getMovieDetail();
    getVideo();
  }, []);

  const { title, homepage, genres, overview, vote_average } = movieDetail;

  return (
    <div className="mt-[64px]">
      {loading ? (
        <div className="w-fit mx-auto mt-36 text-5xl">Loading...</div>
      ) : (
        <>
          <h1 className="text-5xl text-center mt-5 font-light">{title}</h1>
          <div className="w-72 h-40 md:w-[450px] md:h-[250px] lg:w-[650px] lg:h-[400px] mx-auto mt-5">
            <ReactPlayer
              className="react-player"
              width={"100%"}
              height="100%"
              style={{}}
              url={`https://www.youtube.com/watch?v=${youtube?.results[0]?.key}`}
              controls
            />
          </div>

          <div className="flex flex-col gap-5 mt-3">
            <div className="p-5 text-center">{overview}</div>

            <div className="text-center font-light">
              {genres?.map((g) => g.name).join(" - ")}
            </div>

            <div className="flex justify-center items-center gap-2">
              <StarRatingComponent
                className="text-3xl"
                name="rate"
                starCount={5}
                value={Math.round(vote_average / 2)}
                editing={true}
              />
              <span className="text-2xl font-light">
                {vote_average?.toFixed(1)}
              </span>
            </div>

            {homepage && (
              <a
                href={homepage}
                target="_blank"
                className="block w-fit mx-auto text-blue-300 hover:underline"
              >
                Visit Website
              </a>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
