export function Modal({msj, color}){
    return(

        <div className="absolute w-96 rounded-xl h-10  right-0 top-0 m-10 text-white grid place-content-center" style={{backgroundColor: color}}>
            <p className="font-semibold tracking-wide">{msj}</p>
        </div>
    );
}