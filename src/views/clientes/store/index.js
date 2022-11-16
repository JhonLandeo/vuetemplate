export default {
  state: {
    estado: false,
    clients: [],
    indice: 0,
    pagos: [],
  },
  mutations: {
    cambiar(state, val) {
      state.estado = val;
    },
    editar(state, val) {
      state.clients = val;
    },
    quitar(state, val) {
      let valor = JSON.parse(state.clients.transacciones);
      let val2 = valor.filter( x => x.id != val)
      state.clients.transacciones = JSON.stringify(val2)
      console.log(val2)
    },
  },
};
