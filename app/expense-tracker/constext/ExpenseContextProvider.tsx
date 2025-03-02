import { TransactionType } from "@/types/expense-tracker-types";
import { ReactNode, useState } from "react";
import { ExpenseContext } from "./ExpenseContext";

interface ExpenseContextProviderType {
  children: ReactNode;
}

export default function ExpenseContextProvider({
  children,
}: ExpenseContextProviderType) {
  const [transactions, setTransactions] = useState<TransactionType[]>([
    { id: 1, text: "Salary", amount: 1000 },
    { id: 2, text: "Grocery", amount: -200 },
    { id: 3, text: "Rent", amount: -300 },
  ]);

  const addTransaction = (text: string, amount: number) => {
    if (!text || isNaN(amount)) return;
    setTransactions([...transactions, { id: Date.now(), text, amount }]);
  };

  return (
    <ExpenseContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </ExpenseContext.Provider>
  );
}
