const handlecheck = () => {
    fetch("https://swapi.dev/api/people/1/")
        .then(response => response.json())
        .then(data => {
            fetch('https://swapi.dev/api/vehicles/14/')
                .then(response => response.json())
                .then(vehicle => {
                    fetch('https://swapi.dev/api/starships/12/')
                        .then(response => response.json())
                        .then(starships => alert(`Hello ${data.name}, ur height ${data.height}, ur vehicle ${vehicle.name}, ur starship ${starships.name}`))
                } )
        })
        .catch(error => console.log(error))
}

handlecheck()