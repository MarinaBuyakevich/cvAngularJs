angular.module('myApp', [])
    .controller("firstCtrl" , function () {
        const ctx = document.getElementById('myChart').getContext('2d');
        let myChart;
        myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['HTML', 'CSS', 'Bootstrap', 'Angular 6', 'WordPress', 'JavaScript'],
                datasets: [{
                    label: 'Technical skills',
                    data: [70, 70, 70, 50, 65, 30],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    });
