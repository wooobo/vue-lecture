<template>
  <div id="app">
    <div>
      <h1 class="page-title">VUE 예제 프로젝트</h1>
    </div>
    <div class="content-container">
      <div id="nav" class="left-side-nav">
        <router-link to="/traffic-light">예제1 - 신호등</router-link>
        <router-link to="/clock">예제2 - 시계</router-link>
        <router-link to="/counting">예제3 - 카운팅 흐름</router-link>
        <router-link to="/menu">예제4 - 메뉴판</router-link>
      </div>
      <div class="center-container">
        <router-view/>
      </div>
    </div>
    
  </div>
</template>

<style lang="scss">
html, body {
    margin: 0;
    height: 100%;
    overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.page-title {
  margin-bottom: 0px;
  padding-bottom: 10px;
  border-bottom: 1px solid brown;
}

.content-container {
  display: flex;
  flex-direction: row;
  height: 100%;

  .left-side-nav {
    flex: 2; /* flex: 1 1 0 */
    overflow: auto;
    display: flex;
    flex-direction: column;
    border-right: 1px solid brown;
    a {
      padding: 10px;
    }
  }

  .center-container {
    flex: 8; /* flex: 1 1 0 */
    overflow: auto;
  }
}

</style>
