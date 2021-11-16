/* class CharactersApiHandler {
    constructor() {
        this.axiosApp = axios.create({
            baseUrl : 'https://minions-api.herokuapp.com'
        })
    }
    getAllcharacters() {
        return this.axiosApp.get("/characters")
    }
    //getAllCharacters = () => this.axiosApp.get("/characters")

    createCharacter = (name, occupation, weapon) => this.axiosApp.get("/characters", name, occupation, weapon)

    // getOneCharacter = () => this.axiosApp.get(/characters/0) hardcoded.
    getOneCharacter = (id) => this.axiosApp.get(`/characters/${id}`)

    editOneCharacter = ( name, occupation, weapon, id) => this.axiosApp.put(`/characters/${id}`, name, occupation, weapon)

} */