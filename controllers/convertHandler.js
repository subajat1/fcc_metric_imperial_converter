/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  var units = {
    'gal': ['gallons',    3.78541, 'L'],
    'L'  : ['litres',     1/3.78541, 'gal'],
    'lbs': ['pounds',     0.453592, 'kg'],
    'kg' : ['kilograms',  1/0.453592, 'lbs'],
    'mi' : ['miles',      1.60934,  'km'],
    'km' : ['kilometres', 1/1.60934, 'mi']
  }

  this.getNum = function(input) {
    let result = input.split(/[A-Za-z]/)[0];

    if ((/[A-Za-z]/).test(result[0])) {
      result = 1
    } else if ((/\//).test(result)) {
      
      if (result.split('/').length > 2) {
        result = null;
        return result
      }
      
      if (parseFloat(result.split('/')[1]) > 0) {
        result = parseFloat(result.split('/')[0]) / parseFloat(result.split('/')[1]);
        
      } else {
        result = null;
      }
      
    } else if ( isNaN(result) ) {
      result = null
    } else {
      result = parseFloat(result)
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result = input.split(/([A-Za-z]+)/);
    let unit = result[1].toLowerCase();
    if (unit==='l') {
      unit = 'L'
    }

    if (result.length > 3 || Object.keys(units).indexOf(unit) < 0 ) {
      result = null;
    } else {
      result = result[1];
    }
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result = null;
    if (initUnit) {
      let unit = initUnit.toLowerCase();
      
      if (unit==='l')
        unit = 'L'
      
      result = units[unit][2];
    } 
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result = null;
    if (unit) {
      if (unit.toLowerCase()==='l')
        unit = 'L'
      else
        unit = unit.toLowerCase()

      result = units[unit][0];
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    let result = null;
    if (initUnit) {
      let unit = initUnit.toLowerCase();
      if (unit=='l')
        unit = 'L'

      result = initNum * units[unit][1];
    }
      
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = Math.round(initNum*1e5)/1e5 + ' ';
    result += this.spellOutUnit(initUnit) + ' converts to ';
    result += Math.round(returnNum*1e5)/1e5 + ' ' + this.spellOutUnit(returnUnit);
    
    return result;
  };
  
}

module.exports = ConvertHandler;