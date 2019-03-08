var utl = require('../..//common-utilities.js');
// ES6: import utl from '../../common-utilities'


utl.excel_getTableRow(__dirname+'/sample.xlsx', 'info', 'emp_id', '101', function(results){
  console.log(results);
  console.log(results.emp_id);
});

utl.excel_getTableRows(__dirname+'/sample.xlsx', 'address', function(results){
  //console.log(results[1]);
  //then do what ever validation you to do withe results
});

utl.excel_getAllSheetData(__dirname+'/sample.xlsx', function(results){
  //console.log(results);
  //then do what ever validation you to do withe results
});