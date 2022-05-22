<script>
import signupVue from "./pages/signup.vue";
import Navbar from "./components/layout/navbar.vue";

export default {
  name: "App",
  components: {
    signupVue,
    Navbar
    
  }
}
</script>

<template>

<!-- <Navbar /> -->
<router-view></router-view>
</template>

<style>


</style>