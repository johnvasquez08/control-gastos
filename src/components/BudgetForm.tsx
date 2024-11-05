import { useMemo, useState } from "react"
import { useBudget } from "../hooks/usebudget"

export default function BudgetForm() {
    const [budget, setBudget] = useState(0)
    const {dispatch} = useBudget()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBudget(+e.target.value)
        console.log(budget)
    }

    const validateBudget = useMemo(() => {
        return budget > 0 || isNaN(budget) 
    }, [budget]
)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({type: 'addbudget', payload: {budget}})
    }
    
  return (
    <div>
        <form className="space-y-5"
        onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-5">
                <label htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center">Definir presupuesto</label>
                <input type="number" 
                id="budget"
                className="w-full p-2 border border-gray-200 bg-white"
                placeholder="Define tu presupuesto"
                name="budget"
                onChange={handleChange}
                />
            </div>
            <input type="submit"
            value="Definir presupuesto"
            className="bg-blue-600 disabled:opacity-10 hover:bg-blue-700 w-full uppercase text-white cursor-pointer p-2 font-black"
            
            disabled={!validateBudget}
             />

        </form>
    </div>
) 

}
