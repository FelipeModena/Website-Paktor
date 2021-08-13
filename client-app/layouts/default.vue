<template>
  <div class="w-100">
    <header>
      <b-navbar toggleable="lg" class="p-0">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <div class="w-100 text-center">
            <NuxtLink to="/" class="hover-padrao"
              ><img
                class="rounded-circle"
                width="200px"
                src="~/assets/Logo/Logos/LOGO PAKTOR PRINCIPAL.png"
                alt=""
              />
            </NuxtLink>
            <br /><br />
            <div id="nav-bar-botoes-rota" class="py-2 bg-dark">
              <NuxtLink to="quemSomos" class="mx-1">
                <button class="btn btn-success">Quem Somos</button>
              </NuxtLink>
              <NuxtLink to="portfolio" class="mx-1"
                ><button class="btn btn-success">Portfólio</button>
              </NuxtLink>
              <NuxtLink to="contato" class="mx-1"
                ><button class="btn btn-success">Contato</button>
              </NuxtLink>
            </div>
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
          <p>(11) 98988-6105</p>
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
      <!-- <div class="text-center">
        <span>Feito por Felipe Modena - <a href="">Portfólio</a> </span>
      </div> -->
    </footer>
  </div>
</template>

<style scoped>
#nav-bar-botoes-rota {
  background: linear-gradient(to left, transparent, rgb(102, 98, 98));
}
#footer-default {
  background-image: url("~/assets/footer-img.png");
  background-size: 100%;
  margin: 9px 0 0 0;
}

.hover-padrao {
  background: rgb(255, 255, 255);
  transition: 0.9s;
}
.hover-padrao :hover {
  transition: 0.9s;
  background: greenyellow;
}

@media only screen and (max-width: 600px) {
  #footer-default {
    background-size: cover;
  }
  #nav-collapse {
    display: grid;
    grid-template-columns: auto;
  }
}
</style>