<template>
  <!-- <Header /> -->

  <!-- Sidebar -->
  <Sidebar />

  <!-- Content -->
  <router-view />
  <!-- <Footer /> -->
</template>

<script setup>
import Sidebar from "../Sidebar.vue";
import Header from "../layouts/Header.vue";
import Footer from "../layouts/Footer.vue";
</script>
