import { useState, useEffect, useRef, SetStateAction } from 'react'
import { key } from '../Api/Key'
import ScrollAreaInfo from '../Form/ScrollArea'
import Map from '../WorldMap/geo-map'
import { ChosenDate } from './DataChoise'
import { SelectInfo } from './Select'


export function DataTable() {
    const [date, setDate] = useState ([])
    const [location, setLocation] = useState ([])
    const [variant, setVariant] = useState ([])
    const [nSequences, setNSequences] = useState ([])
    const [percSequences, setPercSequences] = useState ([])
    const [numSequencesTotal, setNumSequencesTotal] = useState ([])

    const dateResp = (`https://sqgnveodiqjksphccsab.supabase.co/rest/v1/Challenge?select=date&apikey=${key}`)
    const locationResp = (`https://sqgnveodiqjksphccsab.supabase.co/rest/v1/Challenge?select=location&apikey=${key}`)
    const variantResp = (`https://sqgnveodiqjksphccsab.supabase.co/rest/v1/Challenge?select=variant&apikey=${key}`)
    const numSequencesResp = (`https://sqgnveodiqjksphccsab.supabase.co/rest/v1/Challenge?select=num_sequences&apikey=${key}`)
    const percSequencesResp = (`https://sqgnveodiqjksphccsab.supabase.co/rest/v1/Challenge?select=perc_sequences&apikey=${key}`)
    const numSequencesTotalResp = (`https://sqgnveodiqjksphccsab.supabase.co/rest/v1/Challenge?select=num_sequences_total&apikey=${key}`)
    
    useEffect(() => {
        fetch(dateResp)
        .then(resp => resp.json())
        .then(resp => {
            setDate(resp)
        })
    }, [])

    useEffect(() => {
        fetch(locationResp)
        .then(resp => resp.json())
        .then(resp => {
            setLocation(resp)
        })
    }, [])

    const[dataValue, setDataValue] = useState('Choise any date')
    const[CountryValue, setCountryValue] = useState('Choise any Country')
    
    const dataRef = useRef(null)
    const countryRef = useRef(null)

    useEffect(() => {
        dataRef.current
    }, [dataValue])

    useEffect(() => {
        countryRef.current
    }, [CountryValue])
    
    const handleDateSelect = (value: SetStateAction<string>) => {
        setDataValue(value)
    }

    const handleCountrySelect = (value: SetStateAction<string>) => {
        setCountryValue(value)
    }

    const handleDataChoise = () => {
        fetch(variantResp)
        .then(resp => resp.json())
        .then(resp => {
            setVariant(resp)
        }),

        fetch(numSequencesResp)
        .then(resp => resp.json())
        .then(resp => {
            setNSequences(resp)
        }),
    
        fetch(percSequencesResp)
        .then(resp => resp.json())
        .then(resp => {
            setPercSequences(resp)
        }),
    
        fetch(numSequencesTotalResp)
        .then(resp => resp.json())
        .then(resp => {
            setNumSequencesTotal(resp)
        })

    }

    const handleTotalChoise = () => {
        fetch(variantResp)
        .then(resp => resp.json())
        .then(resp => {
            setVariant(resp)
        }),

        fetch(numSequencesResp)
        .then(resp => resp.json())
        .then(resp => {
            setNSequences(resp)
        }),
    
        fetch(percSequencesResp)
        .then(resp => resp.json())
        .then(resp => {
            setPercSequences(resp)
        }),
    
        fetch(numSequencesTotalResp)
        .then(resp => resp.json())
        .then(resp => {
            setNumSequencesTotal(resp)
        })

    }

    return (
        <div>
            <div className='flex justify-center'>
                <SelectInfo
                    title={'Specific date or acumulated total'}
                    handleDate={
                        <button className='w-[40vw] border-r-2 border-l-2 border-white' onFocus={handleDataChoise}>
                            Specific date
                        </button>
                    }
                    HandleTotal={
                        <button className='w-[40vw] border-r-2 border-l-2 border-white' onFocus={handleTotalChoise}>
                            Acumulated total
                        </button>
                    }
                />
            </div>
            <div  className='w-[75vw] m-auto lg:w-[58vw] py-6 lg:py-0 lg:mt-6'>
                <Map chosenKey={'world'} />
            </div>
            <div className='
                py-3 text-[10px] truncate
                sm:text-[14px]
                md:text-[16px]'>
                {/* <input type="number" placeholder='2020-07-06'/> */}
                <ChosenDate value={dataValue}/>
                <ChosenDate value={CountryValue}/>
                {/* <input type="text" placeholder='Angola'/> */}
            </div>
            <div className='
            list-none py-8 px-2 h-[45vh] gap-1 m-auto text-[8px] truncate grid grid-cols-2 grid-rows-3
            sm:w-[75vw] sm:grid-cols-6 sm:grid-rows-1
            md:text-[10px]'
            >
                <div>
                    <ScrollAreaInfo text={'Date'} info={ 
                        date.map((data: any) => {  
                            return (
                                <li ref={dataRef} onClick={() => handleDateSelect(data.date)} className='hover:text-blue-500  mt-4 cursor-default'>
                                    {data.date}
                                </li>
                            )}
                        )}
                    />
                </div>

                <div >
                    <ScrollAreaInfo text={'Country'} info={
                        location.map((location:any) => {
                            return (
                                <li ref={countryRef} onClick={() => handleCountrySelect(location.location)} className='hover:text-blue-500  mt-4 cursor-default'>
                                    {location.location}
                                </li>
                            )}
                        )}
                    />
                </div>

                <div >
                    <ScrollAreaInfo text={'Variant'} info={
                        variant.map((variant:any) => {
                            return (
                                <li className='hover:text-blue-500  mt-4 cursor-default'>
                                    {variant.variant}
                                </li>
                            )}
                        )}
                    />
                </div>

                <div >
                    <ScrollAreaInfo text={'n_sequences'} info={
                        nSequences.map((nSequences:any) => {
                            return (
                                <li className='hover:text-blue-500  mt-4 cursor-default'>
                                    {nSequences.num_sequences}
                                </li>
                            )}
                        )}
                    />
                </div>

                <div >
                    <ScrollAreaInfo text={'perc_sequences'} info={
                        percSequences.map((percSequences:any) => {
                            return (
                                <li className='hover:text-blue-500  mt-4 cursor-default'>
                                    {percSequences.perc_sequences}
                                </li>
                            )}
                        )}
                    />
                </div>

                <div >
                    <ScrollAreaInfo text={'num_sequences_total'} info={
                        numSequencesTotal.map((numSequencesTotal:any) => {
                            return (
                                <li className='hover:text-blue-500  mt-4 cursor-default'>
                                    {numSequencesTotal.num_sequences_total}
                                </li>
                            )})}
                        />
                </div>

            </div>
        </div>
    )
}
