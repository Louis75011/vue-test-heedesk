<template>
    <div>
      <input
        v-model="search"
        type="text"
        placeholder="Search for a character..."
        @input="searchCharacter"
      />
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "Search",
    data() {
      return {
        search: ""
      };
    },
    methods: {
      async searchCharacter() {
        try {
          const response = await axios.get(
            `https://swapi.dev/api/people/?search=${this.search}`
          );
          this.$emit("search-results", response.data.results);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
  </script>
  