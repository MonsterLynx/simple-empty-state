<template>
  <div>
    <div class="empty_state-container">
      <div class="empty_state-image_placeholder">
        <slot name="image-placeholder" />
      </div>
      <div class="empty_state-title">
        <slot name="title"> </slot>
      </div>
      <div class="empty_state-hint">
        <slot name="hint"> </slot>
      </div>
      <div class="empty_state-actions">
        <slot name="action"> </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "EmptyState",
});
</script>

<style scoped>
.empty_state-container {
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
