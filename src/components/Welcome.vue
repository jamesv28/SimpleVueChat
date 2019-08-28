<template>
  <div class="container">
    <div class="">
      <div class="card-content center-align">
        <h2 class="blue-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name: </label>
          <input type="text">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {

    }
  },
  methods: {
    enterChat() {

    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
