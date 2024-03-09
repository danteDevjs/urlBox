import { IconX, IconPencil, IconBox} from "@tabler/icons-react";
  
export function Card({title, descripcion, idPage, link, categoria, deletePage, updatePage}){
    return(
      
      <a  target="_blank" href={link} className='text-white border border-gray-500 relative  w-[350px] h-[165px] min-w-[300px] rounded-md flex flex-col items-center hover:scale-110 transition-transform  cursor-pointer backdrop-blur-lg bg-slate-900'>
          
          <button className='absolute right-0 top-0 m-1  hover:text-red-400W text-white hover:text-red-500' onClick={(e)=>{
              e.preventDefault()
              deletePage(idPage);
            }}>
             <IconX size={18} />
          </button>

      <span className="mt-4 mb-2">
        <IconBox size={17}/>
      </span>
      <h1 className='font-bold text-xl mt-2'>{title}</h1>
      <span className='text-lg text-center mt-2 p-2 '>
        {descripcion}
      </span>

      <button className='absolute left-0 top-0 m-1  hover:text-red-400W hover:text-blue-500' onClick={(e)=>{
        
        e.preventDefault()
        updatePage(idPage, title, descripcion, link, categoria);

        }} >
           <IconPencil size={18} />
      </button>

    </a>
    );
  }

  