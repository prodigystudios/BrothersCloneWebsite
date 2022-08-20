<template>
  <nav>
    <router-link to="/">Hem</router-link> 
    <router-link to="/menu">Meny</router-link>
    <router-link to="/contact">kontakta oss</router-link>
  </nav>
    <div>
        <img src="./assets/brodernas-logo-guld-liten.png">
    </div>
  <router-view/>
</template>

<style>
html {
  overflow-y:scroll;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: center;
  gap:10px;
  padding: 30px;
}
body {
  background: black;
}
nav a {
  font-weight: bold;
  font-size: 25px;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: rgb(255, 215, 0);
}

</style>
