<template>
    <div>
      <ul>
        <li
          style="list-style-type: none; margin: 0.5rem 0;"
          v-for="character in characters"
          :key="character.name"
        >
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
    props: ['characters'],
  };
  </script>
  