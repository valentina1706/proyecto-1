import { Injectable } from '@angular/core';
//cloud firestore ->accedemos a las colecciones
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {Usuario} from 'src/app/models/usuario'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  //definimos de forma privada la coleccion de usuarios para que no sea accesible en toda la aplicación. Lo mdefinimos como una coleccion de firestore que respete la estructura de nuestra interfaz 'Usuario'
private usuariosCollection: AngularFirestoreCollection<Usuario>
  constructor(private database: AngularFirestore) {
    //usuariosCollection va a definir la nueva coleccion de Firestore que respete la estructura de nuestra interfaz 'usuario'
    this.usuariosCollection= this.database.collection<Usuario>('usuarios');
  }
  agregarUsuario(usuario: Usuario, id: string){

    //creamos una nueva promesa con los metodos:
    /*resolve: promesa resuelta -> funciono correctamente
    reject: promesa rechazada -> ocurrio una falla*/
    return new Promise (async (resolve, reject) => {
      //bloque try encapsula la logica resuelta
      try {
        usuario.uid =id;

        const resultado = await this.usuariosCollection.doc(id).set(usuario);
        
        resolve (resultado);

        //bloque catch encapsula la logica rechazada
      } catch (error) {

        reject (error);
      }
    })
  }
}
