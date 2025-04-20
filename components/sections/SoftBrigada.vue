<script setup lang="ts">
const softbrigadaSectionRef = useTemplateRef('softbrigadaSectionRef')
const labelRef = useTemplateRef('labelRef')
const spotlightRef = useTemplateRef('spotlightRef')

const updateBackground = (x: number, y: number) => {
  spotlightRef.value.style.background = `radial-gradient(circle at ${x}px ${y}px, #00000000 10px, #000000 350px)`;
}

const mouseMoveListener = (event) => {
  setTimeout(() => {
    updateBackground(event.clientX, event.clientY - softbrigadaSectionRef.value.getBoundingClientRect().top);
  }, 90);
}

onMounted(() => {
  softbrigadaSectionRef.value.style.visibility = 'visible'
  softbrigadaSectionRef.value.children[1].style.height = softbrigadaSectionRef.value.offsetHeight + 'px'

  const io = new IntersectionObserver((entries) => {
    entries[0].isIntersecting ?
        document.body.addEventListener('mousemove', mouseMoveListener) :
        document.body.removeEventListener('mousemove', mouseMoveListener)
  })
  io.observe(softbrigadaSectionRef.value)
})
</script>

<template>
  <section ref="softbrigadaSectionRef" id="softbrigada" class="softbrigaga">
    <h1 ref="labelRef">SoftBrigada</h1>
    <div ref="spotlightRef" class="softbrigaga__spotlight" />
  </section>
</template>
