/* eslint-disable @next/next/no-img-element */
"use client";
import { CircularProgress, Pagination } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    axios
      .get(`https://moviesdatabase.p.rapidapi.com/titles/x/upcoming`, {
        headers: {
          "x-rapidapi-host": process.env.NEXT_PUBLIC_RapidAPIHost,
          "x-rapidapi-key": process.env.NEXT_PUBLIC_RapidAPIKey,
        },
      })
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container py-20">
      <div className="text-2xl">Welcome...</div>
      <div className="mt-2 text-lg">
        You've found the most accurate source for TV and film. Our information comes from fans like you, so create a free account and help your favorite shows and movies. Everything added is shared with many other sites, mobile apps, and devices.
      </div>
      <div className="mt-10">
        <div className="text-2xl">Trending Movies & TV </div>
      </div>
      {loading ? (
        <div className="container py-20">
          <CircularProgress sx={{ color: "white" }} />
        </div>
      ) : (
        <>
          <div className="mt-5 grid grid-cols-4 gap-4">
            {movies?.results
              ?.filter((f) => f.primaryImage)
              .map((movie, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="
              w-[350px]
              rounded-md
              overflow-hidden
              cursor-pointer
              
            "
                  >
                    <img src={movie?.primaryImage?.url} alt="movie" onClick={() => router.push(`/${movie?.titleText?.text}`)} />
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
}
