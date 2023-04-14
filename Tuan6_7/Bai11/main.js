var $ = document.querySelector.bind(document);
var inteval;
function start() {
    inteval =  setInterval(() => {
        var random = Math.floor(Math.random() * 14 + 1);
        $('.content img').setAttribute('src', `image/${random}.jpg`)
    }, 3000);
}

function stop() {
    clearInterval(inteval);
}





