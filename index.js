

//grab the button using its class
const changeColorBtn = document.querySelector('.change-color-btn')

// grab the main
const main = document.querySelector('main')


// change color of main and background when button is clicked
changeColorBtn.addEventListener('click', ()=>{
    main.style.backgroundColor = 'black'
    main.style.color = 'white'
})