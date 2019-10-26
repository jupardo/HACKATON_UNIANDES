module.exports = {
  attributes: {
    origen: {
      type: 'string',
      required: true,
    },
    destino: {
      type: 'string',
      required: true,
    },
    timestamp: {
      type: 'number',
      required: true,
    },
    valor: {
      type: 'number',
      required: true,
    },
    rubro: 'string',
    categoria: {
      type: 'string',
      required: true,
    }
  }
}
