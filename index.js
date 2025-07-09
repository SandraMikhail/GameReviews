const gameData = document.getElementById("gameData");
let clickedValue=""

 const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "4b1b48a512msh06a9207d828f71cp19661ajsn1b59bf98440f",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

let gameDetail ;

async function getGames(q = "shooter") {
 

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

//get gameDetail

async function getDetails(id) {

  console.log("id of the game is ", id);
  try {
    let response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
    let data = await response.json();
    gameDetail = data
    const modal = new bootstrap.Modal(document.getElementById('fullscreenModal'));
modal.show();
showGameDetailsModal(gameDetail)
    
  } catch (error) {
    console.log("error in details ", error);
  }
}

const mylist = document.querySelector('ul')
mylist.addEventListener('click', function(e){
  e.preventDefault();

  clickedValue =e.target.innerHTML
getGames(clickedValue)

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




const modalbody = document.querySelector('.modal-body')

function showGameDetailsModal(gameDetail){
  console.log("ana el gamedetail", gameDetail)
  modalbody.innerHTML = ` 
        <div class="container">
          <div class="row text-white">
          <div class="col-md-4">
            <img src="${gameDetail.thumbnail}" alt="test">
          </div>
          <div class="col-md-8" id="details">
            <h2>Title: ${gameDetail.title}</h2>
            <h3>category: <span class ="badge bg-info text-dark m-1"> ${gameDetail.genre}</span></h3>
            <h3>Platform:<span class ="badge bg-info text-dark m-1"> ${gameDetail.platform}</span></h3>
            <h3>Status: <span class ="badge bg-info text-dark m-1 ">${gameDetail.status}</span></h3>
            <p>${gameDetail.description}</p>
            <a href="${gameDetail.game_url}" target="_blank" class="btn border border-warning text-white">Show Game</a>
          </div>
        </div>
        </div>
`
}

/*
const exampleModalLabel = document.getElementById("exampleModalLabel")
exampleModalLabel.innerHTML ="hamadaa"

*/