"use client";

import AddNewTransaction from "./components/AddNewTransaction";
import Balance from "./components/Balance";
import History from "./components/History";
import IncomeExpense from "./components/IncomeExpense";
import ExpenseContextProvider from "./constext/ExpenseContextProvider";

const page = () => {
  return (
    <ExpenseContextProvider>
      <div className="max-w-md mx-auto p-6 bg-gray-50 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Expense Tracker</h1>
        <Balance />
        <IncomeExpense />
        <History />
        <AddNewTransaction />
      </div>
    </ExpenseContextProvider>
  );
};

export default page;
