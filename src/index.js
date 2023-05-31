
//Scratch Paper

// function handleClick(e){
//     const data = e.target;

//     let dogObj = {
//         name:data.name ,
//         image:data.image ,
//         isGoodDog:data.isGoodDog ,
//     }
//     displayDogData(dogObj);

// dogDisplay.innerHTML = `
// <img src="${dogObj.image}"
// <h2>${dogObj.name} </h2>
// <button class="goodbad">//${dogObj.isGoodDog}</button>
// `
// dogInfo.appendChild(dogDisplay)


// --------------------------------------------------------------------------

//function to add dogs to the dog  bar on the page

function addToDogBar(dogObj){
    const dogBar = document.querySelector("#dog-bar")
    let dog = document.createElement('span')
    dog.classList.add ("dogbutton")
    dog.textContent = `${dogObj.name}`
    dogBar.appendChild(dog)

    dog.addEventListener('click', () => displayDogData(dogObj));
};


//function to display dog data after click

function displayDogData(dogObj){
    let dogInfo = document.querySelector('#dog-info')
    let dogImage = document.createElement('img')
    let dogName = document.createElement('h2')
    let dogButton = document.createElement('button')
   
    dogImage.src = `${dogObj.image}`
    dogName.textContent = `${dogObj.name}`
    if (dogObj.isGoodDog === true) {
        dogButton.textContent = "Good Dog!"
    } else {
        dogButton.textContent = "Bad Dog!"
    }


    dogInfo.appendChild(dogImage)
    dogInfo.appendChild(dogName)
    dogInfo.appendChild(dogButton)
}

// first fetch to get doggos from data source

function getAllDoggos(){
    fetch('http://localhost:3000/pups')
    .then(res => res.json())
    .then(pups => pups.forEach(pup => addToDogBar(pup)))

}



// `
//     // <img src="${dogObj.image} />
//     // <h2>${dogObj.name}</h2>
//     // <button>${dogObj.isGoodDog}</button>
//     // `







function initialize(){
    getAllDoggos();
};
initialize();