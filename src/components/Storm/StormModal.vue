<script setup>
const props = defineProps({
  displayModal: Boolean,
  title: String
});

defineEmits(['closeModal']);
</script>

<template>
  <Transition>
    <div v-if="props.displayModal" class="modal">
      <div class="modal-mask">
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-title" :title="props.title" />
            <slot name="title" />
          </div>
          <div class="modal-body">
            <slot name="body" />
          </div>
          <div class="modal-footer">
            <button class="close-button" @click="$emit('closeModal')">Close</button>
          </div>
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
  background-color: $mask-color;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border: 1px dotted red;
  // display: none;

  .modal-content {
    width: auto;
    min-width: 291px;
    max-width: 600px;
    padding: 0 16px 0 40px;

    .modal-header {
      margin-bottom: 40px;


    }
  }
}
</style>
