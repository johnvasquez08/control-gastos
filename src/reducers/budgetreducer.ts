export type BudgetActions =
   { type: 'addbudget', payload: { budget: number } }
    | { type: 'showmodal' }
    | { type: 'closemodal' }
    | { type: 'resetapp'}
  
export type BudgetState = {
  budget: number
  modal: boolean
}

export const initialState: BudgetState = {
  budget: 0,
  modal: false

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
            modal: false
        }
    }
    if (action.type === 'resetapp') {
        return {
            ...state,
            budget: 0,
            modal: false
        }
    }
    

    return state
}