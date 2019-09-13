<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link">
        <p class="title app-logo">Music player</p>
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <ButtonBar></ButtonBar>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ButtonBar from "./ButtonBar.vue";

@Component({
  components: {
    ButtonBar
  }
})
export default class Bar extends Vue {}
</script>

<style lang="scss" scoped>
.app-logo {
  font-family: "Permanent Marker", cursive;
}
</style>
