describe('Dashboard - Delete Employee',function(){
	
	before(function () {
		cy
		.loginByCSRF()
				
		cy
		.visit('/enterprise/dashboard/employees/list')
	})
	
	beforeEach(function () {
		Cypress.Cookies.preserveOnce("session_id", "remember_token")
	})
	
	it('Once employee is added, she can be selected and after can be deleted using "Delete" button',function(){
		
		cy.readFile('/cypress/fixtures/employee.json').then((employeeJSON) => {
			cy
			.get('.panel > .pad-btm')
			.contains('tr',employeeJSON.searchName)
			.within(($tr) => {			
				cy
				.get('> :nth-child(1)')
				.click()
			})
		})
		//delete emplooye
		cy
		.get('button[class="btn btn-lg btn-icon btn-danger ember-view"]')
		.click()
		
		cy
		.get('.modal-content')
		.contains("Delete")
		.click()
		
		cy
		.get('[class="alert alert-success active ember-view"]', {timeout: 10000})
		.should('be.visible')
	})

	it('once deleted Logout using left menu',function(){
		
		cy
		.contains("Logout")
		.click()
	})

	it('after logout user should land on www.bayzat.com again and login link should be available',function(){
		
		cy
		.url()
		.should('eq', Cypress.env('mainpage'))
		
		cy.get('.menu').within(($menu) => 
		{
			cy
			.contains('Log in')
			.should('have.attr','href',Cypress.env('login'))
		}) 	
		
	})	
})