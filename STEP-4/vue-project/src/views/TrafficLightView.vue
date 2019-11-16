<template>
    <div id="traffic-light-view">
        <div class="light-wrap">
            <div v-for="(circle,index) in lights" :key="index">  
                <div class="circle" :class="circle.colorClassName">
                    {{circle.value}}
                </div>
            </div>
        </div>
        <div class="btns-wrap">
            <button @click="colorChange">신호등 변경</button>
            <button @click="positionChange">신호등 위치 변경</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TrafficLightView',
        data() {
            return {
                'lights' : [
                    {
                        'colorClassName' : 'yg',
                        'value' : 1,
                    },
                    {
                        'colorClassName' : 'bl',
                        'value' : 2,
                    },
                    {
                        'colorClassName' : 're',
                        'value' : 3,
                    }
                ]
            }
        },
        methods: {
            colorChange() {
                this.lights[0].colorClassName = 're';
                this.lights[1].colorClassName = 'yg';
                this.lights[2].colorClassName = 'bl';
                this.lights = Object.assign({}, this.lights, this.lights)
            },
            positionChange() {
                let temp = Object.assign({}, this.lights);
                this.lights[0] = temp[2];
                this.lights[1] = temp[0];
                this.lights[2] = temp[1];

                this.lights = Object.assign({}, this.lights, this.lights)
                // Vue.set(this.lights, 0,temp[2]);
                // Vue.set(this.lights, 1, temp[0]);
                // Vue.set(this.lights, 2, temp[1]);    
            }
        }
    }
</script>

<style lang="scss" scoped>
    #traffic-light-view {
        padding: 20px;
        .light-wrap {
            display: flex;
            div {
                flex : 1;
                margin: auto;
            }
        }
        .circle {
            width:100px;
            height: 100px;
            line-height: 100px;
            color: white;
            font-size: 24px;
            border-radius: 100%;
            &.yg {
                background-color: yellowgreen;
            }
            &.bl {
                background-color: blueviolet;
            }
            &.re {
                background-color: red;
            }
        }
        .btns-wrap {
            margin: 50px;
            display: flex;
            flex-direction: column;
            button {
                background-color: #0078e7;
                font-family: inherit;
                font-size: 100%;
                padding: .5em 1em;
                color: white;
                border: 1px solid #999;
                border: none transparent;
                text-decoration: none;
                border-radius: 2px;
                margin-top: 10px;
                cursor: pointer;
            }
        }
    }
</style>