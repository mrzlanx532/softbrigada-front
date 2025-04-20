<script setup lang="ts">
const softbrigadaSectionRef = useTemplateRef('softbrigadaSectionRef')
const labelRef = useTemplateRef('labelRef')
const spotlightRef = useTemplateRef('spotlightRef')

const updateBackground = (x: number, y: number) => {
  spotlightRef.value.style.background = `radial-gradient(circle at ${x}px ${y}px, #00000000 10px, #000000 350px)`;
}

const mouseMoveListener = (event) => {
  setTimeout(() => {
    updateBackground(event.clientX, event.clientY - softbrigadaSectionRef.value.getBoundingClientRect().top - 193);
  }, 90);
}

const onMouseEnter = () => {
  document.body.addEventListener('mousemove', mouseMoveListener)
}

const onMouseLeave = () => {
  document.body.removeEventListener('mousemove', mouseMoveListener)
}

onMounted(() => {
  document.querySelector('#softbrigada').style.visibility = 'visible'
})
</script>

<template>
  <section ref="softbrigadaSectionRef" id="softbrigada" class="softbrigaga" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <h1 ref="labelRef">SoftBrigada</h1>
    <div ref="spotlightRef" class="softbrigaga__spotlight" />
  </section>
</template>
