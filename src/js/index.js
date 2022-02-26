var h = window.innerHeight;
var w = window.innerWidth;

if (w < 900) {
    location.href = "./mobile"
}

console.log(
    "Loaded Page"
)

try {
    const url = new URLSearchParams(window.location.search)
    if(url.has('go') == true) {
        document.getElementById('document').scrollTo(0, url.get('go'));
    }
} catch(err) {
    console.log(
        "***********************************************************" + "\n" +
        "___________________________________________________________" + "\n" +
        "Error : " + err
    )
}