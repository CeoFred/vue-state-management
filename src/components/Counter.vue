<template>
    <div>
        <button class="btn btn-primary" @click="increment(32)">Increment</button>
        <button class="btn btn-primary" @click="decrement(45)">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        methods: {
           ...mapMutations(['increment','decrement'])
           }
    }
</script>