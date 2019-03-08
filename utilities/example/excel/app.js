var excel = require('../../excel-utils');
// ES6: import utl from '../../common-utilities'


excel.getTableRow(__dirname+'/sample.xlsx', 'info', 'emp_id', '101', function(results){
  console.log(results);
  console.log(results.emp_id);
});

excel.getTableRows(__dirname+'/sample.xlsx', 'address', function(results){
  //console.log(results[1]);
  //then do what ever validation you to do withe results
});

excel.getAllSheetData(__dirname+'/sample.xlsx', function(results){
  //console.log(results);
  //then do what ever validation you to do withe results
});