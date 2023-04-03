<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-transform: uppercase;
}

#div {
  width: 70%;
  margin: 0 auto;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: lightblue;
}

a {
  color: #2c3e50;
  font-weight: bold;
  text-decoration: none;
}

input {
  width: 140px;
  border-radius: 0.3rem;
  box-shadow: 2px 1px 1px 1px gray;
}

li {
  list-style-type: none;
}

button {
  padding: 0.3rem;
  border-radius: 0.5rem;
  background-color: lightgray;
  margin-bottom: 2rem;
}

</style>
