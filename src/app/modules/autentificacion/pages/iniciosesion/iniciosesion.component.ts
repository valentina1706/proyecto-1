import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  hide = true;
  // ############################# LOCAL
  // Definimos colección local de usuarios
  public coleccionUsuariosLocales: Usuario[];

  constructor(){
    this.coleccionUsuariosLocales = [
      {
        uid: '',
        nombre: 'Santiago',
        apellido: 'Nuñez',
        email: 'santinuñez@gmail.com',
        rol: 'admin',
        password: '123456'
      },
      {
        uid: '',
        nombre: 'Juan',
        apellido: 'Perez',
        email: 'juanperez@gmail.com',
        rol: 'vis',
        password: 'abc123'
      },
      {
        uid: '',
        nombre: 'Thalia',
        apellido: 'Rosales',
        email: 'thaliarosales@gmail.com',
        rol: 'vis',
        password: 'abcdef'
      }
    ]
  }

  // ############################# FIN LOCAL

  // ############################# INGRESADO
  // Definimos la interfaz de usuario
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }

  // Función para iniciar sesión
  iniciarSesion(){
    // Recibe la información ingresada desde el navegador
    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password
    }

    // Repetitiva para recorrer la colección de usuarios locales
    for(let i = 0; i < this.coleccionUsuariosLocales.length; i++){
      // usuarioLocal corresponde a esa posición en específico
      const usuarioLocal = this.coleccionUsuariosLocales[i];

      // Condicional para verificar la existencia del usuario ingresado
      if(usuarioLocal.nombre === credenciales.nombre && 
        usuarioLocal.apellido === credenciales.apellido && 
        usuarioLocal.email === credenciales.email && 
        usuarioLocal.rol === credenciales.rol && 
        usuarioLocal.password === credenciales.password){
          // Notificamos al usuario que pudo ingresar
          alert("¡Ingresaste con éxito! :)");
          // Paramos a la función
          break;
        } else {
          alert("Ocurrió un problema al iniciar sesión :(");
          break;
        }
    }
    this.limpiarInputs();
  }
  // ############################# FIN INGRESADO

  limpiarInputs(){
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
