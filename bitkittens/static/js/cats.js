document.addEventListener("DOMContentLoaded", function() {
    const summonKitties = document.querySelector('.summon-cats');
    summonKitties.addEventListener('click', function() {
        axios.get('http://bitkittens.herokuapp.com/cats.json')
        .then(function(response) {
            const catBoxes = document.querySelectorAll('.cat-box')
            catBoxes.forEach((catBox, i) => {
                const catImage = document.createElement('img');
                catImage.src = response.data.cats[i].photo
                catImage.alt = response.data.cats[i].name
                catBox.appendChild(catImage);
            });
        })
    })
});
