type Props = {
    children: React.ReactNode
}

export default function Error({children}: Props) {
  return (
    <p className="bg-red-600 p-2 text-white font-bold text-sm text-center">
        {children}
    </p>
  )
}
