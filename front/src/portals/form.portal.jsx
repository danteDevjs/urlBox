import ReactDOM from 'react-dom';
import {IconX} from "@tabler/icons-react";

export function Form({handleForm, setNombre,  setDescripcion, setLink, setCategoria, handleClickF,
     namePage, desPage, link, categoria, setIdPage}){


    return ( ReactDOM.createPortal(<div className='z-10 w-full h-screen absolute bg-gray-900 text-white grid place-content-center bg-opacity-80 overflow-hidden'>

                <form className='flex flex-col border rounded-lg  w-72 sm:w-96 p-7 relative bg-slate-900 bg-opacity-100' onSubmit={(e)=>{

                    e.preventDefault();
                    handleClickF();

                }}>

                        <button className='absolute right-0 top-0 m-1  hover:text-red-400 hover:text-red-500' onClick={()=> {
                            handleForm();
                            setNombre('');  
                            setDescripcion(''); 
                            setLink(''); 
                            setCategoria('escoger');
                            setIdPage(null);
                        }}>
                            <IconX size={16}/>
                        </button>   

                    <h1 className='text-2xl font-extrabold mb-3 tracking-wide text-center border-b-slate-500'>Url Box</h1>

                    <label className='flex flex-col'>
                        <span className='mb-1 mt-3'>Nombre</span>
                        <input defaultValue={namePage} name='nombre' type='text' className='pl-1 h-8 rounded-md text-black' required autoFocus onChange={(e)=>setNombre(e.target.value)}/>
                    </label>


                    <label className='flex flex-col'>
                        <span className='mb-1 mt-3'>Url</span>
                        <input defaultValue={link} name='url' type='url ' className='pl-1 h-8 rounded-md text-black' required onChange={(e)=>setLink(e.target.value)}/>
                    </label>

                    <label className='flex flex-col'>
                        <span className='mb-1 mt-3'>Descripcion</span>
                        <input defaultValue={desPage} name='descripcion'  type="text" className='pl-1 h-8 rounded-md text-black' maxLength={80} required onChange={(e)=>setDescripcion(e.target.value)}/>
                    </label>

                    <label className='flex flex-col'>
                        <span className='mb-1 mt-3'>Categoria</span>

                        <select defaultValue={categoria} className='h-8 rounded-md text-black pl-1' required onChange={(e)=>setCategoria(e.target.value)}>
                            <option hidden>escoger</option>
                            <option value={'desarrollo'}>desarrollo</option>
                            <option value={"diseño"}>diseño</option>
                            <option value={"arquitectura"}>arquitectura</option>
                            <option value={"documentacion"}>documentación</option>
                        </select>
                    </label>

                    <button type='submit' className='bg-cyan-700 hover:bg-cyan-600 transition-colors duration-500 ease-out opacity-95 h-8 mt-7 w-full rounded-md mb-3'>Guardar</button>
                </form>
            </div>,
             document.getElementById("modalForm"))
    )
    
    }