import Chart from "chart.js/auto";

export function MainChart() {

    const sale = [
        { month: "فروردین", value: 20 },
        { month: "اردیبهشت", value: 120 },
        { month: "خرداد", value: 40 },
        { month: "تیر", value: 60 },
        { month: "مرداد", value: 80 },
        { month: "شهریور", value: 90 },
        { month: "مهر", value: 100 },
        { month: "آبان", value: 20 },
        { month: "آذر", value: 40 },
        { month: "دی", value: 70 },
        { month: "بهمن", value: 70 },
        { month: "اسفند", value: 50 },
    ];

    const income = [
        { month: "فروردین", value: 12000000 },
        { month: "اردیبهشت", value: 290000000 },
        { month: "خرداد", value: 447000000 },
        { month: "تیر", value: 600000000 },
        { month: "مرداد", value: 800000000 },
        { month: "شهریور", value: 900000000 },
        { month: "مهر", value: 10000000000 },
        { month: "آبان", value: 200000000 },
        { month: "آذر", value: 400000000 },
        { month: "دی", value: 70000000000 },
        { month: "بهمن", value: 700000000 },
        { month: "اسفند", value: 50000000000 },
    ];

    const saleChart = document.getElementById("saleChart");
    const incomeChart = document.getElementById("incomeCart");

    if (!saleChart || !incomeChart) {
        console.error("Chart canvas not found!");
        return;
    }

    // حذف نمودارهای قبلی در صورت وجود
    Chart.getChart(saleChart)?.destroy();
    Chart.getChart(incomeChart)?.destroy();

    // تنظیمات مشترک نمودارها
    function chartOptions() {
        return {
            responsive: true,
            maintainAspectRatio: false,

            plugins: {
                legend: {
                    display: false
                },

                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.parsed.y.toLocaleString("fa-IR") + " تومان";
                        }
                    }
                }
            },

            scales: {
                y: {
                    grid: {
                        color: "rgba(255,255,255,0.05)"
                    }
                },

                x: {
                    grid: {
                        display: false
                    }
                }
            }
        };
    }

    // نمودار فروش
    new Chart(saleChart, {
        type: "line",

        data: {
            labels: sale.map(item => item.month),

            datasets: [{
                label: "فروش ماهیانه",
                data: sale.map(item => item.value),

                borderColor: "#8B5CF6",
                backgroundColor: "#8B5CF6",
                borderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
                tension: 0.4
            }]
        },

        options: chartOptions()
    });

    // نمودار درآمد
    new Chart(incomeChart, {
        type: "line",

        data: {
            labels: income.map(item => item.month),

            datasets: [{
                label: "درآمد ماهیانه",
                data: income.map(item => item.value),

                borderColor: "#8B5CF6",
                backgroundColor: "#8B5CF6",
                borderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
                tension: 0.4
            }]
        },

        options: chartOptions()
    });

}