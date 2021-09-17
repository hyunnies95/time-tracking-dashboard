<template>
  <div class="card" :class="'card--' + color">
    <div class="card__title">
      <h3>{{ title }}</h3>
      <img src="@/assets/images/icon-ellipsis.svg" alt="dots">
    </div>
    <div class="card__hours">
      <h1>{{ current }}hrs</h1>
      <p>Last Week - {{ previous }}hrs</p>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      required: true,
      type: String
    },
    current: {
      required: true,
      type: Number
    },
    previous: {
      required: true,
      type: Number
    },
    color: {
      type: String
    }
  }
}
</script>

<style lang="sass" scoped>
.card
  background-color: $col-dark-blue
  border-radius: 1.5rem
  cursor: pointer
  padding: 2.8rem 2.4rem
  position: relative
  transition: $transition background-color
  height: 12.2rem
  @include media('medium')
    padding: 2.9rem 3rem 3.2rem
    height: 19.9rem
  &:hover
    background-color: $col-dark-blue-hover
  &::before
    border-radius: 1.5rem 1.5rem 0 0
    background-repeat: no-repeat
    background-position-x: 90%
    background-position-y: center
    content: ''
    position: absolute
    top: -3.8rem
    left: 0
    height: 5.8rem
    width: 100%
    z-index: -1
    @include media('medium')
      top: -4.5rem
  &__title
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 0.6rem
    @include media('medium')
      margin-bottom: 2.4rem
    & img:hover
      filter: brightness(100)
  &__hours
    display: flex
    align-items: center
    justify-content: space-between
    @include media('medium')
      flex-direction: column
      align-items: start
    & h1
      @include media('medium')
        margin-bottom: 0.8rem
  &--work::before
    background-color: $col-work
    background-image: url('~@/assets/images/icon-work.svg')
  &--play::before
    background-color: $col-play
    background-image: url('~@/assets/images/icon-play.svg')
  &--study::before
    background-color: $col-study
    background-image: url('~@/assets/images/icon-study.svg')
  &--exercise::before
    background-color: $col-exercise
    background-image: url('~@/assets/images/icon-exercise.svg')
  &--social::before
    background-color: $col-social
    background-image: url('~@/assets/images/icon-social.svg')
  &--self-care::before
    background-color: $col-self-care
    background-image: url('~@/assets/images/icon-self-care.svg')
</style>