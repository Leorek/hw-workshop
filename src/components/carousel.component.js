import React from "react";

export function CarouselComponent(props) {
  const { style, movies, onMovieClick } = props;

  const movieImages =
    movies &&
    movies.map((movie, index) => {
      return (
        <img
          key={index}
          src={movie.image}
          onClick={() => {
            onMovieClick(movie.id);
          }}
          style={{ width: "auto", height: "100%", padding: 2 }}
        />
      );
    });

  const itemsToRender = movieImages.slice(0, 5);

  return <div style={{ ...style }}>{itemsToRender}</div>;
}
