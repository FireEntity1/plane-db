const apiUrl = 'https://api.api-ninjas.com/v1/aircraft?X-Api-Key=eHPSCay4v1NBBB5DU6kXWA==LFPvuFuuUsjasJbC&';

onload = setup;
let timeout;
let row;
let table;

function setup() {
    timeout = false;
    row = document.getElementById("data");
    table = document.getElementById("table");
    let input = document.getElementById("search");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            search();
        }
    });
}

function search() {
    if (document.getElementById("search").value.length >= 2 && timeout == false) {

        timeout = true;
        setTimeout(apiTimeout,5000);
        fetch (apiUrl + "model=" + document.getElementById("search").value)
            .then(response => {
                if (!response.ok) {
                throw new Error('network response broke');
                }
                return response.json();
            })
            .then(data => {
            let row = table.insertRow();
            document.getElementById("search").value = "";
            row.innerHTML = `
                <td>${data[0].manufacturer}</td>
                <td>${data[0].model}</td>
                <td>${data[0].engine_type}</td>
                <td>${data[0].max_speed_knots}</td>
                <td>${data[0].ceiling_ft}</td>
                <td>${data[0].gross_weight_lbs}</td>
                <td>${data[0].length_ft}</td>
                <td>${data[0].height_ft}</td>
                <td>${data[0].wing_span_ft}</td>
                <td>${data[0].range_nautical_miles}</td>`;
            })
            .catch(error => {
                console.error('Error:', error);
            });
        } else if (timeout == true) {
            document.getElementById("search").value = "Timeout, slow down";
        }
    }

    function apiTimeout() {
        timeout = false;
    }
    