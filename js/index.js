const loadDog = () =>{
    fetch('https://api.thedogapi.com/v1/breeds')
    .then(res => res.json())
    .then(data => displayDog(data));
}

const displayDog = (dogList) =>{
    const main = document.getElementById('main');
    const first10Data = dogList.slice(0,100);
    for(const dog of first10Data){
        const div = document.createElement('div');
        div.classList.add('col-lg-4');
        console.log(dog);
        div.innerHTML = `
            <h6>${dog.name}</h6>
            <h5>${dog.weight.imperial}</h5>   
            <img class="img-responsive" src="${dog.image.url}"/>
            <p>${dog.temperament}</p>
            <p>${dog.bred_for}</p>
        `;
        main.appendChild(div);
    }


}