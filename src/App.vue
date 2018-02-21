<template>
    <div id="app">
      <main class="container is-fluid">
        <router-view/>
      </main>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
    margin: 0;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
html, body, #app{
    height: 100%;
  }

main {
    text-align: center;
    margin-top: 40px;
}
</style>
