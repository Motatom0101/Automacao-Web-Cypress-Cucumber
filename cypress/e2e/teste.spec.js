describe('login', function(){

    it('Sign in', function(){
        cy.visit('https://example.com/login')
        cy.get('input[type="email"]').type('user@example.com')
        cy.get('input[type="password"]').type('senha123')
        cy.get('btn').contains('Entrar').click()
    })
})