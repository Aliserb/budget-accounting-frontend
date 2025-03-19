import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

interface FinanceChartProps {
    incomeData: { name: string; amount: number }[];
    expenseData: { name: string; amount: number }[];
}

const FinanceChart: React.FC<FinanceChartProps> = ({ incomeData, expenseData }) => {
    // Для упрощения - создаём массив из сумм в порядке добавления (можно усложнить и по дате)
    const labels = Array.from({ length: Math.max(incomeData.length, expenseData.length) }, (_, i) => `#${i + 1}`);
    const incomeAmounts = incomeData.map(item => item.amount);
    const expenseAmounts = expenseData.map(item => item.amount);

    const data = {
        labels,
        datasets: [
            {
                label: 'Доход',
                data: incomeAmounts,
                borderColor: 'rgba(34, 197, 94, 1)', // Зеленый
                backgroundColor: 'rgba(34, 197, 94, 0.2)',
                fill: true,
                tension: 0.3,
            },
            {
                label: 'Расход',
                data: expenseAmounts,
                borderColor: 'rgba(239, 68, 68, 1)', // Красный
                backgroundColor: 'rgba(239, 68, 68, 0.2)',
                fill: true,
                tension: 0.3,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: (value: number) => `${value}₽`,
                },
            },
        },
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-lg mt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">График доходов и расходов</h2>
            <Line data={data} options={options} />
        </div>
    );
};

export default FinanceChart;