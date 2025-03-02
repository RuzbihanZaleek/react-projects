"use client";
import React, { useContext, useState } from "react";
import { ExpenseContext } from "../constext/ExpenseContext";

const AddNewTransaction = () => {
  const context = useContext(ExpenseContext);
  if (!context) return null;

  const { addTransaction } = context;

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    if (text.trim() === "" || amount.trim() === "") return;
    addTransaction(text, Number(amount));
    setText("");
    setAmount("");
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg">Add new transaction</h3>
      <hr />
      <div className="my-4">
        <p>Text</p>
        <input
          type="text"
          className="rounded border-gray-50 shadow-md bg-white w-full p-2 mt-2"
          placeholder="Enter text..."
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
      <div className="my-4">
        <p>Amount</p>
        <p>(negative - expense, positive -income)</p>
        <input
          type="number"
          className="rounded border-gray-50 shadow-md bg-white w-full p-2 mt-2"
          placeholder="Enter amount..."
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
      </div>
      <button
        className="bg-purple-500 w-full p-2 rounded text-white font-bold cursor-pointer hover:bg-purple-800"
        onClick={handleSubmit}
      >
        Add Transaction
      </button>
    </div>
  );
};

export default AddNewTransaction;
