<template>
  <div class="row intro">
    <div class="welcome col s6 offset-s3 card">
      <div class="card-content ">
        <h2 class="blue-text center-align">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name" >Enter your name: </label>
          <input type="text" id="name" v-model="name">
          <div class="center-align big-margin">
            <p v-if="feedback" class="red-text feedback">
              {{ feedback }}
            </p>
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
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat() {
      // eslint-disable-next-line
      if (this.name) {
        this.$router.push({
          name: 'Chat',
          params: {
            name: this.name
          }
        })
      }
      else {
        this.feedback = "You must enter a name to join"
      }
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

  .feedback {
    margin-bottom: 20px !important;
  }
</style>
