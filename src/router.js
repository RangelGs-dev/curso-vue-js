import Vue from "vue";
import Router from "vue-router";
import HomeView from "./views/HomeView.vue";
import CursosView from "./views/CursosView.vue";
import CursoView from "./views/CursoView.vue";
import CursoAulasView from "./views/CursoAulasView.vue";
import CursoDescricaoView from "./views/CursoDescricaoView.vue";
import AcoesView from "./views/AcoesView.vue";
import AcoesDadosView from "./views/AcoesDadosView.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/acoes",
      component: AcoesView,
      children: [
        {
          path: ":simbolo",
          component: AcoesDadosView,
          props: true
        },
      ],
    },
    {
      path: "/cursos",
      component: CursosView,
      props: true,
      beforeEnter: (to, from, next) => {
        console.log("Foi para cursos");
        next();
      },
      children: [
        {
          name: "curso",
          path: ":curso",
          component: CursoView,
          props: true,
          children: [
            {
              name: "aulas",
              path: "aulas",
              component: CursoAulasView,
            },
            {
              name: "descricao",
              path: "descricao",
              component: CursoDescricaoView,
            },
          ],
        },
      ],
    },
    /*     {
      path: "/cursos/:curso",
      component: CursosView,
      props: true,
    }, */
  ],
});
