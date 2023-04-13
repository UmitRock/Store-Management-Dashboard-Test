const customersChart = document.getElementById('customers').getContext('2d');
const customers = new Chart(customersChart, {
    type: 'line',
    data: {
        labels: ['sun', 'mon', 'tue', 'wed', 'fri', 'sat'],
        datasets: [{
            data: [12, 4, 8, 15, 2, 3, 7],
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