const alertBanner = document.getElementById("alert");

const trafficCanvas = document.getElementById(`traffic-chart`).getContext('2d');
const dailyCanvas = document.getElementById("daily-chart").getContext('2d');
const mobileCanvas = document.getElementById("mobile-chart");

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");


// create the html for the banner
alertBanner.innerHTML =
`
<div class="alert-banner">
<p class="alert-p"><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<a class="alert-banner-close">x</a>
</div>
`;

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none";
}
});

let lineChart = new Chart(trafficCanvas, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            lineTension: 0,
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
            2500],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 1,
        }]
        },

    // Configuration options go here
    options: {
        aspectRatio: 2.5,
        animation: {
            duration: 0
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend : {
            display: false
        }

    }
});

let barChart = new Chart(dailyCanvas, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data:{
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: '# of Hits',
            data: [75, 115, 175, 125, 225, 200, 100],
            backgroundColor: '#7477BF',
            borderWidth: 1,
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend : {
            display: false
        }
    }
});

let pieChart = new Chart(mobileCanvas, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data:{
        labels: ["Desktop", "Tablet", "Phones"],
        datasets: [{
            label: '# of Users',
            data: [2000, 550, 500],
            borderWidth: 0,
            backgroundColor: [
                '#7477BF',
                '#78CF82',
                '#51B6C8'
            ]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }            
    }
});

send.addEventListener('click', () => {
    if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    }
    });
    