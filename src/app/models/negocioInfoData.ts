export type NegocioInfoData = {
  id: number
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
  }
  coordenadas: {
    latitude: string
    longitude: string
  }
  telefones: {
      numero: string
  }
}
