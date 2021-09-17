<template>
  <div class="user">
    <img class="user__avatar" src="@/assets/images/image-jeremy.png" alt="avatar">
    <div class="user__info">
      <p>Report for</p>
      <h2>Jeremy Robson</h2>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.user
  background-color: $col-blue
  border-radius: 1.5rem
  display: flex
  align-items: center
  padding: 3.5rem 3.1rem 3.4rem
  height: 13.3rem
  z-index: 1
  @include media('medium')
    flex-direction: column
    align-items: start
    height: 35.4rem
  &__avatar
    border: 3px solid $col-white
    border-radius: 50%
    margin-right: 2rem
    height: 6.4rem
    width: 6.4rem
    @include media('medium')
      margin-right: 0
      margin-bottom: 4.3rem
      height: 8.1rem
      width: 8.1rem
  &__info
    & p
      margin-bottom: 0.4rem
      @include media('medium')
        margin-bottom: 0.3rem
</style>