module.exports.StructureErrors = {};

module.exports.StructureErrors.nameErrors = {
    invalidSymbol: 'Error en el nombre - El nombre no debe contener simbolos especiales',
    emptyFirstName: 'Error en el nombre - El primer nombre no puede estar vacio',
    emptySecondName: 'Error en el nombre - El segundo nombre esta vacio',
    emptySurename: 'Error en el Apellido - El primer apellido no puede estar vacio',
    emptyLastname: 'Error en el nombre - El segundo nombre esta vacio'
};

module.exports.StructureErrors.DateErrors = {
    dateFormat: 'Error en el formato fecha - La fecha debe tener el formato [YYYY-MM-DD]',
    dateValue: 'Error en la fecha - La fecha debe ser menor o igual a la fecha actual.'
};