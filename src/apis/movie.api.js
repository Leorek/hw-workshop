const axios = require("axios");

class MovieApi {
  baseApiUrl = "https://api.themoviedb.org/3/";
  apikey = "cb052509a9f6df8f894435ecb6f05349";

  configuration = null;

  async fetchMovies() {
    if (this.configuration == null) {
      const configData = await this.fetch("configuration");
      if (configData.data) {
        this.apiConfiguration = configData.data;
      }
    }

    const apiResult = await this.fetch("discover/movie");

    return this.getMappingFrom(apiResult);
  }

  getMappingFrom(fetch) {
    if (fetch.data && fetch.data.results) {
      const baseUrl = this.apiConfiguration.images.base_url;
      const backgroundSize = this.apiConfiguration.images.backdrop_sizes[3];
      const moviesRes = fetch.data.results;

      return moviesRes.map((movie, index) => {
        return {
          id: index,
          title: movie.title,
          description: movie.overview,
          image: baseUrl + backgroundSize + movie.backdrop_path
        };
      });
    } else {
      return [];
    }
  }

  fetch(endpoint, params = {}) {
    const url = this.baseApiUrl + endpoint;
    return axios.get(url, {
      params: { ...params, api_key: this.apikey }
    });
  }
}

export default new MovieApi();
