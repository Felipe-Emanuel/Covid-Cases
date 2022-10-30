import { ReactNode } from "react"

export interface ChosenDateProps {
    value?: ReactNode
    className?: string
}

export function ChosenDate({value}: ChosenDateProps) {
    return (
        <h3 className='
            text-center m-auto w-[35vw] md:w-[25vw] lg:w-[15vw] p-2 border-b-2 border-sky-500'
        >
            {value}
        </h3>
    )
}