const { ConsoleReporter } = require('jasmine');
const Errors = require('./ErroresEstructura');
const Validacion202 = require('./ValoresEstructura202');

module.exports.ValidateStructure = new Object();
module.exports.ValidateStructure.userAge = 0;

const regularExpresion = /[0-9á-úÁ-ü«#$%&/(){}+=*.,_?¿\\|¨"´`¡!°':;@<>¬~]/;
const NoWithNumberRegularExpresion = /[á-úÁ-ü«#$%&/(){}+=*.,_?¿\\|¨"´`¡!°':;@<>¬~]/;

module.exports.ValidateStructure.validateRegisterType = function(excelRegisterType){
    if(excelRegisterType.toString() !== 'undefined'){
        if(!NoWithNumberRegularExpresion.test(excelRegisterType)){
            if(excelRegisterType.length === Validacion202.ValoresEstructura202.tipoRegistro.length){
                if(excelRegisterType.toString() ===  Validacion202.ValoresEstructura202.tipoRegistro.value){
                    console.log(excelRegisterType);
                }else{
                    console.log(Errors.StructureErrors.tipoRegistro.invalidNumber);
                }
            }else{
                console.log(Errors.StructureErrors.tipoRegistro.invalidLength);
            } 
        }else{
            console.log(Errors.StructureErrors.tipoRegistro.invalidFormat);
        }
    }else{
        console.log(Errors.StructureErrors.tipoRegistro.emptyField);
    }   
};

module.exports.ValidateStructure.validateQualifiedCode = function(excelQualCode){
    if(excelQualCode.toString() !== 'undefined'){
            if(!NoWithNumberRegularExpresion.test(excelQualCode)){
                if(excelQualCode.length === Validacion202.ValoresEstructura202.codigoHabilitacion.length){
                    console.log(excelQualCode.toString());
                }else{
                    console.log(Errors.StructureErrors.qualifiedCode.invalidLength);
                }
            }else{
                console.log(Errors.StructureErrors.qualifiedCode.invalidFormat);
            }
        }else{
            console.log(Errors.StructureErrors.qualifiedCode.emptyField);
        }
}

module.exports.ValidateStructure.validateDocumentType = function(excelDocumentType){
    if(excelDocumentType.toString() !== 'undefined'){
        if(!regularExpresion.test(excelDocumentType)){
            for( let tipo in Validacion202.ValoresEstructura202.tipoIDentificacionUsuario.value){
                console.log(tipo);
                /*if(excelDocumentType.toString() == tipo){
                    if(excelDocumentType.length == Validacion202.ValoresEstructura202.tipoIDentificacionUsuario.length){
                        console.log(excelDocumentType.toString());
                    }else{
                        console.log(Errors.StructureErrors.documentType.invalidLength);
                    }
                }else{
                    console.log(Errors.StructureErrors.documentType.invalidOptions);
                }*/
            }
        }else{
            console.log(Errors.StructureErrors.documentType.invalidFormat);
        }
    }else{
        console.log(Errors.StructureErrors.documentType.emptyField);
    }
};

module.exports.ValidateStructure.validateFirstName = function(excelFirstName){
    if(excelFirstName.toString() !== 'undefined'){
        if(!regularExpresion.test(excelFirstName)){
            if(excelFirstName.charAt(0) == ' ' || excelFirstName.charAt(excelFirstName.length -1) == ' '){
                excelFirstName = excelFirstName.trim();
            }
        }else{
            console.log(Errors.StructureErrors.nameErrors.invalidSymbol);
        }
    }else{
        console.log(Errors.StructureErrors.nameErrors.emptyFirstName);
    }
};

module.exports.ValidateStructure.validateMiddleName = function(excelMiddleName){
    if(!regularExpresion.test(excelMiddleName)){
        if(excelMiddleName.charAt(0) == ' ' || excelMiddleName.charAt(excelMiddleName.length -1) == ' '){
            excelMiddleName = excelMiddleName.trim();
        }
    }else{
        console.log(Errors.StructureErrors.nameErrors.invalidSymbol);
    }
};

module.exports.ValidateStructure.validateFirstSurename = function(excelSurename){
    if(excelSurename.toString() !== 'undefined'){
        if(!regularExpresion.test(excelSurename)){
            if(excelSurename.charAt(0) == ' ' || excelSurename.charAt(excelSurename.length -1) == ' '){
                excelSurename = excelSurename.trim();
            }
        }else{
            console.log(Errors.StructureErrors.nameErrors.invalidSymbol);
        }
    }else{
        console.log(Errors.StructureErrors.nameErrors.emptySurename);
    }
};

module.exports.ValidateStructure.validateSecondSurename = function(excelSecondSurename){
    if(!regularExpresion.test(excelSecondSurename)){
        if(excelSecondSurename.charAt(0) == ' ' || excelSecondSurename.charAt(excelSecondSurename.length -1) == ' '){
            excelSecondSurename = excelSecondSurename.trim();
        }
    }else{
        console.log(Errors.StructureErrors.nameErrors.invalidSymbol);
    }
};

module.exports.ValidateStructure.validateBirthDate = function(excelBirthDate, currentYear, currentMonth, currentDay){

    if(excelBirthDate.charAt(4) == '-' && excelBirthDate.charAt(7) == '-'){
        dateArray = excelBirthDate.split('-');
        const excelYear = Number.parseInt(dateArray[0]);
        const excelMonth = Number.parseInt(dateArray[1]);
        const excelDay = Number.parseInt(dateArray[2]);

        if(excelYear <= currentYear){
            calculateBirthAge(excelYear, excelMonth, excelDay, currentYear, currentMonth, currentDay);
        }else{
            console.log(Errors.StructureErrors.DateErrors.dateValue);
        }
    }else{
        console.log(Errors.StructureErrors.DateErrors.dateFormat);
    }
};

function calculateBirthAge(excelYear, excelMonth, excelDay, currentYear, currentMonth, currentDay){
    const totalMonthExcelDays = (excelMonth * 30) - (30 - excelDay);
    const totalMonthCurrentDays = (currentMonth * 30) - (30 - currentDay);
    
    let currentAge = (currentYear - excelYear); 

    if(totalMonthExcelDays > totalMonthCurrentDays){currentAge -= 1;}

    module.exports.ValidateStructure.userAge = currentAge;
}

module.exports.ValidateStructure.setUserAge = function(age){
    module.exports.ValidateStructure.userAge = age;
};

module.exports.ValidateStructure.getUserAge = function(){
    return module.exports.ValidateStructure.userAge;
};
