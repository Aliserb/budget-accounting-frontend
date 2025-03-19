import { useState } from "react";
import ReportFinanceModal from './ReportFinanceModal';
import FinanceChartBar from "./FinanceChartBar";

type EntryType = 'income' | 'expense';

const FinanceColumns = () => {
    const [income, setIncome] = useState<number>(0);
    const [expense, setExpense] = useState<number>(0);

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalType, setModalType] = useState<EntryType>('income');

    const [incomeItems, setIncomeItems] = useState<{ name: string; amount: number }[]>([]);
    const [expenseItems, setExpenseItems] = useState<{ name: string; amount: number }[]>([]);

    const handleAddEntry = (type: EntryType, name: string, amount: number) => {
        if (type === 'income') {
            setIncome(prev => prev + amount);
            setIncomeItems(prev => [...prev, { name, amount }]);
        } else {
            setExpense(prev => prev + amount);
            setExpenseItems(prev => [...prev, { name, amount }]);
        }
        setIsModalOpen(false); // Закрыть модалку после добавления
    };

    const openModal = (type: EntryType) => {
        setModalType(type);
        setIsModalOpen(true);
    };

    return (
        <div className="finance_columns_section">
            <div className="container">
                <div className="flex flex-row justify-center items-start flex-grow w-full p-6 space-x-8">
                    {/* Income Column */}
                    <div className="flex flex-col w-1/2 max-w-md p-4 bg-white rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-green-500 mb-4">
                            Доход
                        </h2>
                        <div className="total_value font-semibold text-green-500 mb-4">
                            + {income} рублей
                        </div>
                        <ul className="space-y-2 max-h-60 overflow-y-auto">
                            {incomeItems.map((item, idx) => (
                                <li key={idx} className="p-2 border-b flex items-center justify-between">
                                    <span>{item.name}</span>
                                    <span className="text-green-500">+{item.amount}</span>
                                </li>
                            ))}
                        </ul>
                        <button 
                            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                            onClick={() => openModal('income')}
                        >
                            Добавить доход
                        </button>
                    </div>

                    {/* Expenses Column */}
                    <div className="flex flex-col w-1/2 max-w-md p-4 bg-white rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-red-500 mb-4">
                            Расход
                        </h2>
                        <div className="total_value font-semibold text-red-500 mb-4">
                            - {expense} рублей
                        </div>
                        <ul className="space-y-2 max-h-60 overflow-y-auto">
                            {expenseItems.map((item, idx) => (
                                <li key={idx} className="p-2 border-b flex items-center justify-between">
                                    <span>{item.name}</span>
                                    <span className="text-red-500">-{item.amount}</span>
                                </li>
                            ))}
                        </ul>
                        <button 
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            onClick={() => openModal('expense')}
                        >
                            Добавить расход
                        </button>
                    </div>
                </div>

                {isModalOpen && (
                    <ReportFinanceModal
                        type={modalType}
                        onSubmit={handleAddEntry}
                        onClose={() => setIsModalOpen(false)}
                    />
                )}
            </div>

            <FinanceChartBar totalIncome={income} totalExpense={expense} />
        </div>
    );
};

export default FinanceColumns;