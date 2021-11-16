
var allDatos=[];

  function Guardar(){
      //Agregamos valores del array
     var datos=[];
     datos.push(nombre=document.getElementById("Nombre").value);
     datos.push(cedula=document.getElementById("Cedula").value);
     datos.push(barrio=document.getElementById("Barrio").value);
     datos.push(ciudad=document.getElementById("Ciudad").value);
     datos.push(departamento=document.getElementById("Departamento").value);
     datos.push(direccion=document.getElementById("Direccion").value);
     datos.push(telefonoM=document.getElementById("TelefonoM").value);
     datos.push(fecha=document.getElementById("Fecha").value);
     datos.push(correo=document.getElementById("Correo").value);
     datos.push(comment=document.getElementById("Comment").value);
     datos.push(titulo=document.getElementById("Titulo").value);
     datos.push(ubicacion=document.getElementById("Ubicacion").value);
     datos.push(duracion=document.getElementById("Duracion").value);
     datos.push(titulo1=document.getElementById("Titulo1").value);
     datos.push(ubicacion1=document.getElementById("Ubicacion1").value);
     datos.push(duracion1=document.getElementById("Duracion1").value);
     datos.push(titulo2=document.getElementById("Titulo2").value);
     datos.push(ubicacio2=document.getElementById("Ubicacion2").value);
     datos.push(duracion2=document.getElementById("Duracion2").value);
     datos.push(empresa=document.getElementById("Empresa").value);
     datos.push(cargo=document.getElementById("Cargo").value);
     datos.push(duracionn=document.getElementById("Duracionn").value);
     datos.push(empresa1=document.getElementById("Empresa1").value);
     datos.push(cargo1=document.getElementById("Cargo1").value);
     datos.push(duracionn1=document.getElementById("Duracionn1").value);
     datos.push(empresa2=document.getElementById("Empresa2").value);
     datos.push(cargo2=document.getElementById("Cargo2").value);
     datos.push(duracionn2=document.getElementById("Duracionn2").value);
     datos.push(nombree=document.getElementById("Nombree").value);
     datos.push(cargoo=document.getElementById("Cargoo").value);
     datos.push(celular=document.getElementById("Celular").value);
     datos.push(nombree1=document.getElementById("Nombree1").value);
     datos.push(cargoo1=document.getElementById("Cargoo1").value);
     datos.push(celular1=document.getElementById("Celular1").value);
     datos.push(nombreee=document.getElementById("Nombreee").value);
     datos.push(cargooo=document.getElementById("Cargooo").value);
     datos.push(celularr=document.getElementById("Celularr").value);
     datos.push(nombreee1=document.getElementById("Nombreee1").value);
     datos.push(cargooo1=document.getElementById("Cargooo1").value);
     datos.push(celularr1=document.getElementById("Celularr1").value);
     
     
  //almaceno el array dentro de un array all datos
  allDatos.push(datos);
  //convertimos el array en json
  arjson= JSON.stringify(allDatos);
  //almacenamos los datos en localStorage
  localStorage.setItem("frm",arjson);
  }
 
 function Mostrar(){
     window.open("index_1.html");
 }
 
 function Reiniciar(){
     localStorage.clear();
 }
