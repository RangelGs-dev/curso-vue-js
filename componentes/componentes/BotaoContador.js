const BotaoContador = {
    name: "BotaoConstador",
    data() {
        return {
            total: 0,
        }
    },
    template: `<button v-on:click="total++">Contador {{total}}</button>`
}

export default BotaoContador;