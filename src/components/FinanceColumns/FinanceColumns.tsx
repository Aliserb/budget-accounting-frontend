import { useState } from "react";

const FinanceColumns = () => {

    const [income, setIncome] = useState<number>(0);
    const [expense, setExpense] = useState<number>(0);

    const addIncome = (value: number): void => {
        setIncome((prevIncome) => prevIncome + value);
    };

    const addExpense = (value: number): void => {
        setExpense((prevExpense) => prevExpense + value);
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
                        {/* List of Income items (placeholder) */}
                        <ul className="space-y-2">
                            <li className="p-2 border-b flex items-center justify-between">
                                <span>Income Item 1</span>
                                <span className="text-green-500">+100</span>
                            </li>
                            <li className="p-2 border-b flex items-center justify-between">
                                <span>Income Item 1</span>
                                <span className="text-green-500">+100</span>
                            </li>
                        </ul>
                        {/* Add Income Button */}
                        <button 
                            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                            onClick={() => addIncome(10)}
                        >
                            Добавить
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
                        {/* List of Expenses items (placeholder) */}
                        <ul className="space-y-2">
                            <li className="p-2 border-b flex items-center justify-between">
                                <span>Income Item 1</span>
                                <span className="text-red-500">-100</span>
                            </li>
                            <li className="p-2 border-b flex items-center justify-between">
                                <span>Income Item 1</span>
                                <span className="text-red-500">-100</span>
                            </li>
                        </ul>
                        {/* Add Expense Button */}
                        <button 
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            onClick={() => addExpense(10)}
                        >
                            Добавить
                        </button>
                    </div>
                </div>

                ReportFinanceModal
            </div>
        </div>
    );
};

export default FinanceColumns;
