Feature: Login
Login para acesso ao app

Scenario: Login com sucesso
Given que eu queira acessar o sistema
When eu inserir meu login e senha
And clicar no botão Entrar
Then tenho meu acesso realizado com sucesso
And vejo a página inicial do sistema

Scenario Outline: Login
Given que eu queira acessar o sistema
When eu inserir meu login "<login>" e senha "<senha>"
And clicar no botão Entrar
Then tenho meu acesso realizado com sucesso "<mensagem>"
And vejo a página inicial do sistema

Examples:
|login|senha|mensagem                 |
|horus|1234 |login com sucesso        |
|isis |4321 |login com senha incorreta| 
