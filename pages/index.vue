<script setup lang="ts">
import Hero from '~/components/sections/Hero.vue'
import DevTypes from '~/components/sections/DevTypes.vue'
import Offer from '~/components/sections/Offer.vue'
import ReadyToDiscuss from '~/components/sections/ReadyToDiscuss.vue'
import Roadmap from '~/components/sections/Roadmap.vue'
import Cases from '~/components/sections/Cases.vue'
import TrustUs from '~/components/sections/TrustUs.vue'
import Benefits from '~/components/sections/Benefits.vue'
import Reviews from '~/components/sections/Reviews.vue'
import OpenForm from '~/components/sections/OpenForm.vue'
import FAQ from '~/components/sections/FAQ.vue'
import Footer from '~/components/sections/Footer.vue'
import SoftBrigada from '~/components/sections/SoftBrigada.vue'
import DiscussWidget from '~/components/widgets/DiscussWidget.vue'
</script>

<template>
  <DiscussWidget />

  <Hero />
  <DevTypes />
  <Offer />
  <ReadyToDiscuss />
  <Roadmap />
  <Cases />
  <TrustUs />
  <Benefits />
  <Reviews />
  <OpenForm />
  <FAQ />
  <ReadyToDiscuss :is-second-block="true"/>
  <SoftBrigada />
  <Footer />
</template>
