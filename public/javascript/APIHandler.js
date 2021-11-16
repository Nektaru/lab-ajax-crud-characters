class APIHandler {
  constructor() {
    this.axiosApp = axios.create({
        baseURL : 'https://minions-api.herokuapp.com'
    })
}

  getFullList = () => this.axiosApp.get("/characters")


  getOneRegister = (id) => this.axiosApp.get(`/characters/${id}`)
  


  createOneRegister = (name, occupation, weapon) => this.axiosApp.get("/characters", name, occupation, weapon)
 

  updateOneRegister = (name, occupation, weapon, id) => this.axiosApp.put(`/characters/${id}`, name, occupation, weapon)

  deleteOneRegister () {

  }
}
