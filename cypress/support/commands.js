// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => { 
	cy.visit('login')

	cy.get('form').within(($form) => {
	
		cy.readFile('/cypress/fixtures/user.json').then((user) => {

			cy.get('input[name="_username"]').type(user.username)
			cy.get('input[name="_password"]').type(user.password)
			cy.get('input[name="_remember_me"]').click()
			cy.root().submit()//cy.get('button[type="submit"]').click()
		})
	})	
})



Cypress.Commands.add('loginByCSRF', () => {
    
	cy.request('/login').its('body')
	.then((body) => {
		const csrfToken=Cypress.$(body).find("[name=_csrf_token]").val()
		cy.readFile('/cypress/fixtures/user.json').then((user) => {
			cy.request({
				method: 'POST',
				url: '/login_check',
				failOnStatusCode: false, // dont fail so we can make assertions
				form: true, // we are submitting a regular form body
				body: {
					_username: user.username,
					_password: user.password,
					_csrf_token: csrfToken
				}
			})
		})
	})
})