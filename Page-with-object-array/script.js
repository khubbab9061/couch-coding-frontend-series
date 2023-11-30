var cards = [
    {
        img: 'assets/images/pant.jpg',
        name: 'Pant',
        brand: 'Levis',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        price: '1599',
        qty: '15',
    },
    {
        img: 'assets/images/zara.jpg',
        name: 'Shirt',
        brand: 'Zara',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        price: '1599',
        qty: '15',
    },
    {
        img: 'assets/images/polo.jpg',
        name: 'T-Shirt',
        brand: 'Polo',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        price: '1599',
        qty: '15',
    },
    {
        img: 'assets/images/pant.jpg',
        name: 'Pant',
        brand: 'Levis',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        price: '1599',
        qty: '15',
    },
    {
        img: 'assets/images/zara.jpg',
        name: 'Shirt',
        brand: 'Zara',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        price: '1599',
        qty: '15',
    },
    {
        img: 'assets/images/polo.jpg',
        name: 'T-Shirt',
        brand: 'Polo',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        price: '1599',
        qty: '15',
    },
]

    for (var i = 0; i < cards.length; i++) {
        document.querySelector(".container").innerHTML += `
        <div class="card">
                <div class="card-img">
                    <img src="${cards[i].img}" alt="">
                </div>
                <div class="crad-text">
                    <h1>Pant: ${cards[i].name}</h1>
                    <h3>brand: ${cards[i].brand}</h3>
                    <p>${cards[i].des}</p>
                    <p>Price: ${cards[i].price}</p>
                    <p>Qyantity: ${cards[i].qty}</p>
                    <button><a href="details.html?id=${i}">Details</a></button>
                </div>
            </div>
        `
       
    }