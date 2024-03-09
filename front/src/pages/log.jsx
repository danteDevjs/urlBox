import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { create, verifyAccount } from "../services/login.services";
import { Modal } from "../components/atoms/modal";
import { IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp} from "@tabler/icons-react";

export default function Login(){

    
    const [msj, setMsj] = useState('');
    const [color, setColor] = useState('');
    
    const navigate = useNavigate();


    const [btnMsj, setBtnMjs] = useState("Crear Cuenta");


    const [estilos, setEstilos] =useState({
      transform: `translate(100%)`, 
      transition: '.3s linear', 
    });    



    async function initSession(e, username, password){
      e.preventDefault();

      try{

        const res = await verifyAccount(username, password);
        console.log(res);
        navigate("/home/inicio");
                      
      }catch(err){
        setColor('red');
        if(err.response.status === 404 || err.response.status === 400){
            setMsj(err.response.data.msg);
            setTimeout(()=>setMsj(''), 2000);
            return
        }
          setMsj('Error, intentelo mas tarde');
          setTimeout(()=>setMsj(''), 2000);
      }
    }


    async function createAccount(e, username, password){
      e.preventDefault();
      try{
        const data = {
          username,
          password
        }
         const res = await create(data);
         setColor('blue');
         if(res.status ===  201){
            setMsj("El usuario se ha creado correactamente");
            setTimeout(()=>setMsj(''), 2000);
            return
         }

        console.log(res);

      }catch(err){
        console.log(err);
        setColor('red');      
        if(err.response.status ===  409){
          setMsj("El usuario ya existe en la base de datos");
          setTimeout(()=>setMsj(''), 2000);
          return
        }
        setMsj("Problemas en la creacion, intentelo mas tarde");
          setTimeout(()=>setMsj(''), 2000);
          return
      }
     
    }


    return (<div className=' w-full h-screen grid place-items-center bg-sky-950 '>

            {msj && <Modal msj={msj} color={color}/>}

              <div className='text-black border  flex   text-white h-[540px] min-w-[500px] w-[36%] flex relative shadow-lg rounded-lg bg-white'>

             <SetLogin textBtn='INICIAR SESIÓN' handleSubmit={initSession}/>
                
             <SetLogin textBtn='CREAR CUENTA' handleSubmit={createAccount}/>

                <div className='p-5 grid place-content-center shadow-2xl w-1/2  absolute h-full  bg-[url(./assets/pexels-artem-mizyuk-1739811.jpg)] bg-center bg-cover rounded-lg' style={estilos}>
                 
                     <button className="border w-52 h-9 rounded-lg backdrop-blur-xl hover:scale-105 transition-transform" onClick={(e)=>{
                        e.preventDefault();
                     
                        if(estilos.transform === 'translate(100%)'){
                           
                            setEstilos({
                            
                              ...estilos,
                              transform: `translate(0%)`, 
                            });

                            setBtnMjs("Iniciar Sesion");
                            return;
                          
                        }

                        setEstilos({
                        
                          ...estilos,
                          transform: `translate(100%)`, 
                        });
                        setBtnMjs("Crear Cuenta");
                     }}>
                        {btnMsj}
                    
                     </button>

                     <div className="mt-10">
                          <ul className="flex gap-5 justify-center">
                            <li className="backdrop-blur-sm">
                              <IconBrandInstagram size={35}/>
                            </li>
                            <li className="backdrop-blur-sm">
                              <IconBrandWhatsapp size={35}/>
                            </li>
                            <li className="backdrop-blur-sm">
                              <IconBrandLinkedin size={35}/>
                            </li>
                          </ul>
                      </div>
                </div>
              </div>
            </div>);
  }



  function SetLogin({textBtn, handleSubmit}){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return(
      <form className='p-5  grid grid-cols-1 grid-rows-3 items-center shadow-2xl backdrop-blur-lg  w-1/2  text-black rounded-l-lg' onSubmit={(e)=>{
          handleSubmit(e, username, password);
          }}>  
            <div>
              <h1 className='text-[30px] text-center font-bold border-b'>Url Box</h1>
              <h2 className='text-center m-0 p-0'>welcome</h2>
            </div>
          <div className=''>

            <label className='flex flex-col w-full'>
              <span className='text-lg'>Username</span>
              <input type="text" required autoFocus className='border border-gray-400  h-9 rounded-lg ' onChange={(e)=>setUsername(e.target.value)}/>
            </label>

            <label className='flex flex-col w-full'>
              <span className='text-lg'>Password</span>
              <input type="password" required className='border border-gray-400  h-9 rounded-lg '  onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            
          </div>

          <div className='flex flex-col items-center'>
            <button type='submit' className='w-52 h-9 rounded-lg bg-cyan-900 text-white hover:bg-cyan-800 transition-colors' >{textBtn}</button>
          </div>

      </form>
  
    );
  }