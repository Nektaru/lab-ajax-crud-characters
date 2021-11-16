const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI.getFullList()
      .then(res => {
            const characters = document.querySelector(".character-info")
            console.log(res)

            let charactersInfo = ""
            res.data.forEach(character => {
                charactersInfo += `<li> Nombre: ${character.name} Ocupación: ${character.occupation} Arma: ${character.weapon}</li> </br>`
            });

            characters.innerHTML = charactersInfo
        })
      .catch(err => console.log(err))

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    const characterid = document.getElementsByName("character-id")[0].value

    charactersAPI.getOneRegister(characterid)
      .then(res => {
        console.log(res)
        characterid
        document.querySelector(".name").innerHTML = `${res.data.name}`;
        document.querySelector(".occupation").innerHTML = `${res.data.occupation}`;
        document.querySelector(".weapon").innerHTML = `${res.data.weapon}`;
        document.querySelector(".cartoon").innerHTML = `${res.data.cartoon}`;

      })
      .catch(err => console.log(err))

    })


    document.getElementById('delete-one').addEventListener('click', function (event) {
      const characterid = document.getElementsByName("character-id")[0].value

      charactersAPI.deleteOneRegister(characterid)
      .then(res => {
        console.log(res)
        characterid
        document.querySelector(".name").innerHTML = `${res.data.name}`;
        document.querySelector(".occupation").innerHTML = `${res.data.occupation}`;
        document.querySelector(".weapon").innerHTML = `${res.data.weapon}`;
        document.querySelector(".cartoon").innerHTML = `${res.data.cartoon}`;

      })
      .catch(err => console.log(err))
    });

    document.getElementById('edit-character-form').addEventListener('submit', function (event) {

      const editFormInputs = document.querySelectorAll("#edit-character-form input")

      const id = document.getElementsByName
      editFormInputs[0].value = res.data.name
      editFormInputs[1].value = res.data.occupation
      editFormInputs[2].value = res.data.weapon
      editFormInputs[3].value = res.data.id
    });
    

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    newCharacterForm.onsubmit = (e) => {
        e.preventDefault();
    const inputs = document.querySelectorAll("#new-character-form input")
    const name = inputs[0].value
    const occupation = inputs[1].value
    const weapon = inputs[2].value
    const cartoon = inputs[3].checked
    
      charactersAPI.createOneRegister({name, occupation, weapon})
    
        .then(res => {
        console.log(res)
          newCharacterForm.reset()
          charactersAPI.getFullList()
        })

        .catch(err => console.log(err))

        

    }

});

})


