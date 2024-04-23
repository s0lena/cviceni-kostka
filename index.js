const kostkaSide = () => {
    let kostkaNumber = Math.floor(Math.random()*6 +1);
    document.querySelector('img').src=`img/side${kostkaNumber}.svg`
}

document.body.addEventListener('keydown', kostkaSide);