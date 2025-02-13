async function fetchData() {
    const response = await fetch('https://api.thingspeak.com/channels/2163073/feeds.json?results=2000');
    const data = await response.json();
    const tableBody = document.querySelector("#data-table tbody");
    tableBody.innerHTML = "";
    data.feeds.forEach(feed => {
        const row = `<tr>
            <td>${feed.field1 || ''}</td>
            <td>${feed.field2 || ''}</td>
            <td>${feed.field3 || ''}</td>
        </tr>`;
        tableBody.innerHTML += row;
        //console.log(feed)
    });
}

async function sendData() {
    const field1 = document.getElementById("field1").value;
    const field2 = document.getElementById("field2").value;
    const field3 = document.getElementById("field3").value;
    
    const response = await fetch('https://api.thingspeak.com/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            api_key: 'LBQY2WXOG3PLCINJ',
            field1: field1,
            field2: field2,
            field3: field3
        })
    });
    console.log(response);
    if (await response.json() > 0) {
        alert("Data byla úspěšně odeslána!");
        fetchData();
    } else {
        alert("Chyba při odesílání dat.");
    }
}

fetchData();