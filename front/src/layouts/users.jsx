import { IconBox, IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./estilos.css";

export function Users(){

  const [scale, setScale] = useState(400);

    const navigate = useNavigate();

    return(
        <main className='h-screen flex  flex-col items-center  lg:h-[calc(100%-80px)]'>
          <div className="flex flex-col items-center mt-10">
            <h1 className="text-white text-5xl p-5">Bienvenido a url box</h1>
            <h1 className="text-white text-lg">Guarda tus primeras paginas</h1>
          </div>


    <div className="mt-20 cursor-pointer" onClick={()=>navigate('/home/pages')}>
    <div className="espacio3D">
          <div className="cubo3D">
            <div className="base"></div>
            <aside className="cara cara1">UrlBox</aside>
            <aside className="cara cara2"></aside>
            <aside className="cara cara3"></aside>
            <aside className="cara cara4"></aside>
            <aside className="cara cara5"></aside>
            <aside className="cara cara6"></aside>
          </div>
        </div>

    </div>

          <div className="absolute bottom-0 m-10">
              <h1 className="text-white text-lg p-3">sigueme en mis redes cociales</h1>
              <ul className="flex gap-5 justify-center">
                  <li className="backdrop-blur-sm">
                      <IconBrandInstagram size={35} color="white"/>
                  </li>
                  <li className="backdrop-blur-sm">
                      <IconBrandWhatsapp size={35} color="white"/>
                  </li>
                  <li className="backdrop-blur-sm">
                      <IconBrandLinkedin size={35} color="white"/>
                  </li>
                </ul>
          </div>
        </main>
    );
}


//<div className="cursor-pointer" onClick={()=> navigate("/home/pages")}>
//<IconBox size={scale} color="white" stroke={1}/>
//</div>