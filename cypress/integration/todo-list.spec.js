describe("A todo list", () => {
    it("Should be able to open the page", () => {
    cy.visit("http://my-vue-todos.netlify.app");
    })
   
    it('As a user i should be able to add todos input makan', () => {
        cy.get('.form-control').type('makan{enter}')
        .wait(1000)
    })

    it('As a user i should be able to done todos', () => {
        cy.get('.d-flex:nth-child(4)').click()
        .wait(1000)
    })

    it('As a user i should be able to done todos(Doing Laundry)', () => {
        cy.get('.d-flex:nth-child(3)').click()
        .wait(1000)
    })

    it('As a user i should be able to undone todos', () => {
        cy.get('.d-flex:nth-child(4)').click()
        .wait(1000)
    })

    it('As a user i should be able to rename todos', () => {
        cy.get('.d-flex:nth-child(4) .btn-outline-primary').click().get('.d-flex:nth-child(4) .form-control').type('{selectall}{del}minum{enter}')
        .wait(1000)
    })

    it('As a user i should be able to delete todos', () => {
        cy.get('.d-flex:nth-child(4) .btn-outline-danger').click()
        .wait(1000)
    })

    it('As a user i shouldnt be able to add todos without input', () => {
        cy.get('.form-control').type('{enter}')
        .wait(1000)
    })

    it('As a user i shouldnt be able to add todos with (space) input', () => {
        cy.get('.form-control').type(' {enter}')
        .wait(1000)
    })
})