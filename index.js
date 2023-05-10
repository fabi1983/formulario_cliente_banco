/* document.getElementById("form_comentario") */
/* console.log(document.getElementById("form_comentario")) */


  let formulario = document.getElementById("form_comentario")
  formulario.addEventListener("submit",(event)=>{
  event.preventDefault()
  
   let nombre = document.getElementById("name").value
   console.log(nombre)

   let apellido = document.getElementById("apellido").value
   console.log(apellido)

   let email = document.getElementById("email").value
   console.log(email)

   let opciones = document.getElementById("opciones").value
   console.log(opciones)

   let comentario = document.getElementById("comentario").value
   console.log(comentario)


   if(nombre == "" || apellido=="" || email == "" || opciones == "Opciones" || comentario ==""){
        alert("todos los campos son requeridos")

   }else{
        alert(`DE: ${nombre} ${apellido} (${email})
         -ASUNTO: ${opciones}.
         -MENSAJE: 
         ${comentario}
   `)

   }

  })


