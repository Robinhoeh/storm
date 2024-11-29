<script setup>
import StormButton from '../Storm/StormButton.vue';
const props = defineProps({
  displayModal: Boolean,
  title: String
});

defineEmits(['closeModal']);
</script>

<template>
  <Transition name="modal">
    <div v-if="props.displayModal" class="modal-mask">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title" :title="props.title" />
          <slot name="title" />
        </div>
        <div class="modal-body">
          <slot name="body" />
        </div>
        <div class="modal-footer">
          <StormButton content="Close" role='utility' @click="$emit('closeModal')" />
        </div>
      </div>
    </div>

  </Transition>
</template>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9999;
  top: 100px;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 80vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
  transition: transform 0.3s ease;

  @media screen and (min-width: 992px) {
    background-color: $mask-color;
    top: 0;
    max-height: 100vh;
  }

  .modal-content {
    width: auto;
    min-width: 291px;
    max-width: 684px;
    padding: 0 16px 0 40px;
    background: white;
    transition: transform 0.3s ease;

    @media screen and (min-width: 992px) {
      padding: 40px;
      border-radius: 8px;
      margin: 204px 0;
    }

    .modal-header {
      margin-bottom: 40px;
    }

    .modal-body {
      @media screen and (min-width: 992px) {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 0 40px;
      }
    }
  }
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(1.1);
}
</style>
