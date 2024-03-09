import { IconBox } from "@tabler/icons-react";
import Cookies from "js-cookie";
import { NavLink, useNavigate } from "react-router-dom";


export function Nav(){
  const navigate = useNavigate();
  return(
    <header  className='w-screen mt-5 flex justify-center items-center hidden lg:flex'>
    <nav className='w-full h-20   text-white flex justify-between items-center'>
      <div className='ml-28 flex gap-1 items-center font-extrabold text-lg'>
        <IconBox size={30}/>
        <span>URLBOX</span>
      </div>

      <ul className='flex gap-10 mr-28 font-semibold text-base text-gray-400'>
      <li className='hover:text-white cursor-pointer'><NavLink to={'http://localhost:5173/home/inicio'}>Inicio</NavLink></li>
        <li className='hover:text-white cursor-pointer'><NavLink to={'http://localhost:5173/home/pages'}>Tarjetas</NavLink></li>
        <li className='hover:text-white cursor-pointer'><a onClick={()=>{
          Cookies.remove("bearerToken");
          navigate("/");
        }}>Salir</a></li>
      </ul>

    </nav>
    </header>
  );
}