<template>
    <div>
        <div class="menu-title">
            <div 
                v-for="(menuData, index) in menuDatas" 
                :key="index" 
                @click="menuChange(menuData,index)" 
                :class="{isActive : contentMenuIndex===index}">
                {{menuData.title}}
            </div>
        </div>
        <div class="menu-container">
            <div>
                <div 
                    class="menu-item" 
                    v-for="(menuData, index) in selectMenu.menus" 
                    :key="index">
                    {{index+1}}. {{menuData.menu}} : {{menuData.price | currency}}

                    <input 
                        class="chb" 
                        type="checkbox" 
                        :name="selectMenu.title" 
                        :value="index" 
                        v-model="checked" />
                </div>
            </div>
            <div class="select-menu-container">
                <h2>주문 목록</h2>
                <div class="list-wrap">
                    <div class="list">
                        <p 
                            v-for="(selectMenu, index) in selectMenus" 
                            :key="index">
                            {{index+1}}. {{selectMenu.menu}}
                        </p>
                    </div>
                    <div class="price">
                        주문금액 : {{totalPrice | currency}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'menuView',
        data() {
            return {
                menuDatas: [
                    {
                        title: '찌개류',
                        menus: [
                            {
                                menu: '김치찌개',
                                price: 7000,
                            },
                            {
                                menu: '된장찌개',
                                price: 5000,
                            },
                            {
                                menu: '부대찌개',
                                price: 6000,
                            }
                        ]
                    },
                    {
                        title: '메인요리',
                        menus: [
                            {
                                menu: '찜닭',
                                price: 15000,
                            },
                            {
                                menu: '제육볶음',
                                price: 8000,
                            },
                            {
                                menu: '돼지불백',
                                price: 9000,
                            }
                        ]
                    },
                    {
                        title: '사이드메뉴',
                        menus: [
                            {
                                menu: '콜라',
                                price: 1000,
                            },
                            {
                                menu: '사이다',
                                price: 1000,
                            },
                        ]
                    },
                ],
                contentMenuIndex: 0,
                selectMenu: [],
                checked: [],
            }
        },
        filters: {
            currency: function (value) {
                var num = new Number(value);
                return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")  + '원'
            }
        },
        mounted() {
            this.menuChange(this.menuDatas[0],0);
        },
        computed: {
            selectMenus() {
                let menus = [];
                this.checked.forEach(index => {
                    menus.push(this.selectMenu.menus[index]);
                });
                return menus;
            },
            totalPrice() {
                let totalPrice = 0;
                this.checked.forEach(index => {
                    totalPrice += this.selectMenu.menus[index].price;
                });
                return totalPrice;
            }
        },
        methods: {
            menuChange(menuData, index) {
                this.selectMenu = menuData;
                this.checked = []
                this.contentMenuIndex = index;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .menu-title {
        display: flex;
        div {
            flex: 1;
            font-size: 20px;
            margin: 20px;
            cursor: pointer;
            border: 1px solid black;
        }
    }
    .menu-container {
        margin: 20px;
        border: 1px solid black;
    }
    .menu-item {
        font-size: 20px;
        padding: 10px;
        text-align: left;
    }
    .isActive {
        background-color: burlywood;
    }
    .chb {
        float: right;
    }
    .select-menu-container {
        p {
            text-align: left;
            padding: 10px;
        }
    }
    .list-wrap {
        display: flex;
        .list {
            flex: 8;
        }
        .price {
            flex: 2;
        }
    }
</style>