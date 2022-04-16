const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('play') == false) { location.href="./games" } else {
    document.getElementById('game').setAttribute('src', urlParams.get('game'));
    document.getElementById('title1').innerText = urlParams.get('name');
}