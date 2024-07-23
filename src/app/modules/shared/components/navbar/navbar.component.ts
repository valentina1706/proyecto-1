import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/autentificacion/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  logueado = true; //booleana para manejar el resgistro y el inicio de sesion
  deslogueado = false; //booleana para manejo de cierre de sesión
  constructor(
    public servicioAuth: AuthService,
    public servicioRutas: Router
  ) {}

  //Funcion "ingresar" para invertir los valores
  ingresar(){
    this.logueado=false;
    this.deslogueado =true;
  }
  cerrarSesion(){
    this.deslogueado =false;
    this.logueado = true; 

    this.servicioAuth.CerrarSesion();
    this.servicioRutas.navigate(['/'])
  }

}
