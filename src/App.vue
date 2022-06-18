<template>
  <login />
</template>

<script setup>
import Sidebar from "./components/Sidebar.vue";
import Header from "./components/layouts/Header.vue";
import Footer from "./components/layouts/Footer.vue";
import login from "./components/login/Login.vue";
</script>

<style lang="scss">
:root {
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
  --body-color: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
}

body {
  background: var(--body-color);
  position: relative;
  width: 1440px;
  height: 969px;
  border-radius: 20px;
  overflow-x: hidden;
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}
</style>
