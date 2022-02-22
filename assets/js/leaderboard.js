const scoreList = document.getElementById('score-list');
var myWins = JSON.parse(localStorage.getItem("wins"));

console.log(myWins)

const addWinHandler = () => {
    for (let i = 0; i < myWins.length; i++) {
        let listItem = document.createElement('li')
        let p = document.createElement('p')
        p.innerHTML = myWins[i].initials + ": " + myWins[i].score;
        listItem.append(p);
        scoreList.append(listItem);
    }
}

addWinHandler();
