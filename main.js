


async function getGames(){
    let response = await fetch("")
    if(response.ok){
        let data = data.json()
        console.log(data)
    }
}