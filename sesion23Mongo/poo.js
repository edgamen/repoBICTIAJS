class Persona{
    constructor (nombre,edad){
        this.nombre=nombre
        this.edad=edad
    }
    presentarse(){
        return'Hola, me llamo'+this.nombre+'y tengo '+ this.edad+'anhos' 
    }
}


class Profesion extends Persona{
constructor(nomnbre,edad,cargo){
    super(nombre,edad)
    this.cargo=cargo
}
presentarse(){
    return super.presentarse()+' y soy '+this.cargo
}

}
var KAmilo = new Profesion