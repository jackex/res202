const Errors = require('./ErroresEstructura');

module.exports.ValidateStructure = new Object();
module.exports.ValidateStructure.userAge = 0;

const regularExpresion = /[0-9á-úÁ-ü«#$%&/(){}+=*.,_?¿\\|¨´`¡!°':;@<>¬~]/;

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
    
    currentAge = (currentYear - excelYear); 

    if(totalMonthExcelDays > totalMonthCurrentDays){currentAge -= 1;}

    module.exports.ValidateStructure.userAge = currentAge;
}

module.exports.ValidateStructure.setUserAge = function(age){
    module.exports.ValidateStructure.userAge = age;
};

module.exports.ValidateStructure.getUserAge = function(){
    return module.exports.ValidateStructure.userAge;
};
