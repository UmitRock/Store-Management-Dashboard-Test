const saleschart = document.getElementById('sales').getContext('2d');
const sales = new Chart(saleschart, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'dfs', 'Purple', 'Orange'],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3, 8],
            borderColor: [
                'rgba(59, 197, 154, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        elements: {
            point: {
                radius: 0
            }
        },
        scales: {
            x: {
                display: false
            },
            y: {
                display: false,
            }
        },

        plugins: {
            legend: {
                display: false,

            },

        }
    }
});