interface StatusProps {
    status: number,
    name: string
}

export function Status({ status, name }: StatusProps) {
    return (
        <div className="flex items-center justify-center gap-2">
            <h3 className="font-semibold text-[32px] text-red-500">{status}k+</h3>
            <p className="text-lg text-white">{name}</p>
        </div>
    )
}