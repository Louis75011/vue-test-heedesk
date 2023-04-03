<template>
    <div>
      <ul>
        <!-- Boucle sur les personnages -->
        <li
          v-for="character in characters"
          :key="character.name"
        >
        <!-- Naviguer vers la page du personnage -->
          <router-link
            :to="{ name: 'Character', params: { id: character.url.split('/')[5] } }"
          >{{ character.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'People',
    props: ['characters'], // Propriété pour recevoir la liste des personnages
  };
  </script>
  