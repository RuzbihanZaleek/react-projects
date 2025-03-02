"use client";

import React, { useContext } from "react";
import { ExpenseContext } from "../constext/ExpenseContext";

const IncomeExpense = () => {
  const context = useContext(ExpenseContext);
  if (!context) return null;

  const { transactions } = context;

  const income = transactions
    .filter((item) => item.amount > 0)
    .reduce((acc, item) => acc + item.amount, 0);
  const expense = transactions
    .filter((item) => item.amount < 0)
    .reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className="flex justify-between bg-white p-4 shadow-md rounded-lg border">
      <div className="w-1/2 text-center border-r-2 border-gray-300">
        <p className="font-semibold">INCOME</p>
        <p className="text-green-700">${income.toFixed(2)}</p>
      </div>
      <hr />
      <div className="w-1/2 text-center">
        <p className="font-semibold">EXPENSE</p>
        <p className="text-red-700">${Math.abs(expense).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
