import { useState } from "react";
import Modal from "../Modal/Modal";
import { MdClose } from "react-icons/md";

interface ReportFinanceModalProps {
    type: 'income' | 'expense';
    onSubmit: (type: 'income' | 'expense', name: string, amount: number) => void;
    onClose: () => void;
}

const ReportFinanceModal: React.FC<ReportFinanceModalProps> = ({ type, onSubmit, onClose }) => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const parsedAmount = parseFloat(amount);
        if (!name.trim() || isNaN(parsedAmount) || parsedAmount <= 0) return;
        onSubmit(type, name.trim(), parsedAmount);
        setName("");
        setAmount("");
    };

    return (
        <Modal>
            <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-md mx-auto relative">
                <div 
                    className="modal_close absolute top-2 right-2 text-gray-400 hover:text-black"
                    onClick={onClose}
                >
                    <MdClose />
                </div>

                <h2 className="text-xl font-semibold mb-4 text-center">
                    {type === "expense" ? "Добавить расход" : "Добавить доход"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Название</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Описание"
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Сумма</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="1000"
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full py-2 rounded-lg text-white font-semibold ${
                            type === "expense" ? "bg-red-500" : "bg-green-500"
                        } hover:opacity-90`}
                    >
                        Добавить
                    </button>
                </form>
            </div>
        </Modal>
    );
};

export default ReportFinanceModal;