import loginPage from '../pages/login_pages.js'

const pageLogin = new loginPage();

// Step definitions for Scenario: Login
Given(/^que eu queira acessar o sistema$/, () => {
	pageLogin.acessarHomePage();
});

When(/^eu inserir meu login e senha$/, () => {
	pageLogin.preencherDadosNaTela();
});

When(/^clicar no botão Entrar$/, () => {
	pageLogin.clicarNoBotaoEntrar();
});

Then(/^tenho meu acesso realizado com sucesso$/, () => {
	return true;
});

Then(/^vejo a página inicial do sistema$/, () => {
	return true;
});

// New step definitions for Scenario Outline: Login


When(/^eu inserir meu login "([^"]*)" e senha "([^"]*)"$/, (args1,args2) => {
	console.log(args1,args2);
	return true;
});


Then(/^tenho meu acesso realizado com sucesso "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^vejo a página inicial do sistema$/, () => {
	return true;
});
