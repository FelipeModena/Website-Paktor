<template>
  <b-row class="px-5">
    <b-col class="forms-contato-grid">
      <h3>Fale Conosco</h3>
      <span>Fale conosco enviando uma mensagem a baixo! </span>
      <form action="" class="forms-contato-grid">
        <input type="text" name="" id="nome-forms" placeholder="Nome *" />
        <input type="text" name="" id="email-forms" placeholder="E-mail" />
        <input type="text" name="" id="telefone-forms" placeholder="Telefone" />
        <input type="text" name="" id="assunto-forms" placeholder="Assunto" />
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </form>
    </b-col>
    <b-col>
      <h3>Contatos</h3>
      <a href="mailto:paktor_contato@gmail.com">paktor_contato@gmail.com</a>
    </b-col>
  </b-row>
</template>

<style scoped>
.forms-contato-grid {
  display: grid;
}

.forms-contato-grid input,
textarea {
  margin-top: 7px;
  border: groove rgb(77, 173, 64) 2px;
}
</style>