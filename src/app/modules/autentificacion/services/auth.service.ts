import { Injectable } from '@angular/core';
import{AngularFireAuth} from "@angular/fire/compat/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor (public auth: AngularFireAuth){}

// funcion para registro
registrar(email: string, password:string){
  return this.auth.signInWithEmailandPassword)(email,password);
}
//inicio sesion
  IniciarSesion (email:string,password:string){
    return this.auth.signInWithEmailAndPassword(email,password);
  }
}
