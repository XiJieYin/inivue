<template>
    <Carousel v-model="value1" loop>
      <CarouselItem>
        <div class="demo-carousel">商品1</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">商品2</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">商品3</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">商品4</div>
      </CarouselItem>
    </Carousel>
</template>

<script>
export default {  
  name: "Goods",  
  data(){
    return {
      value1:0
    }
  }
};
</script>

<style>
</style>