/* eslint-disable @next/next/no-img-element */
"use client";
import { Chip, CircularProgress, Divider, Pagination } from "@mui/material";
import axios from "axios";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Index() {
  const [moviea, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const title = params?.title;

  useEffect(() => {
    console.log("title", title);
    if (title) {
      axios
        .get(`https://moviesdatabase.p.rapidapi.com/titles/search/title/${title}`, {
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
    }
  }, [title]);

  const movie = moviea?.results?.[0];

  if (loading) {
    return (
      <div className="container py-20 h-[60vh]">
        <CircularProgress sx={{ color: "white" }} />
      </div>
    );
  }

  return (
    <div className="container py-20 h-[60vh]">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-2">
          <img src={movie?.primaryImage?.url} alt="movie" />
        </div>
        <div className="col-span-10">
          <div className="text-3xl">{movie?.titleText?.text}</div>
          <Divider className="py-2" />
          {/* releast date */}
          {movie?.releaseDate && (
            <div className="mt-5">
              <div className="text-2xl">Release Date</div>
              <div className="mt-2 text-white/80">
                (
                <>
                  {movie?.releaseDate?.day}/{movie?.releaseDate?.month}/{movie?.releaseDate?.year}
                </>
                )
              </div>
            </div>
          )}
          <Divider className="py-2" />
          <div className="mt-5">
            <div className="text-2xl">Tagline</div>
            <div className="mt-2 text-white/80">We all share the same fate.</div>
          </div>
          <Divider className="py-2" />
          <div className="mt-5">
            <Chip label="Action" className="mr-2 text-white/70" />
            <Chip label="Adventure" className="mr-2 text-white/70" />
            <Chip label="Fantasy" className="mr-2 text-white/70" />
            <Chip label="Science Fiction" className="mr-2 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
}
