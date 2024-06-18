import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
//importamos servicio de autentificacion
import { AuthService } from '../../services/auth.service';

import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  // input de la contraseña para ver los cáracteres o no
  hide = true;
  // importaciones de interfaz "usuarios"

  // IMPORTAR LA INTERFAZ DE USUARIO -> INICIALIZAR
  usuarios: Usuario = {
    uid: '', // -> inicializamos con comillas simples porque es tipo STRING
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }

  // CREAMOS COLECCIÓN DE USUARIOS, TIPO 'USUARIO' PARA ARRAYS
  coleccionUsuarios: Usuario[] = [];
  //fin importaciones

  constructor (
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public servicioRutas: Router
  ) {}

  // FUNCIÓN PARA EL REGISTRO DE NUEVOS USUARIOS
  async registrar(){
    // constante credenciales va a resguardar la información que ingrese el usuario

    //esto era el registro local
    /*const credenciales = {
      uid: this.usuarios.uid, // definimos al atributo de la interfaz con una variable local
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password
    } */

    // registro con servicio
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }
    const res = await this.servicioAuth.registrar(credenciales.email, credenciales.password)
    //el metodo then es una promesa
    .then(res =>{
      alert("se pudo registrar con exito :)");
      this.servicioRutas.navigate([ '/inicio']);
    })
    //el metodo catch captura una falla y la vuelve un error cuando la promesa salga mal
    .catch(error => {
      alert("hubo un problema al registrar un nuevo usuario :( \n"+error)
    })

    // Enviamos la nueva información como un NUEVO OBJETO a la colección de usuarios
    /*this.coleccionUsuarios.push(credenciales)*/

    // Notificamos el éxito al registrarse para el usuario
    alert("¡Te registraste con éxito! :)");

    // Llamamos a la función limpiarInputs() para ejecutarla
    this.limpiarInputs();

    // Mostramos credenciales por consola
    // console.log(credenciales);
    // console.log(this.coleccionUsuarios);
  }

  async guardarUsuario (){
    this.servicioFirestore.agregarUsuario(this.usuarios,this.usuarios.uid)
    .then(res => {
      console.log(this.usuarios);
    })
    .catch(err => {
      console.log('error => ', err)
    })
  

  const uid = await this.servicioAuth.obtenerUid();

  this.usuarios.uid =uid;

    this.guardarUsuario();

    this.limpiarInputs();

  }
  // Función para vaciar los inputs del formulario
  limpiarInputs(){
    /*
    En constante "inputs" llamamos a los atributos y los inicializamos 
    como vacíos (string = '', number = 0)
    */
    const inputs = {
      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      apellido: this.usuarios.apellido = '',
      email: this.usuarios.email = '',
      rol: this.usuarios.rol = '',
      password: this.usuarios.password = ''
    }
  }
}
