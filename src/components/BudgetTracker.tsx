import { useBudget } from "../hooks/usebudget";
import AmountDisplay from "./AmountDisplay";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'	

export default function BudgetTracker() {
  const {state, dispatch, totalExpenses, remainingBudget} = useBudget()

  const percentaje = +((totalExpenses / state.budget) * 100).toFixed(2)

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={() => dispatch({type: 'resetapp'})}>
        <div className="flex justify-center">
            <CircularProgressbar
            value={percentaje}
            styles={buildStyles({
                pathColor: percentaje === 100 ? '#DC2626' : '#3b82f6',
                trailColor: '#f5f5f5',
                textColor: percentaje === 100 ? '#DC2626' : '#3b82f6',
                textSize: '8px'
            })}
            text={`${percentaje}% Gastado`}
            />
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
            <button type="submit" className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
            >
                Resetear APP
            </button>
            <AmountDisplay
            label='Presupuesto'
            amount={state.budget}/>
            <AmountDisplay
            label='Disponible'
            amount={remainingBudget}/>

            <AmountDisplay
            label='Gastado'
            amount={totalExpenses}/>

        </div>
    </form>
  )
}
