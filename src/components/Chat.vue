<style >
.messages {
    margin-left: 16px;
    max-height: 300px;
    overflow: auto;
}
.messages .items {
    font-size: 1.4em !important;
}

#lastList {
    font-size: 1.2em;
}

</style>

<template>
    <div class="container">
        <h2 class="blue-text center-align">Ninja Chat</h2>
        <div class="card">
            <div class="card-cont">
                <ul class="messages">
                    <li v-for="message in messages" :key="message.id">
                        <span class="blue-text items">Name: {{message.name}}</span> <br>
                        <span class=" blue-grey-text lighten-3 items">Message: <span class="grey-text darken-1">{{ message.content }}</span> </span> <br>
                        <span class=" blue-grey-text lighten-3 items" id="lastList">Time: <span class="grey-text darken-1">{{ message.timestamp }} </span> </span> <br>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <NewMessage :name="name" />
            </div>
        </div>
    </div>
</template>

<script>
import NewMessage from '@/components/NewMessage';
import db from '@/firebase/init';
import moment from 'moment';

export default {
    name: 'Chat',
    components: {
        NewMessage
    },
    created() {
        let ref = db.collection('messages').orderBy('timestamp');
        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type == 'added') {
                    let doc = change.doc;
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: moment(doc.data().timestamp).format('lll')
                    });
                }
            })
        }) 
    },
    data() {
        return {
            messages: []
        }
    },
    props: ['name']
}
</script>

