const XLSX = require('xlsx');
const Estructura = require('./validarEstructura');

function readExcel(filePath) {
    const workbook = XLSX.readFile(filePath);
    const workbookSheets = workbook.SheetNames;
    const sheet = workbookSheets[0];
    const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const currentDay = date.getDay() + 1; 
    
    dataExcel.forEach(element => {

        //const excelTipoRegistro = new String(element['Tipo de registro']);
        //Estructura.ValidateStructure.validateRegisterType(excelTipoRegistro);

        //const excelCodigoHabilitacion = new String(element['Código de habilitación IPS primaria']);
        //Estructura.ValidateStructure.validateQualifiedCode(excelCodigoHabilitacion);

        const excelTipoDocumento = new String(element['Tipo de identificación del usuario']);
        Estructura.ValidateStructure.validateDocumentType(excelTipoDocumento);

        //const excelFirstName = new String(element['Primer nombre del usuario']);
        //Estructura.ValidateStructure.validateFirstName(excelFirstName);

        //const excelMiddleName = new String(element['Segundo nombre del usuario']);
        //Estructura.ValidateStructure.validateMiddleName(excelMiddleName);

        //const excelFirstSurename = new String(element['Primer apellido del usuario']);
        //Estructura.ValidateStructure.validateFirstSurename(excelFirstSurename);

        //const excelSecondSurename = new String(element['Segundo apellido del usuario']);
        //Estructura.ValidateStructure.validateSecondSurename(excelSecondSurename);
            
        //const excelDate = new String(element['Fecha de Nacimiento']);
        //Estructura.ValidateStructure.validateBirthDate(excelDate, currentYear, currentMonth, currentDay);            
    });
}

readExcel('./archivoExcel.xlsx');