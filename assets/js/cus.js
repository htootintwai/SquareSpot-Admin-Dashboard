// Aside && Backdrop

const asideControlBtn = document.querySelector(".aside-control-btn");
const backdrop = document.querySelector('._backdrop');
const aside = document.querySelector(".aside");
asideControlBtn.addEventListener('click', _ => {
    document.querySelector(".aside").classList.toggle('show');
    backdrop.classList.add('offcanvas-backdrop');
    backdrop.classList.add('show');
});

backdrop.addEventListener('click', _ => {
    aside.classList.remove('show');
    backdrop.classList.remove('offcanvas-backdrop');
    backdrop.classList.remove('show');
});

//Visitor Chart 
const vLabels = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
];

const vData = {
    labels: vLabels,
    datasets: [{
        label: 'My First Dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [1, 40, 3, 35, 6, 30, 9, 25, 12, 20, 15, 15, 18, 10, 21, 5, 22, 2, 23, 0, 24, 2, 23, 5, 22, 10, 21, 15, 20],
        borderRadius: 5,
    },
    {
        label: 'My Second Dataset',
        backgroundColor: 'rgb(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132, 0.2)',
        data: [0, 30, 2, 45, 5, 22, 10, 32, 5, 30, 7, 12, 10, 30, 5, 32, 20, 45, 2, 30, 5, 22, 7, 10, 3, 30, 5, 10, 0, 3],
        borderRadius: 5,
    }]
};

const vConfig = {
    type: 'bar',
    data: vData,
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                align: 'start',
                labels: {
                    usePointStyle: true,
                }
            }
        },
        scales: {
            y: {
                grid: {
                    borderColor: 'transparent',
                    borderDash: [3]
                },
                ticks: {
                    stepSize: 20
                }
            },
            x: {
                grid: {
                    borderColor: 'transparent',
                    display: false,
                },

            }
        }
    }
};

const visitorChart = new Chart(
    document.getElementById('visitorChart'),
    vConfig
);

// U-Visitor
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First Dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [12, 10, 15, 12, 20, 30, 45],
        borderRadius: 5,
        barThickness: 10,
    },{
        label: 'My Second Dataset',
        backgroundColor: 'rgba(54, 162, 235, 1)',
        borderColor: 'rgba(54, 162, 235, 1)',
        data: [10, 20, 12, 15, 30, 20, 55],
        borderRadius: 5,
        barThickness: 10,
    }]
};

const options = {
    maintainAspectRatio: false,
    plugins : {
        legend : {
            position: 'bottom',
            align: 'start',
            display: true,
            labels: {
                usePointStyle: true,
            }
        }
    },
    scales: {
        y: {
            ticks: {
                borderColor: '#fff',
                stepSize: 20,
            },
            grid: {
                borderColor: 'transparent',
                borderDash: [3]
            }
        },
        x: {
            grid: {
                display: false
            }
        }
    },

}

const config = {
    type: 'bar',
    data,
    options
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

 // DataTable
 $(document).ready(function () {
    $('#example').DataTable({
        pageLength: 5,
    });
});