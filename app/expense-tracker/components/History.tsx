"use client";
import React, { useContext } from "react";
import { ExpenseContext } from "../constext/ExpenseContext";

const History = () => {
  const context = useContext(ExpenseContext);
  if (!context) return null;

  const { transactions } = context;

  return (
    <div className="mt-6">
      <h3 className="text-lg">History</h3>
      <hr />
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className={`bg-white flex p-3 my-2 justify-between border-r-4 shadow-md ${
            transaction.amount > 0 ? "border-green-700" : "border-red-700"
          }`}
        >
          <p>{transaction.text}</p>
          <p>
            {transaction.amount > 0 ? "+" : ""}
            {transaction.amount}
          </p>
        </div>
      ))}
    </div>
  );
};

export default History;
