<template>
  <div id="app">
    <Row>
      <Col span="8">
        <h2>网站名</h2>
      </Col>
      <Col span="8">
        <Carousel v-model="value1" loop>
          <CarouselItem>
            <div class="demo-carousel">1</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">2</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">3</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">4</div>
          </CarouselItem>
        </Carousel>
      </Col>
      <Col span="8">
        <Button @click="value = true" type="primary">Open</Button>
        <Drawer title="Basic Drawer" :closable="false" v-model="value">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </Col>
    </Row>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value1: 0,
      value:false
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 30px;
}
</style>