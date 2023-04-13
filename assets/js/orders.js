const ordersChart = document.getElementById('orders').getContext('2d');
const orders = new Chart(ordersChart, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'dwd'],
        datasets: [{
            data: [12, 19, 3, 15, 2, 23, 21],
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