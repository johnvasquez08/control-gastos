export type BudgetActions =
   { type: 'addbudget', payload: { budget: number } }
  
export type BudgetState = {
  budget: number
}

export const initialState: BudgetState = {
  budget: 0,

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

    return state
}