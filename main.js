function Consultorio(consultorio, paciente){  // si hay algun estatico no necesitara parametro
    var _consultorio = consultorio;
    var _paciente = paciente; 


     //Getter nombre
    Object.defineProperty(this, '_getConsultorio', {
        get: function(){
            return _consultorio;
        }
    });

    //Setter nombre
    Object.defineProperty(this, '_setConsultorio', {
        set: function(consultorio){
       this._consultorio = consultorio;   
        }
    }); 

    //Getter nombres pacientes
    Object.defineProperty(this, '_getPaciente', {
        get: function(){
            return _paciente;
        }
    });

    //Setter pacientes
    Object.defineProperty(this, '_setPaciente', {
        set: function(paciente){
            this._paciente.push(paciente);
        }
    });



    }
 // metodos del consultorio
    Consultorio.prototype.getConsultorio = function(){
        return `${this._getConsultorio}`;
    }

    Consultorio.prototype.setConsultorio = function(consultorio){
        this._setConsultorio = consultorio; 
    }

    Consultorio.prototype.getPaciente = function(){
        return `${this._getPaciente}`;
    }

    Consultorio.prototype.setPaciente = function(paciente){
        this._setPaciente = paciente; 
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

// metodos de pacientes

Paciente.prototype.getNombre = function(){
    return `${this._getNombre}`;
}

Paciente.prototype.setNombre = function(nombre){
    this._setNombre = nombre; 
}

Paciente.prototype.getEdad = function(){
    return `${this._getEdad}`;
}

Paciente.prototype.setEdad = function(edad){
    this._setEdad = edad; 
}

Paciente.prototype.getRut = function(){
    return `${this._getRut}`;
}

Paciente.prototype.setRut = function(rut){
    this._setRut = rut; 
}

Paciente.prototype.getDiagnostico = function(){
    return `${this._getDiagnostico}`;
}

Paciente.prototype.setDiagnostico = function(diagnostico){
    this._setDiagnostico = diagnostico; 
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
 
var consultorioUno = new Consultorio('consultorio', pacienteUno);
console.log(consultorioUno);
console.log(consultorioUno.getPaciente().getNombre());    
