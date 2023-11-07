export type NegocioDto = {
  nome: string
  logomarca: string
  descricao: string
  endereco: {
    logradouro: string
    numero: string
    bairro: string
    cidade: string
    uf: string
    cep: string
    coordenadas: {
      latitude: number,
      longitude: number
    }
  }
  telefones: [
    { numero: string },
    { numero: string }
  ]
}
