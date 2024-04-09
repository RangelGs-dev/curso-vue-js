<template>
  <div>
    <h1>{{ curso }}</h1>
    <!-- <router-link :to="`/cursos/${curso}/descricao`">Descrição</router-link>
    <router-link :to="`/cursos/${curso}/aulas`">Aulas</router-link> -->
    <router-link :to="{ name: 'descricao' }">Descrição</router-link>
    <router-link :to="{ name: 'aulas' }">Aulas</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["curso"],
  methods: {
    puxarDados() {
      console.log("Puxei Api");
    },
  },
  beforeRouteEnter(to, from, next) {
    // console.log(this.puxarDados());
    next((vm) => {
      vm.puxarDados();
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log(this.puxarDados());
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("to:", to);
    console.log("from:", from);
    console.log("Não saia");
    const confirmar = confirm("Você deseja sair?")
    if(confirmar)
    next();
  },
};
</script>

<style>
</style>