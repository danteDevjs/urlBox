import { IconPlus, IconCheck, IconX} from "@tabler/icons-react";
import { Modal } from "../atoms/modal";
export function MiniAside({handleForm, filterCard}){
    return(
      <div className='w-full h-[10%] flex flex-col items-center sm:justify-between sm:flex-row  max-w-[1200px] mt-9 '>
         
      <button onClick={()=>{
        handleForm();
      }} type="button"  className="sm:ml-10 rounded-md flex items-center justify-center leading-3 w-52 text-center  sm:py-3 text-[13px] h-9 font-medium text-white  border  border-gray-500  hover:bg-slate-700  border-gray-600 ">
         <IconPlus color='white' size={18}/>
      </button>


        <div className="rounded-full border w-10 h-10 relative  grid place-content-center">
          <IconCheck size={20} color="white"/>
        
        </div>
        <div className="rounded-full border w-10 h-10 relative  grid place-content-center">
          <IconX size={20} color="white"/>
        
        </div>


      <input className='sm:mr-10 rounded-md bg-transparent border h-9  border-gray-500 w-52  shadow-sm text-white text-center' placeholder='Buscar' onInput={(e)=>{
        filterCard(e);
      }} />


    </div>);
  }