function Consultorio(nombre, paciente){
    this.nombre = nombre;
    this.paciente = paciente;

    }

function Paciente(nombre, edad, rut, diagnostico){
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;


    //Getter nombre
    Object.defineProperty(this, '_getNombre', {
        get: function(){
            return _nombre;
        }
    });

    //Setter nombre
    Object.defineProperty(this, '_setNombre', {
        set: function(nombre){
            _nombre = nombre;
        }
    });

    //Getter edad
    Object.defineProperty(this, '_getEdad', {
        get: function(){
            return _edad;
        }
    });

    //Setter edad
    Object.defineProperty(this, '_setEdad', {
        set: function(edad){
            _edad = edad;
        }
    });

     //Getter rut
      Object.defineProperty(this, '_getRut', {
        get: function(){
            return _rut;
        }
    });

    //setter rut
    Object.defineProperty(this, '_setRut', {
        set: function(rut){
            _rut = rut;
        }
    });

    //getter diagnostico
    Object.defineProperty(this, '_getDiagnostico', {
        get: function(){
            return _diagnostico;
        }
    });

    //setter diagnostico
    Object.defineProperty(this, '_setDiagnostico', {
        set: function(diagnostico){
            _diagnostico = diagnostico;
        }
    });

}

//buscar usuario x nombre
Paciente.prototype.buscar = function(){

    return `${this.getNombre()}`;
}
//mostrar datos de usuario
Paciente.prototype.mostrar = function(){
    return `Paciente ${this.getNombre()}`;
}

var pacienteUno = new Paciente('Anasu', '34', '12345679-8', 'loquilla');
var pacienteDos = new Paciente('Tam', '41', '90234567-8', 'enojona'); 
    

    