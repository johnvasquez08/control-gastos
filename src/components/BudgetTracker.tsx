import { useBudget } from "../hooks/usebudget";
import AmountDisplay from "./AmountDisplay";

export default function BudgetTracker() {
    const {state, dispatch} = useBudget()
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={() => dispatch({type: 'resetapp'})}>
        <div className="flex justify-center">
            <img src="/grafico.jpg" alt="Graficos de gastos" />
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
            <button type="submit" className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
            >
                Resetear APP
            </button>
            <AmountDisplay
            label='Presupuesto'
            amount={4000}/>
            <AmountDisplay
            label='Disponible'
            amount={2000}/>

            <AmountDisplay
            label='Gastado'
            amount={2000}/>

        </div>
    </form>
  )
}
