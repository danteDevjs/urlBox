import { MiniAside } from "../components/btnera/botonera";
import { Card } from "../components/cards/card";
import { Form } from "../portals/form.portal";
import { useEffect, useState } from "react";
import { getCookie } from "../services/getCookie";
import { deleteCard, listCard, saveCard } from "../services/card";


export function Pages(){
    
    const [form, setForm] = useState(false);
    const [card, setCard] = useState([]);
  
  
    //data card
  
    const [namePage, setNamePage] = useState('');
    const [desPage, setDesPage] = useState('');
    const [link, setLink] = useState('');
    const [categoria, setCategoria] = useState('');
    const [idPage, setIdPage] = useState(null);
      //setErrores
  
    const [msgError, setMsgError] = useState('');
  
      //funcion crear
    
      async function handleClickF(){
    
        try{
  
          let objetData ={
  
            namePage: namePage, 
            descriptionPage: desPage,
            linkPage: link,
            category: categoria
          }
          
          console.log(objetData);
        
          const token = getCookie('bearerToken');
  
          const response = await saveCard(objetData, token, idPage);
          
      
          listData();
          setForm(false);
  
          setIdPage(null);
          setNamePage('');
          setDesPage('');
          setLink('');
          setCategoria('escoger');
  
        }catch(err){
  
          console.log(err);
        }
        
      }
  
  
       //listar cartas
       async function listData(setMsgError){
        try{
    
          const token = getCookie('bearerToken');
          const res = await listCard(token);
          
          if(res.status === 200){
             const {data} = res;
           
              setCard(data.data);
          }
          
        }catch(err){
    
          if(err.request.status === 400){
            setMsgError("Sin datos para mostrar");
          }
          
          setMsgError("Error, intentelo mas tarde");
          
          console.log(err);
          return;
        }
    
      }
  
  
      //funcion para borrar
      async function deletePage(idPage){
  
         try{
  
          
          const token = getCookie('bearerToken');
  
       
          const res = await deleteCard(idPage, token);
       
          listData();
     
        
        }catch(err){
  
          console.log("ERROR");
          console.log(err);
  
        }
      
      }
  
  
      //boton que activa el form de actualizacion
      function updatePage(idPage, title, descripcion, link, categoria){
  
        setForm(true);
        setNamePage(title);
        setDesPage(descripcion);
        setLink(link);
        setCategoria(categoria);
        setIdPage(idPage);
      
      }
  
  
      //display de form 
     function handleForm(){
      setForm(!form);
     }
  
  
     //carga de datos
     useEffect(()=>{
    
      listData(setMsgError);
  
    }, []);
  
  
      //FILTRAR
      function filterCard(e){
  
        let cardPage  = card;
        
        if(!localStorage.getItem("paginas")){      
          localStorage.setItem("paginas", JSON.stringify(cardPage));
        }
  
        const dataPage = JSON.parse(localStorage.getItem("paginas"))
        .filter(data => data.name_page.toLowerCase().startsWith(e.target.value.toLowerCase()));
      
        setCard(dataPage);
    
      }
    return(
        <>
             {form && <Form handleForm={handleForm}
  
  setNombre = {setNamePage}
  setDescripcion = {setDesPage}
  setLink = {setLink}
  setCategoria = {setCategoria}
  handleClickF={handleClickF}
  
  
  
  namePage = {namePage}
  desPage = {desPage}
  link = {link}
  categoria = {categoria}
  
  setIdPage = {setIdPage}  
  
  />}
   {/* aqui empieza el main */}
  
   <main className='h-screen flex  flex-col items-center  lg:h-[calc(100%-80px)] '>
   {/*botonera */}
  
     <MiniAside handleForm={handleForm} filterCard = {filterCard}/>
   
   {/*contenido princiapal*/}
  
   <div className='w-full h-auto overflow-auto   justify-items-center relative   max-w-[1200px] p-6 gap-10 py-12 flex flex-wrap justify-center'>
  
          
           { card.length > 0 ?
             card.map((data, id) =>{
               { 
           
  
                 return  <Card key={id} title={data.name_page}
                  descripcion={data.description_page} idPage ={data.id_page} 
                  link = {data.link_page} cetegoria={data.category} deletePage = {deletePage} updatePage = {updatePage}/>
               }
             }): <h1 className="text-2xl text-white">{msgError}</h1>
           } 
  
   </div>    
   </main>
        </>
  
    );
  } 