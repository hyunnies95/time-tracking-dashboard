<template>
  <ul class="cards">
    <li v-for="card in cards" :key="card.id">
      <Card 
        :title="card.title"
        :color="color(card.title)"
        :current="card.timeframes[timeframe].current"
        :previous="card.timeframes[timeframe].previous"
      />
    </li>
  </ul>
</template>

<script>
import Card from './Card.vue'
import json from '@/data/data.json'

export default {
  components: {
    Card
  },
  props: {
    timeframe: {
      required: true,
      type: String
    },
  },
  data() {
    return {
      cards: json
    }
  },
  methods: {
    color(card) {
      return card.toLowerCase().replace(/ /g,"-")
    }
  }
}
</script>

<style lang="sass" scoped>
.cards
  display: grid
  gap: 6.2rem
  @include media('medium')
    gap: 7.4rem
    column-gap: 3rem
    grid-template-columns: repeat(2, 1fr)
    margin-top: 4.5rem
  @include media('large')
    gap: 1.2rem
    column-gap: 3rem
    grid-template-columns: repeat(3, 1fr)
</style>