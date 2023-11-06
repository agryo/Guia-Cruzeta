export type UsuarioDto = {
  id: string
  nome: string
  cpf: string
  email: string
  enderecos: [
    {
      logradouro: string
      numero: string
      bairro: string
      cidade: string
      cep: string
      uf: string
      coordenadas: {
        latitude: number,
        longitude: number
      }
    }
  ]
  telefones: [
    { numero: string },
    { numero: string }
  ]
}
