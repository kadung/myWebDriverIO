/*****************************************************/
/*              TEST DATA FOR TESTCASES              */
/*****************************************************/
let devEnv = {
	email: 'devuser01@yopmail.com', 
	password: 'devuser01@yopmail.com'
};

let qaEnv = {
	email: 'qacompany@yopmail.com', 
	password: 'qacompany@yopmail.com'
};

// Default environment is QA
let runEnv = qaEnv;
let baseUrl = browser.options.baseUrl;

if (baseUrl.includes('dev')) {
	runEnv = devEnv;
}

if (baseUrl.includes('uat')) {
	runEnv = devEnv;
}

export default runEnv;