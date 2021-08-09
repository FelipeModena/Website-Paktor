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
            <NuxtLink to="/" class="hover-padrao"
              ><img
              class="rounded-circle "
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
    <main>
    <Nuxt />

    </main>

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
            width="220px"
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

<style scoped>

#footer-default {
  background-image: url("~assets/Grafismo/Grafismo_6.png");
  background-size: 100%;
  margin: 9px 0 0 0;
}

.hover-padrao{
  background: rgb(255, 255, 255);
    transition: 0.9s;
}
.hover-padrao :hover{
    transition: 0.9s;
  background: greenyellow;
}
</style>