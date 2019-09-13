<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <Bar></Bar>
      </div>
      <div class="container">
        <Audio></Audio>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Bar from "./components/Bar.vue";
import Audio from "@/components/Audio.vue";

@Component({
  components: {
    Bar,
    Audio
  }
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
@import "./master.scss";
</style>
