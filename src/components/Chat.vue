<style >
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
                    <li>
                        <span class="blue-text items">Name: {{name}}</span> <br>
                        <span class="gray-text items text-darken-3">messages</span> <br>
                        <span class="gray-text items text-darken-3" id="lastList">Tiome </span> <br>
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

export default {
    name: 'Chat',
    components: {
        NewMessage
    },
    data() {
        return {

        }
    },
    props: ['name']
}
</script>

