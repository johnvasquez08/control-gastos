import { createContext, useReducer } from "react"
import { BudgetActions, BudgetReducer, BudgetState, initialState } from "../reducers/budgetreducer"


type BudgetContextProps = {
    state: BudgetState,
    dispatch: React.Dispatch<BudgetActions>
}

type BudgetProviderProps = {
    children: React.ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>({} as BudgetContextProps)

export const BudgetProvider = ({children}: BudgetProviderProps) => {
    
    const [state, dispatch] = useReducer(BudgetReducer, initialState)
    
    return (
        <BudgetContext.Provider
        value={{
            state,
            dispatch
        }}
        >
            {children}
            
        </BudgetContext.Provider>
    )
}