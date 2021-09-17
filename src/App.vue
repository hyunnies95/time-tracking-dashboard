<template>
  <div class="container">
    <div class="wrapper">
      <User />
      <Timeframes @switch-timeframe="switchTimeframe" />
    </div>
    <Cards :timeframe="timeframe"/>
  </div>
</template>

<script>
import User from './components/User.vue'
import Timeframes from './components/Timeframes.vue'
import Cards from './components/Cards.vue'

export default {
  name: 'App',
  components: {
    User,
    Timeframes,
    Cards
  },
  data() {
    return {
      timeframe: 'weekly'
    }
  },
  methods: {
    switchTimeframe(timeframe) {
      this.timeframe = timeframe
    },
    color(card) {
      return card.toLowerCase().replace(/ /g,"-")
    }
  }
}
</script>
