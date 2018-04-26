describe('Dashboard - Add Employee',function(){
	before(function () {
		cy
		.loginByCSRF()

		cy
		.visit('enterprise/dashboard/employees/create')

	})
	it('Add Single Employee',function(){
		cy
		.get('form').within(($form) => {
			
			cy.readFile('/cypress/fixtures/employee.json').then((employeeJSON) => {

				// pref name
				cy
				.get('input[name="preferredName"]')
				.type(employeeJSON.preferredName)
				
				// first name
				cy
				.get('input[name="firstName"]')
				.type(employeeJSON.firstName)
				
				// last name
				cy
				.get('input[name="lastName"]')
				.type(employeeJSON.lastName)
				
				// birth Date
				cy
				.get('input[name="dateBirthFormatted"]')
				.type(employeeJSON.birthDate)
				
				//select nationality
				cy.contains('Please select nationality')
				.click({force:true})
			
				cy
				.get('.ember-power-select-search-input')
				.type(employeeJSON.nationality ,{force:true})//There is a bug while typing 'Turkish - Turkey'
			
				cy
				.contains(employeeJSON.nationality)
				.click({force:true})
				
				//select gender
				cy
				.contains('Please select gender')
				.click({force:true})
			
				cy
				.contains(employeeJSON.gender)
				.click({force:true})

				//mobile No
				cy
				.get('input[name="numberMobile"]')
				.type(employeeJSON.numberMobile,{force:true})
			
				//Work Email
				cy
				.get('input[name="emailWork"]')
				.type('fake'+Math.random() * 100+'@gmail.com')	
				
				//office Number
				cy
				.get('input[name="numberOffice"]')
				.type(employeeJSON.numberOffice)
				
				//office Number
				cy
				.get('input[name="hiredAtFormatted"]')
				.type(employeeJSON.hireadDate)
				
				//position
				cy
				.get('input[name="position"]')
				.type(employeeJSON.position,{force:true})
				
				//select visa
				cy
				.contains('Please select visa location')
				.click({force:true})
			
				cy
				.contains(employeeJSON.visa)
				.click({force:true})

				//select health insurance
				cy
				.contains('Please select health insurance')
				.click({force:true})
				
				cy
				.contains(employeeJSON.plan)
				.click({force:true})
			})
		})
		cy
		.contains('Create')
		.click()	
		
		cy
		.get('[class="alert alert-success active ember-view"]', {timeout: 10000})
		.should('be.visible')
		
	})
	
})