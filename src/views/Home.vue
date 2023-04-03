<template>
  <div id="div">
    <h1>Liste des personnages de Star Wars</h1>
    <!-- Composant de recherche avec un événement pour récupérer les résultats -->
    <Search @search-results="updateCharacters" />
    <!-- Composant pour afficher la liste des personnages -->
    <People :characters="characters" />
  </div>
</template>

<script>
import axios from 'axios';
import People from './People.vue';
import Search from './Search.vue';

export default {
  name: 'Home',
  components: {
    People,
    Search,
  },
  data() {
    return {
      characters: [],
    };
  },
  created() {
    // Appel de la méthode pour récupérer la liste des personnages au chargement de la page
    this.getCharacters();
  },
  methods: {
    async getCharacters() {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        this.characters = response.data.results;
      } catch (error) {
        console.log(error.message);
      }
    },
    // Méthode pour mettre à jour la liste des personnages avec les résultats de recherche
    updateCharacters(results) {
      this.characters = results;
    }
  },
};
</script>
