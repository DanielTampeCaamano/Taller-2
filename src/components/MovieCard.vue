<template>
  <div class="col-md-3">
    <div class="card" style="width: 18rem">
      <img :src="movie.poster_path" class="card-img-top" :alt="movie.id" />
      <div class="card-body">
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Movie from "@/models/Movie";
export default {
  props: {
    movie: {
      required: true,
      type: Movie,
    },
  },
};
</script>

<style>
</style>