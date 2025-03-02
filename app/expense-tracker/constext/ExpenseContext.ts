"use client";

import { ExpenseContextType } from "@/types/expense-tracker-types";
import { createContext } from "react";

export const ExpenseContext = createContext<ExpenseContextType | null>(null);