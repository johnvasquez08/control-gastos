import { useMemo } from "react"
import { useBudget } from "../hooks/usebudget"
import ExpenseDetail from "./ExpenseDetail"

export default function ExpenseList() {
    const { state } = useBudget()

    const filteredcategory = state.currentcategory ? state.expenses.filter(expense => expense.categoria === state.currentcategory) : state.expenses
    
    const isEmpty = useMemo(() => filteredcategory.length === 0, [filteredcategory])
    return (
    <div className="mt-10 bg-white shadow-2xl rounded-lg p-10">
        {isEmpty ? <p className="text-gray-600 text-2xl font-bold">No hay gastos</p> : 
        <>
            <p className="text-gray-600 text-2xl font-bold my-5">Listado de gatos</p>
            {filteredcategory.map(expense => (
                <ExpenseDetail
                key={expense.id}
                expense={expense}
                />
            ))}
        </>}
    </div>
)
}

