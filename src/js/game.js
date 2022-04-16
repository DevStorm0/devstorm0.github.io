const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('play') == false) { location.href="./games" } else {
    urlParams.get('game')
    document.getElementById('game').setAttribute('src', urlParams.get('game'))
}