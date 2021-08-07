module.exports.StructureErrors = {};


module.exports.StructureErrors.tipoRegistro = {
    invalidNumber: 'Error en tipo registro - El valor de tipo registro debe ser 2.',
    invalidLength: 'Error en tipo registro - La longitud del valor de tipo registro es mayor a la permitida.',
    emptyField: 'Error en tipo registro - El valor de tipo registro no puede estar vacio.',
    invalidFormat: 'Error en tipo registro - El valor de tipo registro no puede tener caracteres especiales.'
};

module.exports.StructureErrors.qualifiedCode = {
    invalidLength: 'Error en código de habilitación - La longitud del código de habilitación debe ser de 12 digitos.',
    invalidFormat: 'Error en código de habilitación - El valor del código de habilitación no puede tener caracteres especiales.',
    emptyField: 'Error en código de habilitación - El campo de código de habilitación no puede estar vacio.'
};

module.exports.StructureErrors.documentType = {
    emptyField: 'Error en el tipo de documento - El campo tipo de documento no puede estar vacio.',
    invalidFormat: 'Error en el tipo de documento - El valor digitado no puede tener caracteres especiales.',
    invalidLength: 'Error en el tipo de documento - La longitud del tipo de documento digitado debe ser de 2 digitos.',
    invalidOptions: 'Error en el tipo de documento - El valor digitado no esta dentro de las opciones permitidas.'
};

module.exports.StructureErrors.nameErrors = {
    invalidSymbol: 'Error en el nombre - El nombre no debe tener caracteres especiales.',
    emptyFirstName: 'Error en el nombre - El primer nombre no puede estar vacio.',
    emptySecondName: 'Error en el nombre - El segundo nombre esta vacio.',
    emptySurename: 'Error en el Apellido - El primer apellido no puede estar vacio.',
    emptyLastname: 'Error en el nombre - El segundo nombre esta vacio.'
};

module.exports.StructureErrors.DateErrors = {
    dateFormat: 'Error en el formato fecha - La fecha debe tener el formato [YYYY-MM-DD]',
    dateValue: 'Error en la fecha - La fecha debe ser mayor a 1900-01-01 y menor o igual a la actual.'
};