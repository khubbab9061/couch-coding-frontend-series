var cards = [

    {
        img: 'assets/bg2.jpg',
        ser: 'Graphic Designer',
        des1: 'Logo Designing',
        des2: 'Post Designing',
        des3: 'UI / UX',
        price: 'Acc To Your Desire',
    },
    {
        img: 'assets/card1.jpg',
        ser: 'Front-End Designer',
        des1: 'HTML, CSS & JS',
        des2: 'Bootstrap, Tailwind & JQuery',
        des3: '',
        price: 'Acc To Your Desire',
    },
    {
        img: 'assets/card2.jpg',
        ser: 'Gym Trainer',
        des1: 'Cradio',
        des2: 'Bodybuilding',
        des3: 'Yoga',
        price: 'Acc To Your Desire',
    }

]

for (let i = 0; i < cards.length; i++) {
    document.querySelector(".container").innerHTML += `
    <div class="card">
            <img src="${cards[i].img}" alt="" height="200px" width="250px">
            <div class="card-text">
                <h1>${cards[i].ser}</h1>
                <br>
                <i><p>${cards[i].des1}</p></i>
                <i><p>${cards[i].des2}</p></i>
                <i><p>${cards[i].des3}</p></i>
                <br>
                <p>Price</p>
                <p>${cards[i].price}</p>
            </div>
        </div>
    `

}
{/* <button><a href="details.html?id=${i}">Want This</a></button> */}
