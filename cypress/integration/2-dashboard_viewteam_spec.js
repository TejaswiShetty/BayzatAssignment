describe('Dashboard - View Team',function(){

	before(function () {
		
		cy
		.loginByCSRF()
		
		cy
		.visit('/enterprise/dashboard/')
		
		cy
		.contains('View Team')
		.click()			
	})
	
	beforeEach(function () {
	
		Cypress.Cookies.preserveOnce("session_id", "remember_token")
	})
	
	it('"View Team" page should display list of employess(might be empty)',function(){	
		
		cy
		.url()
		.should('eq',Cypress.env('employee_list'))
		
		//XXX employess(might be empty) 	
		/*expect(cy.get('.panel > .pad-btm tr'))
		.to
		.have
		.length
		.eq(1)//header row
		*/
	})

	it('New employee can be added using toolbar button above employees list (Add single employee)',function(){
		
		cy
		.get('.panel')
		.within(($panel) => {
			cy
			.contains('Add Employees')
			.click()
			
			cy
			.contains('Add single employee')
			.should('have.attr','href','/enterprise/dashboard/employees/create')
			
		})	
	})					
})