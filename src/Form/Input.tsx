import { useRef, ReactNode } from 'react'
import { IMaskInput } from "react-imask";
import IMask from "imask";

export interface InputDateProps{
    className?: string,
    searchValue?: ReactNode, 
    handleChange?: Function
}

export function Input({}: InputDateProps) {
    const inputDateYear = {
        mask: 'YYYY{/}MM{/}DD',
        blocks: {
            YYYY: {
                mask: IMask.MaskedRange,
                from: String(new Date().getFullYear() - 2),
                to: String(new Date().getFullYear() -1)
            },
            MM: {
                mask: IMask.MaskedRange,
                from: 1,
                to: 12

            },
            DD: {
                mask: IMask.MaskedRange,
                from: 1,
                to: 31,
            }
        }
    }
    const inputRef = useRef(null)
    const ref = useRef(null)


    return (
        <div className='w-screen'>

            <IMaskInput
                className=' 
                    text-[8px] text-center focus:outline-none focus:ring-1
                    block m-auto w-[35vw] px-3 py-2 rounded
                    sm:text-[14px]
                    md:text-[16px] md:w-[25vw]
                    lg:w-[15vw]
                    bg-blue-100 border border-slate-300  focus:ring-blue-500'
                mask={'YYYY{/}MM{/}DD'}
                maxLength={10}
                blocks={{YYYY: inputDateYear, MM: inputDateYear, DD: inputDateYear }}
                radix='.'
                value={'2020{/}07{/}06'}
                ref={ref}
                inputRef={inputRef}
            />

        </div>

    )
}