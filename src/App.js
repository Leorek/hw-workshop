import React, { useState, useEffect } from "react";

// Our api
import MovieApi from "./apis/movie.api";

// Our components
import { NavigationBarComponent } from "./components/navigationBar.component";
import { JumbotronComponent } from "./components/jumbotron.component";
import { CarouselComponent } from "./components/carousel.component";

const AppStyle = {
  carousel: {
    position: "absolute",
    height: 125,
    bottom: 25,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
    paddingTop: 15,
    paddingBottom: 15,
    display: "flex",
    justifyContent: "center"
  }
};

const useFetch = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    MovieApi.fetchMovies().then(res => {
      setMovies(res);
    });
  }, []);

  return movies;
};

export function App(props) {
  const movies = useFetch();
  const [activeTab, setActiveTab] = useState("inicio");
  const [activeMovie, setActiveMovie] = useState("0");

  useEffect(() => {
    if (movies.length) {
      setActiveMovie(movies[0]);
    }
  }, [movies]);

  const navigationMenuItems = [
    {
      label: "Inicio",
      isActive: activeTab === "inicio",
      onClick: () => setActiveTab("inicio")
    },
    {
      label: "Series",
      isActive: activeTab === "series",
      onClick: () => setActiveTab("series")
    },
    {
      label: "Películas",
      isActive: activeTab === "peliculas",
      onClick: () => setActiveTab("peliculas")
    }
  ];

  return (
    <React.Fragment>
      <NavigationBarComponent menuItems={navigationMenuItems} />
      <JumbotronComponent
        title={activeMovie.title}
        description={activeMovie.description}
        background={activeMovie.image}
      />
      <CarouselComponent
        style={AppStyle.carousel}
        movies={movies}
        onMovieClick={id => {
          setActiveMovie(movies[id]);
        }}
      />
    </React.Fragment>
  );
}
