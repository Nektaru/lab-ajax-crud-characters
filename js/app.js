/* const apiHandler = new CharactersApiHandler()

function loadCharactersFromAPI () {
    apiHandler.getAllcharacters()
    .then(res => {
        const charactersUL = document.querySelector("#charactersList")
        console.log(res.data)
        let charactersInfo= ""
        res.data.reverse().forEach(character => {
            charactersInfo += `<li>Nombre: ${character.name} </br>Ocupación: ${character.occupation} </br> Arma: ${charater.weapon}`
        });
        charactersUL.innerHTML = charactersInfo
    })
    .catch(err => console.log(err))
}
function loadCharactersFromAPI()

loadCharactersFromAPI()

const newCharacterForm = document.querySelector("#NewCharacterForm")

newCharacterForm.onsubmit = (e) => {
    e.preventDefault(); //evita el comportamiento por defecto y la recarga de la página.

    const inputs = document.querySelectorAll("NewCharactersForm input")

    const name = inputs[0].value    
    const occupation = inputs[1].value
    const weapon = inputs[2].value

    console.log(name, occupation, weapon)


    apiHandler.createCharacter(name, occupation, weapon)
        .then(res => {
            console.log(res)
        newCharacterForm.reset()
        loadCharactersFromAPI()
    })
        .catch(err => console.log(err))

    const getCharacterInfoForm = document.querySelector('#getCharacterInfoForm')
    getCharacterInfoForm.onsubmit = (e) => {
            e.preventDefault()

            const id = getCharacterInfoForm.querySelector("input").value
            
            console.log(id)

            apiHandler.getOneCharacter(id)
                .then(res => {
                    console.log(res)
                    const editForm = document.querySelector("#editCharacterForm input")

                    const name = inputs[0].value // = 
                    const occupation = inputs[1].value // =
                    const weapon = inputs[2].value // =
                })
                .catch(err => console.log(err))
    }

    const editCharacterForm = document.querySelector("#editCharacterForm")

    editCharacterForm.onsubmit = (e) => {
        e.preventDefault()

        const editFormInputs = editCharacterForm.querySelectorAll("inputs")
        console.log(editFormInputs)

        // editInputs[0].value = res.data.name 
        //             editInputs[1].value = res.data.occupation
        //             editInputs[2].value = res.data.weapon                 Creo que va aquí. RECHECK PLS
        //             editInputs[3].value = res.data.id
        const name = editFormInputs[0].value
        const occupation = editFormInputs[1].value
        const weapon = editFormInputs[2].value
        const id = editFormInputs[3].value

        apiHandler.editCharacter(name, occupation, weapon, id)
            .then(res => loadCharactersFromAPI())
            .catch(err => console.log(err))
    }
} */