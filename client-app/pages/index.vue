<template>
  <div class="w-100">
    <Caroussel />
    <div class="px-5 mt-4">
      <h3>
        Bem vindo! a <strong class="text-success"> Paktor Engenharia </strong>
      </h3>
      <br />
      <p>
        Fundada em 2021, a <strong>Paktor Engenharia e Construções</strong> visa
        auxiliar o mercado da construção civil com serviços que vão desde
        projetos novos, reformas à construção de prédios e casas. Fernando
        Padilha e Gabriel Modena, sócios engenheiros, se uniram para trazer ao
        mercado uma empresa enraizada na sustentabilidade, inovação e
        transparência. Para isso, os fundadores trarão ao dia a dia da
        corporação técnicas inovadoras e sustentáveis com o objetivo de diminuir
        custos e desperdícios.
      </p>
      <p>
        Estamos continuamente olhando para o futuro, trazendo o que há de mais
        inovador e moderno, com profissionalismo e uma equipe altamente
        qualificada para dar vida ao seu sonho.
      </p>
    </div>
    <div></div>
    <div class="grid-galeria-fotos container text-center mt-4">
      <div
        v-for="(item, index) in 8"
        :key="index"
        class="border border-primary m-1"
      >
        <img
          src="~/assets/Elementos/ELEMENTOS/Elementos-05.png"
          width="150px"
          alt=""
        />
      </div>
    </div>

    <FormsContato />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.grid-galeria-fotos {
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-items: center;
  align-items: center;
}

@media screen and (max-width: 900px) {
  .grid-galeria-fotos {
    display: grid;
    grid-template-columns: auto auto;
  }
}
</style>