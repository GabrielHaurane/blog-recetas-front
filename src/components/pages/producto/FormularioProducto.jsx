import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { buscarRecetaAPI, crearRecetaAPI, editarRecetaAPI } from "../../../helpers/queries";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


const FormularioReceta = ({titulo, creandoReceta}) => {
    const {
        register,
        handleSubmit,
        formState:{errors},
        reset,
        setValue,
    } =useForm();
    const {id} = useParams();
    const navegacion = useNavigate();
    useEffect(()=>{
        if (!creandoReceta) {
            cargarReceta()
        }
    },[])
    const cargarReceta = async () => {
        const respuesta = await buscarRecetaAPI(id);
        if (respuesta.status === 200) {
            const recetaEncontrado = await respuesta.json()
            setValue('nombreReceta', recetaEncontrado.nombreReceta)
            setValue('imagen', recetaEncontrado.imagen)
            setValue('categoria', recetaEncontrado.categoria)
            setValue('ingredientes',recetaEncontrado.ingredientes)
            setValue('descripcion_breve', recetaEncontrado.descripcion_breve)
            setValue('descripcion', recetaEncontrado.descripcion)
            
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `no se pudo obtener la receta, intente mas tarde`,
                
              });
        }
    }
    const onSubmit = async (receta) => {
        if (creandoReceta) {
            console.log(receta);
            const respuesta = await crearRecetaAPI(receta);
            if(respuesta.status === 201){
                //mostrar un cartel afirmativo al usuario
                console.log('se creo la receta con exito')
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `se creo correctamente la receta ${receta.nombreReceta}`,
                  showConfirmButton: false,
                  timer: 2000
                  
                });
                reset();
              }else{
                //mostrar un cartel de error al usuario
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: `no se pudo crear la receta ${receta.nombreReceta}, intente mas tarde`,
                  
                })
            }
        } else {
            const respuesta = await editarRecetaAPI(receta, id)
            if (respuesta.status === 200) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `se edito correctamente la receta ${receta.nombreReceta} correctamente`,
                  showConfirmButton: false,
                  timer: 2000
                });
                // redireccion al admin
                navegacion('/administrador')
              } else {
                Swal.fire({
                  position: "top-end",
                  icon: "error",
                  title: ` la receta ${receta.nombreReceta}, no fue editado correctamente, intente en unos minutos`,
        
                });
              }
        }
    }
    return (
        <section className="container mainSection">
            <h1 className="display-4 mt-5">{titulo}</h1>
            <hr />
            <Form className="my-4" onSubmit={handleSubmit(onSubmit)}> 
                <Form.Group className="mb-3" controlId="formNombreReceta">
            <Form.Label>Receta*</Form.Label>
            <Form.Control
            type="text"
            placeholder="Ej: Panqueque"
            {...register("nombreReceta",{
                required: "El nombre de la receta es un dato obligatorio",
                minLength:{
                    value: 3,
                    message: "Debe ingresar como minimo 3 caracteres"
                },
                maxLength:{
                    value: 70,
                    message: "Debe ingresar como maximo 70 caracteres"
                },
            })}
            ></Form.Control>
                <Form.Text className="text-danger">
                    {errors.nombreReceta?.message}
                </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://images.pexels.com/photos/5840088/pexels-photo-5840088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            {...register("imagen", {
              required: "La url de la imagen debe ser obligatoria",
              pattern: {
                value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                message:
                  "Debe ingresar una url de imagen valida, los formatos admitidos son (jpg|jpeg|gif|png) ",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoría*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "Debe seleccionar una categoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Desayuno">Desayuno</option>
            <option value="Almuerzo">Almuerzo</option>
            <option value="Merienda">Merienda</option>
            <option value="Cena">Cena</option>
            <option value="Postres">Postres</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formIngredientes">
          <Form.Label>Ingredientes*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: 1 huevo."
            as="textarea"
            {...register("ingredientes", {
              required: "Los ingredientes son ogligatorios",
              minLength: {
                value: 5,
                message:
                  "Debe ingresar como minimo 5 caracteres",
              },
              maxLength: {
                value: 500,
                message:
                  "Debe ingresar como maximo 500 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.ingredientes?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcionBreve">
          <Form.Label>Descripción Breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Una taza de café suave y aromático."
            as="textarea"
            {...register("descripcion_breve", {
              required: "La descripcion breve es obligatoria",
              minLength: {
                value: 10,
                message:
                  "Debe ingresar como minimo una descripcion de 10 caracteres",
              },
              maxLength: {
                value: 70,
                message:
                  "Debe ingresar como maximo una descripcion de 70 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion_breve?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripción*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Una taza de café suave y aromático."
            as="textarea"
            {...register("descripcion", {
              required: "La descripcion es ogligatoria",
              minLength: {
                value: 30,
                message:
                  "Debe ingresar como minimo una descripcion de 30 caracteres",
              },
              maxLength: {
                value: 2000,
                message:
                  "Debe ingresar como maximo una descripcion de 2000 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>
        <Button type="submit" style={{backgroundColor: 'rgb(242, 169, 182)'}} className="text-dark">Guardar</Button>
            </Form>
        </section>
    );
};

export default FormularioReceta;