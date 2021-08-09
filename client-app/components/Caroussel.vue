<template>
  <div>

    <b-carousel
      id="carousel-no-animation"
      style="text-shadow: 0px 0px 2px #000"
      indicators
      controls
      img-width="2"
      img-height="200"
    >
      <b-carousel-slide
        img-src="~/assets/Aplicacoes/carimbo.png"
        caption="First slide"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="First slide"
        img-src="~/assets/Aplicacoes/garrafa e mochila.png"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="First slide"
        img-src="~/assets/Aplicacoes/letreiro.png"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>


<script>
export default {
  props: {
    imagens: Array,
  },
};
</script>