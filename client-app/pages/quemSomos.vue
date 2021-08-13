<template>
  <div class="mt-4">
    <div class="container">
      <b-container class="bv-example-row">
        <h1>Sobre nós</h1>
        <b-row >
          <b-col cols="7"
            ><b-row class="border mb-2 mr-1 p-3 ">
              <h2>Missão:</h2>
              <p class="text-justify">
                Trabalhar utilizando técnicas específicas para cada tipo de
                obra, adequando as soluções para a necessidade de cada cliente,
                com o objetivo de construir relações transparentes, prestando
                serviços de qualidade garantindo a satisfação do parceiro.
              </p>
            </b-row>
            <b-row class="border mb-2 mr-1 p-3">
              <h2>Visão:</h2>
              <p class="text-justify">
                Ser referência no mercado da construção civil, utilizando
                técnicas inovadoras de forma sustentável, minimizando custos e
                desperdícios.
              </p>
            </b-row></b-col
          >
          <b-col class="border fundo-primario">
            <div class="mb-4">
              <h2>Valores:</h2>
              <div class="d-flex w-100 mt-3">
                <ul>
                  <li><p>Integridade</p></li>
                  <li><p>Ética e transparencia</p></li>
                  <li><p>Comprometimento e Responsabilidade</p></li>
                  <li><p>Sustentabilidade</p></li>
                </ul>
                <ul>
                  <li><p>Qualidade e Segurança</p></li>
                  <li><p>Meritocracia</p></li>
                  <li><p>Desenvolvimento e Inovação</p></li>
                </ul>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>

      <div class="mt-3 d-flex">
        <div>
          <img
            src="~/assets/casa-cinza.png"
            width="100px"
            alt="casa-cinza.png"
          />
          <h3>Reformas</h3>
        </div>
        <div>
          <img
            src="~/assets/carrinho-mao-verde.png"
            width="100px"
            alt="carrinho-mao-verde.png"
          />
          <h3>Construção</h3>
        </div>
        <div>
          <img
            src="~/assets/regua-cinza.png"
            width="100px"
            alt="regua-cinza.png"
          />
          <h3>Projetos</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 900px) {
  .row {
    display: grid;
  }
  .col-7{
    max-width: none;
  }
}
</style>