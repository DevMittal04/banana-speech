// Replit link for the mock server
// https://replit.com/@tanaypratap/lessonfourapi

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?text=" + text
}

function errorHandler(error) {
    console.log("error accured", error)
    alert("Something is wrong with server! Try again after sometime.")
}

function clickHandler(){
    // outputDiv.innerText = "adasdsaaddas " + txtInput.value;

    // Input
    var inputTxt = txtInput.value;

    // Calling Server for processing
    fetch(getTranslationURL(inputTxt))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
        console.log(json)
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);

// Mock Server Tanay Pratap

// URL Initialisation
// var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=I am Batman"

// Fetching and Processing
// fetch(url).then(function responseHandler(response) { return response.json() }).then(function logJSON(json) { console.log(json) });