var gameData = document.getElementById("gameData");

async function getGames(q = "shooter") {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "4b1b48a512msh06a9207d828f71cp19661ajsn1b59bf98440f",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  try {
    let response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${q}  `,
      options
    );
    let data = await response.json();
    console.log(data);
    games = data;
    displayGame();
  } catch (error) {
    console.log("error");
  }
}

getGames("mmorpg");

async function getDetails(id) {
  console.log("id of the game is ", id);
  try {
    let response = await fetch("", options);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("error in details ", error);
  }
}


var x = document.querySelectorAll('a')
console.log(x)
x.addEventListener('click', function(){
    for (var i =0;i <x.length ;i++){
        console.log("hello", i)
  
    }
})


/*api return details */

var games = [];
function displayGame() {
  var box = "";
  for (var i = 0; i < games.length; i++) {
    box += `
    <div class="col-md-3 col-sm-6" >
        <div class="gameCard my-2 overflow-hidden" onclick="getDetails(${games[i].id})">
            <img class="card-img-top w-100 layer p-2" src="${games[i].thumbnail}" alt="Title" style="height:200px"/>
            <div class="card-body bg-dark position-relative">
            <div class="d-flex justify-content-between">
            <h4 class="card-title text-white">${games[i].title}</h4>
            <label class="badge badge-det d-flex justify-content-center align-items-center"  style="height:30px">Free</label> 
            </div> 
                <p class="text-center desc">${games[i].short_description.split(" ",8)}.</p>
                    <div class="card-footer d-flex justify-content-between">
                        <p class="badge bg-dark badge-font m-0">${games[i].genre}</p>
                        <p class="badge bg-dark m-0">${games[i].platform}</p>
                    </div>
                </div>
            </div>
    </div>
        `;
  } gameData.innerHTML = box;
}
displayGame();



const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})