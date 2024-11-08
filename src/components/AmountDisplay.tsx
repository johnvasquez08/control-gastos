import { formatCurrency } from "../helpers/formatcurrency";

type AmountDisplayProps = {
  label?: string;
  amount: number;
}
export default function AmountDisplay({label, amount}: AmountDisplayProps) {
  return (
    <p className="text-2xl text-blue-600 font-bold">
        {label}: {''}
        <span className="text-black font-bold">{formatCurrency(amount)}</span>
      
    </p>
  )
}
