export function getCookie(nombre){

    let cookies = document.cookie.split(";");

    for(let i = 0; i<cookies.length; i++){
     
        if(cookies[i].split("=")[0] === nombre){

         
            return cookies[i].substring(nombre.length + 1);
        }
    }
    return null;
}