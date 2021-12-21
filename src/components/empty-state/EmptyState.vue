<template>
  <div>
    <div :class="`${baseCssClass}-container`">
      <div class="empty_state-image_placeholder">
        <slot name="image-placeholder" />
      </div>
      <div :class="`${baseCssClass}-title`">
        <slot name="title"> </slot>
      </div>
      <div :class="`${baseCssClass}-hint`">
        <slot name="hint"> </slot>
      </div>
      <div :class="`${baseCssClass}-actions`">
        <slot name="action"> </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "EmptyState",
  computed: {
    baseCssClass: () => "empty_state",
  },
});
</script>

<style scoped>
.empty_state-container {
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.empty_state-image_placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.empty_state-title,
.empty_state-hint {
  text-align: center;
}

.empty_state-actions {
  display: flex;
  justify-content: center;
  gap: 8px;
}

@media screen and (max-device-width: 375px) {
  .empty_state-image_placeholder {
    flex-direction: column;
  }
}
</style>
