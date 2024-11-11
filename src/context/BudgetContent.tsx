import { createContext, useMemo, useReducer } from "react"
import { BudgetActions, BudgetReducer, BudgetState, initialState } from "../reducers/budgetreducer"


type BudgetContextProps = {
    state: BudgetState,
    dispatch: React.Dispatch<BudgetActions>
    totalExpenses: number,
    remainingBudget: number
}

type BudgetProviderProps = {
    children: React.ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>({} as BudgetContextProps)


export const BudgetProvider = ({children}: BudgetProviderProps) => {
    
    const [state, dispatch] = useReducer(BudgetReducer, initialState)

    const totalExpenses = useMemo( () =>
        state.expenses.reduce((total, expense) => expense.cantidad + total, 0) ,[state.expenses])

    const remainingBudget = useMemo(() => state.budget - totalExpenses, [state, totalExpenses])

    
    return (
        <BudgetContext.Provider
        value={{
            state,
            dispatch,
            totalExpenses,
            remainingBudget
        }}
        >
            {children}
            
        </BudgetContext.Provider>
    )
}