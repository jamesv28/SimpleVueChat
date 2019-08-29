<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <label for="newMessage">Enter a new message <span>(press enter) </span> </label>
            <input type="text" id="newMessage" v-model="newMessage">
            <p v-if="feedback" class="red-text">
                {{ feedback }}
            </p>
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init';

export default {
    name: 'NewMessage',
    props: ['name'],
    data() {
        return {
            newMessage: null,
            feedback: null
        }
    },
    methods: {
        addMessage() {
            if(this.newMessage) {
                this.feedback = null
                db.collection('messages').add({
                    content: this.newMessage,
                    name: this.name,
                    timestamp: Date.now()
                }).catch(err => {
                    // eslint-disable-next-line
                    console.log(err)
                })
                this.newMessage = null
            } else {
                this.feedback = "You must enter a new message in order to complete"
            }
        }
    }
}
</script>

<style>
    
</style>