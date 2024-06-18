import { Injectable } from '@angular/core';
import{AngularFireAuth} from "@angular/fire/compat/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor (public auth: AngularFireAuth){}

// funcion para registro
registrar(email: string, password:string){
  return this.auth.signInWithEmailAndPassword(email,password);
}
//inicio sesion
  IniciarSesion (email:string,password:string){
    return this.auth.signInWithEmailAndPassword(email,password);
  }

  //funcion para cerrar sesion
  CerrarSesion(){
    //devuelve una promesa vacia -> quita token
    return this.auth.signOut();

  }

    //funcion para tomar el uid
    async obtenerUid (){
      //Nos va a generar una promesa y la constante la va a capturar
      const user = await this.auth.currentUser;
      //si es usuario que se registra no respeta la estructura de la interfaz o si tuvo problemas para el registro -> ej:mal internet
      if(user==null){
        return null;

      } else {
        return user.uid;
      }
    }

}
