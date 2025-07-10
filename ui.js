
export class Ui {
    constructor(gameDataContainer, modalBodyElement) {
        this.gameData = gameDataContainer;
        this.modalBody = modalBodyElement
    }
    displayGame(games) {
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
                <p class="text-center desc">${games[i].short_description.split(" ", 8)}.</p>
                    <div class="card-footer d-flex justify-content-between">
                        <p class="badge bg-dark badge-font m-0">${games[i].genre}</p>
                        <p class="badge bg-dark m-0">${games[i].platform}</p>
                    </div>
                </div>
            </div>
    </div>
        `;
        } this.gameData.innerHTML = box;

    }

    showGameDetailsModal(gameDetail) {
       this.modalBody.innerHTML = ` 
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
}

//display Details of the game

