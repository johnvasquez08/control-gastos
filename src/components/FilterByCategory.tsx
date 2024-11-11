import { categories } from "../data/categories";
import { useBudget } from "../hooks/usebudget";

export default function FilterByCategory() {

const {dispatch} = useBudget()

const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({type: 'appfilter', payload: {id: e.target.value}})
}

  return (
        <div className="bg-white shadow-md rounded-lg p-10 ">
            <form>
                <div className="flex flex-col md:flex-row md:items-center gap-5">
                    <label htmlFor="categoria" >Filtrar Gastos</label>
                    <select name="categoria" id="categoria" className="bg-slate-100 flex-1 p-3 rounded-lg" onChange={handleChange}>
                        <option value="">--Todas las categorias--</option>
                        {categories.map((category) => {
                            return (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            )
                        })}
                        
                    </select>
                </div>
            </form>
        </div>
  )
}
