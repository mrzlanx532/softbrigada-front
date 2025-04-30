<script setup lang="ts">
const softbrigadaSectionRef = useTemplateRef('softbrigadaSectionRef')
const labelRef = useTemplateRef('labelRef')
const spotlightRef = useTemplateRef('spotlightRef')

let isFirstAnimationIntermediateStopped = false
let isFirstAnimationStarted = false

let firstIO: IntersectionObserver | undefined = undefined
let secondIO: IntersectionObserver | undefined = undefined

const updateBackground = (x: number, y: number) => {
  spotlightRef.value.style.background = `radial-gradient(circle at ${x}px ${y}px, #00000000 10px, #000000 350px)`;
}

const mouseMoveListener = (event) => {
  setTimeout(() => {
    window.requestAnimationFrame(
        updateBackground.bind(
            undefined,
            event.clientX,
            event.clientY - softbrigadaSectionRef.value.getBoundingClientRect().top
        ));
  }, 90);
}

const startSpotlightAnimation = () => {
  const start = performance.now();
  const duration = 4000
  const startX = 0
  const endX = spotlightRef.value.offsetWidth

  const easeInOutQuad = (t) => {
    return t < 0.5
        ? 2 * t * t
        : -1 + (4 - 2 * t) * t;
  }

  const animate = (time) => {
    let elapsed = time - start;
    let progress = Math.min(elapsed / duration, 1);
    let easedProgress = easeInOutQuad(progress);

    spotlightRef.value.style.background = `radial-gradient(circle at ${startX + (endX - startX) * easedProgress}px 0px, #00000000 10px, #000000 350px)`;

    if (progress < 1 && !isFirstAnimationIntermediateStopped) {
      requestAnimationFrame(animate);
      return
    }

    firstIO!.disconnect()

    secondIO = new IntersectionObserver((entries) => {
      entries[0].isIntersecting ?
          document.body.addEventListener('mousemove', mouseMoveListener) :
          document.body.removeEventListener('mousemove', mouseMoveListener)
    })
    secondIO.observe(softbrigadaSectionRef.value)
  }
  requestAnimationFrame(animate)
}

onMounted(() => {
  softbrigadaSectionRef.value.style.visibility = 'visible'
  softbrigadaSectionRef.value.children[1].style.height = softbrigadaSectionRef.value.offsetHeight + 'px'

  firstIO = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      isFirstAnimationStarted = true
      startSpotlightAnimation()
      return
    }

    if (isFirstAnimationStarted) {
      isFirstAnimationIntermediateStopped = true
    }
  }, {
    rootMargin: '0px 0px -80px 0px'
  })
  firstIO.observe(spotlightRef.value)
})

onUnmounted(() => {
  if (firstIO) {
    firstIO.disconnect()
  }

  if (secondIO) {
    secondIO.disconnect()
  }
})
</script>

<template>
  <section ref="softbrigadaSectionRef" id="softbrigada" class="softbrigaga">
    <h1 ref="labelRef">SoftBrigada</h1>
    <div ref="spotlightRef" class="softbrigaga__spotlight" />
  </section>
</template>
