import { Component, OnInit } from '@angular/core';
import { Contacto } from 'app/contacto';
//import { ContactoService } from '../Services/contactos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //providers: [ContactoService]
})
export class AppComponent implements OnInit{
  //title = 'Formulario de Personas';
  public Contacto : Contacto;

  //constructor(private contactoService : ContactoService){
    contacto = new Contacto(null, "", "", "", "", "", "");
  //}

  ngOnInit(){
  }

/*
  enviarContacto(){
    console.log(this.contactoService.saveContacto(this.Contacto));
  }
  */
}