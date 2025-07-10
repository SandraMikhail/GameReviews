import {Ui} from './ui.js'

const gameData = document.getElementById("gameData");
const modalbody = document.querySelector('.modal-body');
const ui = new Ui(gameData,modalbody);
let games = [];
let loading = document.getElementById("loading")

let clickedValue=""

 const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "4b1b48a512msh06a9207d828f71cp19661ajsn1b59bf98440f",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

let gameDetail;


async function getGames(q = "shooter") {
  try {
    loading.classList.remove('d-none')

    let response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${q}  `,
      options
    );
    let data = await response.json();
    console.log(data);
    games = data;
    ui.displayGame(games);

  } catch (error) {
  
    console.log("error");
  }finally{
   loading.classList.add('d-none')
  }
}

getGames("mmorpg");

//get gameDetail

async function getDetails(id) {

  try {
    loading.classList.remove('d-none')
    let response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
    let data = await response.json();
    gameDetail = data
    const modal = new bootstrap.Modal(document.getElementById('fullscreenModal'));
  modal.show();
  ui.showGameDetailsModal(gameDetail)
  loading.classList.add('d-none')
  } catch (error) {

    console.log("error in details", error);
  }finally{
     loading.classList.add('d-none')
  }
}
window.getDetails = getDetails;
const mylist = document.querySelector('ul')
mylist.addEventListener('click', function(e){
  e.preventDefault();

  clickedValue =e.target.innerHTML
getGames(clickedValue)

})


/*function displayGame() {

}*/
//displayGame();

ui.displayGame(games)



/*
function showGameDetailsModal(gameDetail){

}
*/


document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbarid");
  if (!navbar) {
    console.error("Navbar element not found!");
    return;
  }

  const demoTop = navbar.offsetTop;

  window.addEventListener("scroll", () => {
    if (window.scrollY >= demoTop + 50) {
      navbar.classList.add("fixed-top");
      navbar.style.marginTop = "0px";
      document.body.style.paddingTop = navbar.offsetHeight + "px";
    } else {
      navbar.classList.remove("fixed-top");
      navbar.style.marginTop = "170px"; 
      document.body.style.paddingTop = "0";
    }
  });
});
