import { ref, onMounted, onUnmounted } from 'vue'

export function useWidth() {
  const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 0)

  const updateWindowWidth = () => {
    if (typeof window !== 'undefined') {
      windowWidth.value = window.innerWidth
    }
  }

  onMounted(() => {
    window.addEventListener('resize', updateWindowWidth)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', updateWindowWidth)
  })

  return { windowWidth }
}
