<template>
  <div class="row intro">
    <div class="welcome col s6 offset-s3 card">
      <div class="card-content ">
        <h2 class="blue-text center-align">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name" >Enter your name: </label>
          <input type="text" id="name" v-model="name">
          <div class="center-align big-margin">
           <button class="btn blue">Enter Chat</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable //

export default {
  name: 'Welcome',
  data () {
    return {
      name: null
    }
  },
  methods: {
    enterChat() {
      // eslint-disable-next-line
      console.log(this.name);
    }
  }

}
</script>

<style>
  .intro {
    margin-top: 100px;
  }

  .big-margin {
    margin-top: 30px;
  }
</style>
