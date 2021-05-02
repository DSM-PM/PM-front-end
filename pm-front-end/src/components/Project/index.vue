<template>
  <div class="home-container">
    <h1 class="home-container-title">Projects</h1>
    <project />
  </div>
</template>

<script>
import { Project } from "./";
export default {
  components: { project: Project }
};
</script>