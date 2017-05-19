export class Contacto {

    id : number;
    identificacion : String;
    nombre : String;
    apellido : String;
    direccion : String;
    correo : String;
    celular : String;

    constructor(id: number, name: string, lastName: string, ident: string, 
        address: string, email: string, cellphone: string)
     {
        this.id = id;
        this.nombre = name;
        this.apellido = lastName;
        this.identificacion = ident;
        this.direccion = address;
        this.correo = email;
        this.celular = cellphone;
    }
}
