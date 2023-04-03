<template>
    <div>
      <!-- Champ de recherche, la valeur entrée sera stockée dans la variable search -->
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
        search: "" // Initialise la variable search à une chaîne vide
      };
    },
    methods: {
      async searchCharacter() {
        try {
          const response = await axios.get(
            `https://swapi.dev/api/people/?search=${this.search}` // Appelle l'API avec la valeur du champ de recherche
          );
          this.$emit("search-results", response.data.results); // Émet un événement avec les résultats de recherche pour que le composant parent puisse les récupérer
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
  </script>
  