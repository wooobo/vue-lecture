<template>
    <div>
        <div class="count-container">
            <div class="c-row" v-for="(count ,index) in counts" :key="index">
                <div class="circle-wrap" >
                    <div>
                        <div class="circle" :style="{backgroundColor: count.color}">
                            {{count.value}}
                        </div>
                    </div>
                    <div>
                        <div class="circle" :style="{backgroundColor: count.color}">
                            {{count.value}}
                        </div>
                    </div>
                    <div>
                        <div class="circle" :style="{backgroundColor: count.color}">
                            {{count.value}}
                        </div>
                    </div>
                </div>
            </div>

            <div class="btns-wrap">
                <button :style="{backgroundColor: counts[0].color}" @click="up(counts[0])">초록영역 카운트가 1증가</button>
                <button :style="{backgroundColor: counts[1].color}" @click="up(counts[1])">파랑영역 카운트가 1증가</button>
                <button :style="{backgroundColor: counts[2].color}" @click="up(counts[2])">빨강영역 카운트가 1증가</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'coutingView',
        data() {
            return {
                counts: [
                    {
                        value: 1,
                        color: 'green',
                    },
                    {
                        value: 1,
                        color: 'blue',
                    },
                    {
                        value: 1,
                        color: 'red',
                    },
                ]
            }
        },
        methods: {
            up(count) {
                count.value += 1;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .count-container {
        display: flex;
        flex-direction: column;
        .c-row {
            width: 100%;
            margin: 20px 0;
        }
        .circle-wrap{
            display: flex;
            div {
                flex: 1;
                margin: auto;
            }
        }
        .circle {
            width: 50px;
            height: 50px;
            line-height: 50px;
            color: white;
        }

        .btns-wrap {
            display: flex;
            button {
                flex: 1;
                padding: 10px;
                color: white;
                cursor: pointer;
                font-size: 20px;
            }
        }
    }
</style>