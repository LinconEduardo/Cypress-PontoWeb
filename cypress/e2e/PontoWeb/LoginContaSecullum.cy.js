describe('Testes de Login', () => {
    beforeEach(() => {
        cy.visit('https://pontoweb.secullum.com.br/login');
        cy.get('#Email').type('desenvolvimento15@secullum.com.br')
    })

    it('Validar Login Sucesso', () => {

        cy.get('#Senha').type('123')  

        cy.get('#login').click()
        
        cy.get('#header-plano').should('have.text','Web Ultimate')
    })

    it('Validar Login Sem Senha', () => {
        
        cy.get('#login').click()
            
        cy.get('.validation-summary-errors').should('have.text','Usuário ou Senha inseridos estão incorretos.\n')
    })

    it('Validar Login Senha Inválida', () => {
        
        cy.get('#login').click()
        
        cy.get('.validation-summary-errors').should('have.text','Usuário ou Senha inseridos estão incorretos.\n')
    })

    it('Validar Login Sem Usuário', () => {
        
        cy.get('#login').click()
        
        cy.get('.validation-summary-errors').should('have.text','Usuário ou Senha inseridos estão incorretos.\n')
    })

    it('Validar Login Sem Dados', () => {
        
        cy.get('#login').click()

        cy.get('.validation-summary-errors').should('have.text','Usuário ou Senha inseridos estão incorretos.\n')
    })
})

