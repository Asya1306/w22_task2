"use strict";
//данные json
let waterJson = `[{
"day": 1,
"water": 1.2
},{
"day": 2,
"water": 2.2
},{
"day": 3,
"water": 2
},{
"day": 4,
"water": 1.3
},{
"day": 5,
"water": 1.8
},{
"day": 6,
"water": 1.3
},{
"day": 7,
"water": 1.6
}]`;
waterJson = JSON.parse(waterJson);
let labels = waterJson.map(function(e) {
    return e.day;
});
let values = waterJson.map(function(e) {
    return e.water;
});
let ctx = document.getElementById("myChart").getContext("2d");
let myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: labels,
        datasets: [
            {
                label: "Water balance, liters",
                data: values,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)"
                ],
                borderColor: [
                    "rgba(255,99,132,1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)"
                ],
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

//# sourceMappingURL=index.c36f364e.js.map
