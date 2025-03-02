export interface TransactionType {
    id: number;
    text: string;
    amount: number;
}

export interface ExpenseContextType {
    transactions: TransactionType[];
    addTransaction: (text: string, amount: number) => void;
}