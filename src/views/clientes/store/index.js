export default {
  state: {
    estado: false,
    clients: [],
  },
  mutations: {
    cambiar(state,val){
        state.estado=val;
    },
    editar(state,val){
      state.clients=val;
    }
  },
};
