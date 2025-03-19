import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
);

interface FinanceChartBarProps {
    totalIncome: number;
    totalExpense: number;
}

const FinanceChartBar: React.FC<FinanceChartBarProps> = ({ totalIncome, totalExpense }) => {
    const data = {
        labels: ['Доход', 'Расход'],
        datasets: [
            {
                label: 'Сумма (₽)',
                data: [totalIncome, totalExpense],
                backgroundColor: ['rgba(34, 197, 94, 0.7)', 'rgba(239, 68, 68, 0.7)'],
                borderColor: ['rgba(34, 197, 94, 1)', 'rgba(239, 68, 68, 1)'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-lg mt-8">
            <div className="container">
                <h2 className="text-xl font-semibold mb-4 text-center">Общий доход и расход</h2>
                <Bar data={data} />
            </div>
        </div>
    );
};

export default FinanceChartBar;