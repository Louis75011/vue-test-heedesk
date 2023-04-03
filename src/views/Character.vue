<template>
    <div id="div">
      <h2>{{ character.name }}</h2>
      <ul>
        <li style="list-style-type: none;">Poids : {{ character.mass }}</li>
        <li style="list-style-type: none;">Couleur des yeux : {{ character.eye_color }}</li>
      </ul>
      <button><router-link :to="{ name: 'Home' }">Retour à la liste des personnages</router-link></button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Character',
    data() {
      return {
        character: {},
      };
    },
    async created() {
      const response = await axios.get(`https://swapi.dev/api/people/${this.$route.params.id}/`);
      this.character = response.data;
    },
  };
  </script>
  