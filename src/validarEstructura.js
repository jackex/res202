const Errors = require('./ErroresEstructura');
const Validacion202 = require('./ValoresEstructura202');

module.exports.ValidateStructure = new Object();
module.exports.ValidateStructure.userAge = 0;

const regularExpresion = /[0-9á-úÁ-ü«#$%&/(){}+=*.,_?¿\\|¨"´`¡!°':;@<>¬~]/;
const allowOnlyNumbersRegExp = /[a-zA-Zá-úÁ-ü«#$%&/(){}+=*.,_?¿\\|¨"´`¡!°':;@<>¬~]/;

module.exports.ValidateStructure.validateRegisterType = function(excelRegisterType){
    if(excelRegisterType.toString() !== 'undefined'){
        if(excelRegisterType.charAt(0) == ' ' || excelRegisterType.charAt(excelRegisterType.length - 1)){
            excelRegisterType = excelRegisterType.trim();
        }
        if(!NoWithNumberRegularExpresion.test(excelRegisterType)){
            if(excelRegisterType.length === Validacion202.ValoresEstructura202.tipoRegistro.length){
                if(excelRegisterType.toString() ===  Validacion202.ValoresEstructura202.tipoRegistro.value){
                    console.log(excelRegisterType);
                }else{
                    console.log(Errors.StructureErrors.registerType.invalidNumber);
                }
            }else{
                console.log(Errors.StructureErrors.registerType.invalidLength);
            } 
        }else{
            console.log(Errors.StructureErrors.registerType.invalidFormat);
        }
    }else{
        console.log(Errors.StructureErrors.registerType.emptyField);
    }   
};

module.exports.ValidateStructure.validateQualifiedCode = function(excelQualCode){
    if(excelQualCode.toString() !== 'undefined'){
        if(excelQualCode.charAt(0) == ' ' || excelQualCode.charAt(excelQualCode.length - 1)){
            excelQualCode = excelQualCode.trim();
        }
            if(!allowOnlyNumbersRegExp.test(excelQualCode)){
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
        if(excelDocumentType.charAt(0) == ' ' || excelDocumentType.charAt(excelDocumentType.length - 1)){
            excelDocumentType = excelDocumentType.trim();
        }
        if(!regularExpresion.test(excelDocumentType)){
            if(excelDocumentType.length == Validacion202.ValoresEstructura202.tipoIDentificacionUsuario.length){
                if(Validacion202.ValoresEstructura202.tipoIDentificacionUsuario.value.test(excelDocumentType)){
                    console.log(excelDocumentType.toString());
                }else{
                    console.log(Errors.StructureErrors.documentType.invalidOptions);
                }
            }else{
                console.log(Errors.StructureErrors.documentType.invalidLength);
            }
        }else{
            console.log(Errors.StructureErrors.documentType.invalidFormat);
        }
    }else{
        console.log(Errors.StructureErrors.documentType.emptyField);
    }
};

module.exports.ValidateStructure.validateDocumentNumber = function(excelDocumentNumber){
    if(excelDocumentNumber.toString() !== 'undefined'){
        if(excelDocumentNumber.charAt(0) == ' ' || excelDocumentNumber.charAt(excelDocumentNumber.length - 1)){
            excelDocumentNumber = excelDocumentNumber.trim();
        }
        if(!allowOnlyNumbersRegExp.test(excelDocumentNumber)){
            if(excelDocumentNumber.length <= Validacion202.ValoresEstructura202.numeroIdentificacion.length){
                console.log(excelDocumentNumber.toString());
            }else{
                console.log(Errors.StructureErrors.documentNumber.invalidLength);
            }
        }else{
            console.log(Errors.StructureErrors.documentNumber.invalidFormat);
        }
    }else{
        console.log(Errors.StructureErrors.documentNumber.emptyField);
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

module.exports.ValidateStructure.validateSex = function(excelSex){
    if(excelSex.toString() !== 'undefined'){
        if(excelSex.charAt(0) == ' ' || excelSex.charAt(excelSex.length -1) == ' '){
            excelSex = excelSex.trim();
        }
        if(!regularExpresion.test(excelSex)){
            if(excelSex.length === Validacion202.ValoresEstructura202.sexoUsuario.length){
                if(Validacion202.ValoresEstructura202.sexoUsuario.value.test(excelSex)){
                    console.log(excelSex.toString());
                }else{
                    console.log(Errors.StructureErrors.SexErrors.invalidOptions);
                }
            }else{
                console.log(Errors.StructureErrors.SexErrors.invalidLength);
            } 
        }else{
            console.log(Errors.StructureErrors.SexErrors.invalidFormat);
        }       
    }else{
        console.log(Errors.StructureErrors.SexErrors.emptyField);
    }
};

module.exports.ValidateStructure.validateEthnicityCode = function(excelEthnicity){
    if(excelEthnicity.toString() !== 'undefined'){
        if(excelEthnicity.charAt(0) == ' ' || excelEthnicity.charAt(excelEthnicity.length -1) == ' '){
            excelEthnicity = excelEthnicity.trim();
        }
        if(!allowOnlyNumbersRegExp.test(excelEthnicity)){
            if(excelEthnicity.length === Validacion202.ValoresEstructura202.codigoPertenenciaEtnica.length){
                if(Validacion202.ValoresEstructura202.codigoPertenenciaEtnica.value.test(excelEthnicity)){
                    console.log(excelEthnicity.toString());
                }else{
                    console.log(Errors.StructureErrors.ethnicityCode.invalidOptions);    
                }
            }else{
                console.log(Errors.StructureErrors.ethnicityCode.invalidLength);
            }
        }else{
            console.log(Errors.StructureErrors.ethnicityCode.invalidFormat);
        }
    }else{
        console.log(Errors.StructureErrors.ethnicityCode.emptyField);
    }
};

module.exports.ValidateStructure.validateOccupationCode = function(excelOccupationCode){
    if(excelOccupationCode.toString() !== 'undefined'){
        if(excelOccupationCode.charAt(0) == ' ' || excelOccupationCode.charAt(excelOccupationCode.length -1) == ' '){
            excelOccupationCode = excelOccupationCode.trim();
        }
        if(!allowOnlyNumbersRegExp.test(excelOccupationCode)){
            if(excelOccupationCode.length >= Validacion202.ValoresEstructura202.codigoOcupacion.length.min 
                && excelOccupationCode.length <= Validacion202.ValoresEstructura202.codigoOcupacion.length.max){
                    console.log(excelOccupationCode.toString());
            }else{
                console.log(Errors.StructureErrors.occupationCode.invalidLength);    
            }
        }else{
            console.log(Errors.StructureErrors.occupationCode.invalidFormat);    
        }
    }else{
        console.log(Errors.StructureErrors.occupationCode.emptyField);
    }
};

module.exports.ValidateStructure.validateEducationLevel = function(excelEducationLevel){
    if(excelEducationLevel.toString() !== 'undefined'){
        if(excelEducationLevel.charAt(0) == ' ' || excelEducationLevel.charAt(excelEducationLevel.length -1) == ' '){
            excelEducationLevel = excelEducationLevel.trim();
        }
        if(!allowOnlyNumbersRegExp.test(excelEducationLevel)){
            if(excelEducationLevel.length >= Validacion202.ValoresEstructura202.codigoNivelEducativo.length.min
                && excelEducationLevel.length <= Validacion202.ValoresEstructura202.codigoNivelEducativo.length.max){
                    if(Validacion202.ValoresEstructura202.codigoNivelEducativo.value.test(excelEducationLevel)){
                        console.log(excelEducationLevel.toString());
                    }else{
                        console.log(Errors.StructureErrors.educationLevel.invalidOptions);
                    }
                }else{
                    console.log(Errors.StructureErrors.educationLevel.invalidLength);
                }
        }else{
            console.log(Errors.StructureErrors.educationLevel.invalidFormat);
        }
    }else{
        console.log(Errors.StructureErrors.educationLevel.emptyField);
    }
};