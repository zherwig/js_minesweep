document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid") //grabbing grid
    let width = 10
    let bombsAmount = 20
    let squares = []


    //create board
    function createBoard(){
        //creating bombs and place them
        const bombsArray = Array(bombsAmount).fill('bomb')
        const emptyArray = Array(width*width - bombsAmount).fill('valid')
        const gameArray = emptyArray.concat(bombsArray)
        const shuffleArray = gameArray.sort(() => Math.random() - 0.5)

        // creating squares
        for(let i = 0; i < width*width; i++){
            const square = document.createElement('div')
            square.setAttribute('id', i)
            square.classList.add(shuffleArray[i])
            grid.appendChild(square)
            squares.push(square)
        }
    }

    
    
    
    
    
    createBoard()
})