const URLReceta = import.meta.env.VITE_API_RECETA;

// GET
export const leerRecetaAPI = async () => {
    try {
        const respuesta = await fetch(URLReceta)
        return respuesta
    } catch (error) {
        console.error(error)
        return false;
    }
}
export const buscarRecetaAPI = async(id)=>{
    try {
        const respuesta = await fetch(URLReceta+'/'+id)
        return respuesta
    } catch (error) {
        return false;
    }
}
// PUT O PATH
export const editarRecetaAPI = async (recetaEditado, id) => {
    try {
        const respuesta = await fetch(URLReceta+'/'+id,{
            method: "PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(recetaEditado)
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return false
    }
}
// POST 
export const crearRecetaAPI = async (recetaNuevo) => {
    try {
        const respuesta = await fetch(URLReceta,{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(recetaNuevo)
        })
        console.log(respuesta);
        return respuesta;
    } catch (error) {
        console.error(error)
        return false;
    }
}
// DELETE
export const borrarRecetaAPI = async (id) => {
    try {
        const respuesta = await fetch(URLReceta+'/'+id,{
            method:"DELETE"
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return false
    }
}
// LOGIN
const userAdmin = {
    email: "admin@admin.com",
    password: "admin123"
}

export const login = (usuario)=>{
    if (usuario.email === userAdmin.email && usuario.password === userAdmin.password) {
        sessionStorage.setItem('userKey', JSON.stringify(userAdmin.email));
        return true
    } else {
        return false
    }
}