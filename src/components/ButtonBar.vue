<template>
  <div class="bar-container box is-shadowless">
    <div class="field is-grouped is-grouped-multiline">
      <div class="field has-addons">
        <p class="control">
          <a
            class="button is-medium"
            :class="{ 'is-primary': currentState == 'playing' }"
          >
            <span class="icon">
              <i class="bx bx-play"></i>
            </span>
          </a>
        </p>
        <p class="control">
          <a
            class="button is-medium"
            :class="{ 'is-primary': currentState == 'playing' }"
          >
            <span class="icon">
              <i class="bx bx-pause"></i>
            </span>
          </a>
        </p>
        <p class="control">
          <a
            class="button is-medium"
            :class="{ 'is-primary': currentState == 'stopped' }"
          >
            <span class="icon">
              <i class="bx bx-stop"></i>
            </span>
          </a>
        </p>
      </div>
      <div class="field has-addons">
        <p class="control">
          <a class="button is-medium">
            <span class="icon">
              <i class="bx bx-skip-previous"></i>
            </span>
          </a>
        </p>
        <p class="control">
          <a class="button is-medium">
            <span class="icon">
              <i class="bx bx-rewind"></i>
            </span>
          </a>
        </p>
        <p class="control">
          <a class="button is-medium">
            <span class="icon">
              <i class="bx bx-fast-forward"></i>
            </span>
          </a>
        </p>
        <p class="control">
          <a class="button is-medium">
            <span class="icon">
              <i class="bx bx-skip-next"></i>
            </span>
          </a>
        </p>
      </div>
      <div class="field has-addons">
        <p class="control">
          <a class="button is-medium">
            <span class="icon">
              <i class="bx bx-shuffle"></i>
            </span>
          </a>
        </p>
        <p class="control">
          <a class="button is-medium">
            <span class="icon">
              <i class="bx bx-repeat"></i>
            </span>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ButtonBar extends Vue {}
</script>

<style lang="scss" scoped>
.bar-container {
  display: flex;
  align-items: center;
}
</style>
