console.log("Pop up working");

function setup() {
    noCanvas();
    let url = 'http://127.0.0.1:5000/main?url=';
    var urlForSum = "";
    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
        function (tabs) {
            console.log(tabs[0].url);
            urlForSum += tabs[0].url.toString();
            url+=urlForSum;
            loadJSON(url, gotData);
        }
    );
    let p;

    function gotData(data) {
        console.log(data)
        p = createP(data.summary);
        p.parent('main');
        console.log(data.summary);
    }


}