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
  props: {
    msg: String,
  },
  computed: {
    text: () => "Show All Orders",
  },
});
</script>

<style scoped>
.empty_state-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 25%;
}

.empty_state-image_placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
}

.empty_state-title,
.empty_state-hint {
  text-align: center;
}

.empty_state-actions {
}
</style>
