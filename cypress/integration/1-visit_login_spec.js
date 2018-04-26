describe('Visiting Bayzat.com',function(){
	
	it('Log in via login link reachable from top menu',function(){
		cy
		.visit('/')
		
		cy
		.get('.menu')
		.within(($menu) => 
		{
			cy
			.contains('Log in')
			.should('have.attr','href',Cypress.env('login'))
		}) 
	})
	
	it('once logged in, user will land on '+Cypress.env('dashboard'),function(){
		cy
		.login()
		
		cy
		.url()
		.should('eq', Cypress.env('dashboard'))
		
	})
})		