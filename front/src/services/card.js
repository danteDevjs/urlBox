import axios from "axios";
export async function listCard(token){
    return await axios.get(`http://localhost:3002/api/v1/pages/list`, {
        headers: {
            Authorization: `bearer ${token}`
        }
    });
}

export async function saveCard(dataPage, token, id){
    return await axios.post(`http://localhost:3002/api/v1/pages/save/${id}`, dataPage, {
        headers: {
            Authorization: `bearer ${token}`
        }
    });
}

export async function deleteCard(idPage, token){

    return await axios.get(`http://localhost:3002/api/v1/pages/delete/${idPage}`, {
        headers: {
            Authorization: `bearer ${token}`
        }
    });

}