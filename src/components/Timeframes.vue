<template>
  <div class="timeframes">
    <input id="daily" type="radio" @change="click" v-model="timeframe" value="daily">
    <label for="daily">Daily</label>
    <input id="weekly" type="radio" @change="click" v-model="timeframe" value="weekly" checked>
    <label for="weekly">Weekly</label>
    <input id="monthly" type="radio" @change="click" v-model="timeframe" value="monthly">
    <label for="monthly">Monthly</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeframe: ''
    }
  },
  methods: {
    click() {
      this.$emit('switch-timeframe', this.timeframe)
    }
  }
}
</script>

<style lang="sass" scoped>
.timeframes
  background-color: $col-dark-blue
  border-radius: 0 0 1.5rem 1.5rem
  display: flex
  align-items: center
  justify-content: space-around
  position: relative
  margin-bottom: 6.2rem
  height: 7rem
  @include media('medium')
    flex-direction: column
    align-items: start
    justify-content: flex-start
    padding: 2.6rem 3.2rem 3.2rem
    height: 16.4rem
  &::before
    background-color: $col-dark-blue
    content: ''
    position: absolute
    top: -2.5rem
    left: 0
    height: 3rem
    width: 100%
  & input[type=radio]
    display: none
    &:checked + label
      color: $col-white
  & label
    cursor: pointer
    transition: $transition color
    @include media('medium')
      margin-bottom: 2.1rem
</style>