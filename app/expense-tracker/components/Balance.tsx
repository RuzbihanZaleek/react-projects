"use client";

import React, { useContext } from 'react'
import { ExpenseContext } from '../constext/ExpenseContext';

const Balance = () => {
  const context = useContext(ExpenseContext);
  if (!context) return null;

  const {transactions} = context;
  const balance = transactions.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className='my-4'>
      <h3 className='text-lg'>Your Balance</h3>
      <span className='text-2xl font-semibold'>${balance.toFixed(2)}</span>
    </div>
  )
}

export default Balance
