<template>
  <div id="div">
    <h1>Liste des personnages de Star Wars</h1>
    <Search @search-results="updateCharacters" />
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
    this.getCharacters();
  },
  methods: {
    async getCharacters() {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        this.characters = response.data.results;
      } catch (error) {
        console.log(error);
      }
    },
    updateCharacters(results) {
      this.characters = results;
    }
  },
};
</script>
