campos=JSON.parse(localStorage.getItem("frm"));
for (var i = 0; campos.length; i++) {
    document.getElementById("nombre").innerHTML= campos[i][0];
    document.getElementById("cedula").innerHTML=" C. C "+ campos[i][1]+" de "+campos[i][3];
    document.getElementById("direccion").innerHTML=" DIRECCIÓN RESIDENCIA: "+ campos[i][5];
    document.getElementById("barrio").innerHTML="Barrio: " + campos[i][2]+","+campos[i][3]+"-"+campos[i][4];
    document.getElementById("telefonoM").innerHTML="Teléfono Celular: " + campos[i][6];
    document.getElementById("fecha").innerHTML="Fecha de nacimiento: "+ campos[i][7];
    document.getElementById("correo").innerHTML="Correo:" + campos[i][8];
    document.getElementById("perfil").innerHTML=campos[i][9];
    document.getElementById("titulo").innerHTML=campos[i][11];
    document.getElementById("ubicacion").innerHTML=campos[i][10];
    document.getElementById("duracion").innerHTML=campos[i][12];
    document.getElementById("titulo1").innerHTML=campos[i][14];
    document.getElementById("ubicacion1").innerHTML=campos[i][13];
    document.getElementById("duracion1").innerHTML=campos[i][15];
    document.getElementById("titulo2").innerHTML=campos[i][17];
    document.getElementById("ubicacion2").innerHTML=campos[i][16];
    document.getElementById("duracion2").innerHTML=campos[i][18];
    document.getElementById("empresa").innerHTML=campos[i][19];
    document.getElementById("cargo").innerHTML=campos[i][20];
    document.getElementById("duracionn").innerHTML=campos[i][21];
    document.getElementById("empresa1").innerHTML=campos[i][22];
    document.getElementById("cargo1").innerHTML=campos[i][23];
    document.getElementById("duracionn1").innerHTML=campos[i][24];
    document.getElementById("empresa2").innerHTML=campos[i][25];
    document.getElementById("cargo2").innerHTML=campos[i][26];
    document.getElementById("duracionn2").innerHTML=campos[i][27];
    document.getElementById("nombree").innerHTML= campos[i][28];
    document.getElementById("cargoo").innerHTML= campos[i][29];
    document.getElementById("celular").innerHTML= campos[i][30];
    document.getElementById("nombree1").innerHTML= campos[i][31];
    document.getElementById("cargoo1").innerHTML= campos[i][32];
    document.getElementById("celular1").innerHTML= campos[i][33];
    document.getElementById("nombreee").innerHTML= campos[i][34];
    document.getElementById("cargooo").innerHTML= campos[i][35];
    document.getElementById("celularr").innerHTML= campos[i][36];
    document.getElementById("nombreee1").innerHTML= campos[i][37];
    document.getElementById("cargooo1").innerHTML= campos[i][38];
    document.getElementById("celularr1").innerHTML= campos[i][39];
    document.getElementById("final").innerHTML= campos[i][0];
    document.getElementById("final1").innerHTML= campos[i][3]+" "+campos[i][4];
    }
             

