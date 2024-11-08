import { categories } from "../data/categories";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import { DraftExpense, Value } from "../types";
import { useBudget } from "../hooks/usebudget";
import Error from "./Error";




export default function ExpenseForm() {
    const {dispatch} = useBudget()
    const [expense, setExpense] = useState<DraftExpense>({
        expenseName: '',
        cantidad: 0,
        categoria: '',
        date: new Date()
    });
    const [error, setError] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = e.target
        const isAmountField = ['cantidad'].includes(name)
        setExpense({
            ...expense,
            [name]: isAmountField ? Number(value) : value
        })
    }
    const handleChangeDte = (value: Value) => {
            setExpense({
                ...expense,
                date: value
            })
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("se mando")
        if(Object.values(expense).includes('')){
            setError('Todos los campos son obligatorios')
            return 
        }
        else{
            setError('')
        }

    }
    

  return (
    <form className="space-y-5" onSubmit={handleSubmit} >
        <legend className="text-3xl text-center text-stone-950 font-black uppercase border-b-4 border-blue-500">
            Nuevo gasto
        </legend>
        {error && <Error>{error}</Error>}
        <div className="flex flex-col gap-2">
            <label htmlFor="expenseName" className="text-xl text-stone-950 font-bold">Nombre del gasto</label>
            <input className="bg-slate-100 p-2"
            type="text" id="expenseName" placeholder="Añade el nombre del gasto" name="expenseName"
            onChange={handleChange}/>
            

        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="cantidad" className="text-xl text-stone-950 font-bold">Cantidad</label>
            <input className="bg-slate-100 p-2"
            type="number" id="cantidad" placeholder="Añade cuanto gastaste" name="cantidad"
            onChange={handleChange}/>

        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="categoria" className="text-xl text-stone-950 font-bold">Categoria</label>
            <select className='bg-slate-100 p-2' id="categoria" name="categoria"onChange={handleChange}>
                <option value="">--Seleccione--</option>
                {categories.map((categories) => {
                    return (<option key={categories.id} value={categories.id}>{categories.name}</option>)
                })}
            </select>

        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="cantidad" className="text-xl text-stone-950 font-bold">Fecha Gasto</label>
            <DatePicker
            className='bg-slate-100 p-2 border-0'
            value={expense.date}
            onChange={handleChangeDte}
            />

        </div>
        <input type="submit"
        className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
        value={'Registrar gasto'} />
        
    </form>
  )
}
