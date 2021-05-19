<template>
  <div class="populares">
    <h1>Lista Peliculas Populares Prueba</h1>
    <div class="row mx-0">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie">
        {{movie.title}}
      </MovieCard>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import api from "@/services/api.service";
import Movie from "@/models/Movie";
import MovieCard from "@/components/MovieCard";
export default {
  name: "Populares",
  components: {
    MovieCard,
  },
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    this.getPopular(1);
  },
  methods: {
    async getPopular(currentPage) {
      this.currentPage = currentPage;
      const { data } = await api.getPopular(this.currentPage);
      this.movies = data.results;
      this.movies = await Promise.all(
        data.results.map((movie) => this.getMovie(movie.title))
      )
    },
    async getMovie(movieId){
      const {data} =await api.getMovie(movieId);
      return new Movie(data); 
    }
  },
};
</script>
