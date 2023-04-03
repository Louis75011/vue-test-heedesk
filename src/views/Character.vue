<template>
    <div id="div">
      <!-- Affichage de chaque information sur le personnage cliqué -->
      <h2>{{ character.name }}</h2>
      <ul>
        <li>Poids : {{ character.mass }}</li>
        <li>Couleur des yeux : {{ character.eye_color }}</li>
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
      // Récupération des informations du personnage via l'API
      const response = await axios.get(`https://swapi.dev/api/people/${this.$route.params.id}/`);
      this.character = response.data;
    },
  };
  </script>
  