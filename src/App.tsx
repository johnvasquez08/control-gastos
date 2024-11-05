import BudgetForm from "./components/BudgetForm"
import { useBudget } from "./hooks/usebudget"

function App() {

    const {state, dispatch} = useBudget()
    console.log(state)

  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72">\
        <h1 className="uppercase text-center font-black text-4xl text-white">Planificador de gastos</h1>
      </header>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
            <BudgetForm
            />
      </div>
    </>
  )
}

export default App
