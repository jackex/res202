module.exports.StructureErrors = {};


module.exports.StructureErrors.registerType = {
    invalidNumber: 'Error en tipo registro - El valor de tipo registro debe ser 2.',
    invalidLength: 'Error en tipo registro - La longitud del valor de tipo registro es mayor a la permitida.',
    emptyField: 'Error en tipo registro - El valor de tipo registro no puede estar vacio.',
    invalidFormat: 'Error en tipo registro - El valor de tipo registro no puede tener carácteres especiales.'
};

module.exports.StructureErrors.qualifiedCode = {
    invalidLength: 'Error en código de habilitación - La longitud del código de habilitación debe ser de 12 dígitos.',
    invalidFormat: 'Error en código de habilitación - El valor del código de habilitación no puede tener carácteres especiales.',
    emptyField: 'Error en código de habilitación - El campo de código de habilitación no puede estar vacio.'
};

module.exports.StructureErrors.documentType = {
    emptyField: 'Error en el tipo de documento - El campo tipo de documento no puede estar vacio.',
    invalidFormat: 'Error en el tipo de documento - El valor digitado no puede tener carácteres especiales.',
    invalidLength: 'Error en el tipo de documento - La longitud del tipo de documento digitado debe ser de 2 carácteres.',
    invalidOptions: 'Error en el tipo de documento - El valor digitado no esta dentro de las opciones permitidas.'
};

module.exports.StructureErrors.documentNumber = {
    emptyField: 'Error en el número de identificación - El campo numero de identificación no puede estar vacio.',
    invalidFormat: 'Error en el número de identificación - El valor digitado no puede tener carácteres especiales.',
    invalidLength: 'Error en el número de identificación - La longitud del número de identificación debe se de 12 dígitos.',
    invalidOptions: 'Error en el número de identificación - El valor digitado no esta dentro de las opciones permitidas.'
};

module.exports.StructureErrors.nameErrors = {
    invalidSymbol: 'Error en el nombre - El nombre no debe tener carácteres especiales.',
    emptyFirstName: 'Error en el nombre - El primer nombre no puede estar vacio.',
    emptySecondName: 'Error en el nombre - El segundo nombre esta vacio.',
    emptySurename: 'Error en el Apellido - El primer apellido no puede estar vacio.',
    emptyLastname: 'Error en el nombre - El segundo nombre esta vacio.'
};

module.exports.StructureErrors.DateErrors = {
    dateFormat: 'Error en el formato fecha - La fecha debe tener el formato [YYYY-MM-DD]',
    dateValue: 'Error en la fecha - La fecha debe ser mayor a 1900-01-01 y menor o igual a la actual.'
};

module.exports.StructureErrors.SexErrors = {
    emptyField: 'Error en el sexo del usuario - El campo tipo sexo no puede estar vacio.',
    invalidFormat: 'Error en el sexo del usuario - El valor digitado no puede tener carácteres especiales.',
    invalidLength: 'Error en el sexo del usuario - La longitud sexo del usuario debe se de 1 carácter.',
    invalidOptions: 'Error en el sexo del usuario - El valor digitado no esta dentro de las opciones permitidas.'
};

module.exports.StructureErrors.ethnicityCode = {
    emptyField: 'Error en código de pertenencia étnica - El campo de código de pertenencia étnica no puede estar vacio.',
    invalidFormat: 'Error en código de pertenencia étnica - El valor digitado no puede tener carácteres especiales.',
    invalidLength: 'Error en código de pertenencia étnica - La longitud de código de pertenencia étnica debe ser de 1 dígito.',
    invalidOptions: 'Error en código de pertenencia étnica - El valor digitado no esta dentro de las opciones permitidas.'
};

module.exports.StructureErrors.occupationCode = {
    emptyField: 'Error en código de ocupación - El campo de código de ocupación no puede estar vacio.',
    invalidFormat: 'Error en código de ocupación - El valor digitado no puede tener carácteres especiales.',
    invalidLength: 'Error en código de ocupación - La longitud de código de ocupación debe estar entre 1 y 4 dígitos.',
    invalidOptions: 'Error en código de ocupación - El valor digitado no esta dentro de las opciones permitidas.'
};

module.exports.StructureErrors.educationLevel = {
    emptyField: 'Error en código de nivel educativo - El campo de código de nivel educativo no puede estar vacio.',
    invalidFormat: 'Error en código de nivel educativo - El valor digitado no puede tener carácteres especiales.',
    invalidLength: 'Error en código de nivel educativo - La longitud de código de nivel educativo debe estar entre 1 y 2 dígitos.',
    invalidOptions: 'Error en código de nivel educativo - El valor digitado no esta dentro de las opciones permitidas.'
};