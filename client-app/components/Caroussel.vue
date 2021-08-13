<template>
  <div>
    <b-carousel
    class=""
      indicators
      controls
      img-height="100"
    >
      <b-carousel-slide
        img-height="100"
        img-src="~/assets/Aplicacoes/carimbo.png"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="~/assets/Aplicacoes/garrafa e mochila.png"
      ></b-carousel-slide>
      <b-carousel-slide
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

<style scoped>
.carousel-componente img{
height: 100px !important;
}
</style>