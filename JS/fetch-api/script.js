async function loadData(url){
    let response = await fetch(url)
    let data = await response.json()
    console.log(data);
}
loadData('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json')