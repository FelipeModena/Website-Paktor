<template>
  <div class="w-100">
    <header id="header-default">
      <div class="d-flex border-bottom text-center px-5 py-1">
        <div class="mx-4">
          <img width="20px" src="~/assets/icons/phone-icon-black.jpg" alt="" />
          <span>(xx) 98764-1932</span>
        </div>
        <div class="mx-4">
          <img width="20px" src="~/assets/icons/message-(2).png" alt="" />
          <span>paktor_contato@gmail.com</span>
        </div>
        <img
          width="20px"
          class="float-right"
          src="~/assets/icons/instagram-(1).png"
          alt=""
        />
      </div>

      <b-navbar toggleable="lg">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <div class="w-100 text-center">
            <NuxtLink class="hover-verde" to="/"
              ><img
                width="200px"
                src="~/assets/Logo/Logos/LOGO PAKTOR PRINCIPAL.png"
                alt=""
              />
            </NuxtLink>
            <br />
            <NuxtLink to="quemSomos">
              <button class="btn btn-success">Quem Somos</button>
            </NuxtLink>
            <NuxtLink to="contato"
              ><button class="btn btn-success">Contato</button>
            </NuxtLink>
          </div>
        </b-collapse>
      </b-navbar>
    </header>
    <Nuxt />

    <footer class="mt-3">
      <b-row class="p-4 text-center" id="footer-default">
        <b-col>
          <h4>COMPROMISSOS</h4>
          <p>Qualidade em 1º Lugar</p>
          <p>Atendimento Personalizado</p>
          <p>Satisfação Garantida</p>
        </b-col>
        <b-col>
          <h4>CONTATOS</h4>
          <span>(11) 98988-6105</span>
          <p>paktor_contato@gmail.com</p>
        </b-col>
        <b-col
          ><img
            width="200px"
            src="~/assets/Logo/Logos/LOGO PAKTOR PRINCIPAL.png"
            alt=""
          />
        </b-col>
      </b-row>

      <div class="text-center">
        <span>Feito por Felipe Modena - <a href="">Portfólio</a> </span>
      </div>
    </footer>
  </div>
</template>

<style >
.hover-verde {
  transition: 0.7s;
}
.hover-verde :hover {
  transition: 0.7s;
  background: linear-gradient(green, rgb(180, 177, 177));
}
#footer-default {
  background-image: url("~assets/Grafismo/Grafismo_6.png"),
    linear-gradient(rgb(80, 105, 80), rgb(27, 189, 35));
  background-size: 100%;
}
</style>