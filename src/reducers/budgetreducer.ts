import { Category, DraftExpense, Expense } from "../types"
import { v4 as uuidv4 } from 'uuid';

export type BudgetActions =
   { type: 'addbudget', payload: { budget: number } }
    | { type: 'showmodal' }
    | { type: 'closemodal' }
    | { type: 'resetapp'}
    | { type: 'addexpense', payload: { expense: DraftExpense } }
    | { type: 'deleteexpense', payload: { id: string } }
    | { type: 'getexpensebyid', payload: { id: string } }
    | { type: 'updateexpense', payload: { expense: Expense } }
    | { type: 'appfilter', payload: { id: Category['id'] } }

const initialBudget = () : number => {
    const localStorageBudget = localStorage.getItem('budget')
    return localStorageBudget ? +localStorageBudget : 0
}

const localStorageExpenses = () :Expense[] => {
    const localStorageExpenses = localStorage.getItem('expenses')
    return localStorageExpenses ? JSON.parse(localStorageExpenses) : []
}

export type BudgetState = {
  budget: number
  modal: boolean
  expenses: Expense[]
  editingId: Expense['id']
  currentcategory: Category['id']
}

export const initialState: BudgetState = {
  budget: initialBudget(),
  modal: false,
  expenses: localStorageExpenses()
  ,editingId: ''
  ,currentcategory: ''

}
const createExpense = (expense: DraftExpense): Expense => {
  return {
    ...expense,
    id: uuidv4()
  }
}
export const BudgetReducer = (
    state: BudgetState = initialState,
    action: BudgetActions
) => {
    if (action.type === 'addbudget') {
        return {
            ...state,
            budget: action.payload.budget
        }
    }
    if (action.type === 'showmodal') {
        return {
            ...state,
            modal: true
        }
    }
    if (action.type === 'closemodal') {
        return {
            ...state,
            modal: false,
            editingId: ''
        }
    }
    if (action.type === 'resetapp') {
        return {
            ...state,
            budget: 0,
            modal: false
            ,expenses: []
        }
    }
    if (action.type === 'addexpense') {
        const expense = createExpense(action.payload.expense)
        return {
            ...state,
            expenses: [...state.expenses, expense],
            modal: false
        }
    }
    if (action.type === "deleteexpense") {
        return {
            ...state,
            expenses: state.expenses.filter((expense) => expense.id !== action.payload.id)
        }

    }
    if (action.type === "getexpensebyid") {
        return {
            ...state,
            editingId: action.payload.id,
            modal: true
        }
    }
    if (action.type === "updateexpense") {
        return {
            ...state,
            expenses: state.expenses.map((expense) => expense.id === action.payload.expense.id ? action.payload.expense : expense),
            modal: false,
            editingId: ''
        }
    }
    if (action.type === "appfilter") {
        return {
            ...state,
            currentcategory: action.payload.id
        }
    }

    return state
}