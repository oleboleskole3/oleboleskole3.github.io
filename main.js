function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readTextFile("sites.json", function(text) {
    let info = JSON.parse(text);
    console.log(info);
    info.sites.forEach(site => {
        let a = document.createElement('a');
        let newLine = document.createElement('br');
        let span = document.createElement('span');
        let linkText = document.createTextNode(site.name);
        a.classList.add("btn");
        span.appendChild(linkText);
        a.appendChild(span);
        a.href = "https://oleboleskole3.github.io/"+site.url;
        document.body.appendChild(a);
        document.body.appendChild(newLine);
    });
});
let link = document.createElement("link");
link.rel = "stylesheet";
link.href = "style.css";

document.head.appendChild(link);
