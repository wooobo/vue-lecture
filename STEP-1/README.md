# STEP 1

## 1. Hello Vue를 출력해 보자

    - cdn을 활용하여 데이터를 출력
    
    ./index.html
    
    <html>
        <head>
            <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        </head>
        <body>
            <div id="app">
                {{ message }}
            </div>
    
            <script>
    						// 뷰 인스턴스 생성
                var app = new Vue({
                    el: '#app',
                    data: {
                        message: '헬로우 뷰!'
                    }
                })
            </script>
        </body>
    </html>

## 2. 컴포넌트를 만들어 보자

    ./index2.html
    
    1. 컴포넌트 출력
    
    <div id="app">
        <my-component></my-component>
    </div>
    
    <script>
        // 뷰 인스턴스 생성전에 만들어줘야합니다.
        Vue.component('my-component', {
            data() {
                return {
    	            count: 0
                }
            },
            template:'<div>난 컴포넌트</div>'
        });
    
        // 뷰 인스턴스 생성
        var app = new Vue({
            el: '#app',
            data: {
                message: '헬로우 뷰!'
            }
        })
    </script>
    
    
    2. 컴포넌트 여러개 출력하고 싶다면?
    
    <div id="app">
        <my-component></my-component>
        <my-component></my-component>
        <my-component></my-component>
        <my-component></my-component>
    		**... 이런식으로 코드 재활용이 가능**
    </div>

## 3. 컴포넌트 props 전달

    ./index3.html
    
    1. 컴포넌트 데이터 전달
    
    <div id="app">
        <my-component title='타이틀 전달'></my-component>
    </div>
    
    Vue.component('my-component', {
        props: ['title'],
        data() {
            return {
                count: 0
            }
        },
        template:'<div>{{title}}</div>'
    });
    
    
    2. Component props의 다양한 형태
    
    <my-component
        :prop-a='parentA'
        :prop-b='parentB' 
        :prop-c='parentC' 
        :prop-d='parentD'
        :prop-e='parentE' 
        :prop-f='parentF' 
    ></my-component>
    
    props: {
        // 기본 형태(타입 지정)
        propA: Number,
        // 멀티 타입 지정
        propB: [String, Number],
        // 타입 , 필수여부 
        propC: {
            type: String,
            required:true
        },
        // // 타입 , 기본갑 지정
        propD: {
            type: Number,
            default: 100
        },
        // // Object with a default value
        propE: {
            type: Object,
            // 기본 데이터 함수형
            default:function () {
                return { message:'hello' }
            }
        },
        // // 유효성 체크
        propF: {
            validator:function (value) {
                console.log('value : ' + value);
                return ['success','warning','danger'].indexOf(value) !== -1
            }
        }
    },

## 4. 조건부 렌더링 AND 리스트 렌더링

    ./index4.html
    
    <div id="app">
        <div v-if="isActive">
            ok active
        </div>
        <div v-if="!isActive">
            not active
        </div>
    
        <div>
            <p v-for="item in items">{{item}}</p>
        </div>
    </div>
    
    <script>
        var app = new Vue({
            el: '#app',
            data: {
                isActive: false,
                items: [1,2,3,4,5,6],
            }
        })
    </script>
    
    # v-if 와 v-show의 차이점은?

## 5. 이벤트 핸들링

    ./index5.html
    
    ```
    <button @click="changeActive">CHANGE BUTTON</button>
    ```
    
    ```
    var app = new Vue({
        el: '#app',
        data: {
            isActive: false,
            items: [1,2,3,4,5,6],
        },
        methods: {
            changeActive() {
                this.isActive = !this.isActive;
            }
        }
    })
    ```

## 6.  입력 바인딩

    ./index6.html
    
    ```
    <input type="text" v-model="message">
    <p>{{message}}</p>
    ```
    
    ```
    var app = new Vue({
        el: '#app',
        data: {
            message: '',
        },
    })
    ```