<template>
    <div>
        <p>{{time}}</p>
        <p>{{clock}}</p>
    </div>
</template>

<script>
    export default {
        name: 'clockView',
        data() {
            return {
                time: new Date()
            }
        },
        created() {
            this.setEvent();
        },
        computed: {
            clock: function () {
                return this.time.toISOString().substring(0, 19);
            }
        },
        methods: {
            setEvent() {
                const ths = this;
                setInterval(() => {
                    ths.time = new Date();
                }, 1000)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>