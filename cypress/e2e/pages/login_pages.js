/// <reference types="cypress"/>

// 1. O Import da CLASSE (Nome original mantido: LoginElements)
import loginElements from '../elements/login.js'
// 2. A Instanciação da classe 'loginElements', para criar do objeto 'el'
const el = new loginElements;// <- RECOMENDADO: Nome curto e descritivo

// Criação da classe 'loginPage' para herdar os elementos e criar os métodos de interação
class loginPage{

    // Acessando a página e fazendo login
    acessarHomePage(){
        cy.visit('https://example.com/login')
    }
    // Preenchendo os dados de login
    preencherDadosNaTela(){
        cy.get(el.inputEmail).type('user@example.com')
        cy.get(el.inputPass).type('senha123')
    }
    // Clicando no botão entrar
    clicarNoBotaoEntrar(){
        cy.get(el.btnEnter).click()
    }
} export default loginPage; // Exportando a classe 'loginPage' para ser utilizada nos arquivos de Step Definitions