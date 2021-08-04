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

        const excelFirstName = new String(element['Primer nombre del usuario']);
        Estructura.ValidateStructure.validateFirstName(excelFirstName);
            
        //const excelDate = new String(element['Fecha de Nacimiento']);
        //Estructura.ValidateStructure.validateBirthDate(excelDate, currentYear, currentMonth, currentDay);            
    });
}

readExcel('./archivoExcel.xlsx');