import { DataTable } from './Form/DataTable'
import './styles/global.css'

export function App() {

  return (
    <div className="App">
      <h1 className='
        text-[14px] text-center w-[42vw] m-auto p-4 pb-0 mb-6 font-semibold border-b-2
        sm:text-[28px]
        lg:text-[38px]
        2xl:text-[58px]
        border-sky-500'
      >
        World Covid Cases
      </h1>
      <DataTable />
    </div>
  )
}