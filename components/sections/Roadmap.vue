<script setup lang="ts">
const marginLeft = ref< undefined | string >(undefined)
const tableContainerRef = useTemplateRef('tableContainerRef')
const tableStepsRef = useTemplateRef('tableStepsRef')
const tableRef = useTemplateRef('tableRef')
const roadmapRef = useTemplateRef('roadmapRef')

onMounted(() => {

  marginLeft.value = window.getComputedStyle(document.querySelector('#ready-to-discuss')).marginLeft

  const rect = tableRef.value.getBoundingClientRect()

  tableStepsRef.value.style.width = rect.width + 'px'
  tableStepsRef.value.style.height = rect.height + 'px'

  const options = {
    root: null,
    threshold: 1.0,
  };

  const scrollTo = (e) => {
    //
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio === 1) {

        const rect = tableContainerRef.value.getBoundingClientRect()


        tableContainerRef.value.style.width = '100%'

        //tableContainerRef.value.style.top = rect.top + 'px'
        //tableContainerRef.value.style.left = rect.left + 'px'
        //tableContainerRef.value.style.position = 'fixed'

        window.addEventListener('scroll', scrollTo)

        console.log('✅ Элемент полностью виден в окне!');
      } else {
        //tableContainerRef.value.style.position = 'fixed'
        console.log('❌ Элемент не полностью виден.');
      }
    });
  }, options);

  observer.observe(tableContainerRef.value)
})
</script>

<template>
  <section id="roadmap" class="roadmap" :style="{ 'margin-left': marginLeft }">
    <div>
      <h2>
        <span>Дорожная</span>
        <span>карта</span>
      </h2>
      <div class="roadmap__pin-spacer">
        <div id="test" ref="tableContainerRef" style="position: relative; height: 588px; overflow-x: hidden;">
          <div ref="tableStepsRef" style="position: absolute; ">
            <div class="roadmap__step --1">Аналитика и проектирование</div>
            <div class="roadmap__step --2">Дизайн</div>
            <div class="roadmap__step --3">Верстка</div>
            <div class="roadmap__step --4">Программирование и ввод в эксплуатацию</div>
          </div>
          <table ref="tableRef" style="position: absolute; ">
            <tbody>
              <tr>
                <td v-for="(_, index) in 15">
                  <template v-if="index === 0">
                    Начало
                  </template>
                  <template v-else-if="index === 14">
                    Сдача
                  </template>
                  <template v-else>
                    {{ index * 2 }} нед.
                  </template>
                </td>
              </tr>
              <tr>
                <td v-for="(_, index) in 10">
                  <div class="roadmap__divider-wrapper">
                    <div class="roadmap__divider" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="roadmap__progress-bar">
            <!-- TODO -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
