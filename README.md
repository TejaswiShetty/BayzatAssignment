# Bayzat_Assignment #

This is an automated test using Cypress.io. The application implements some basic user processes at www.bayzat.com.

Solution:
	
	The test verifying a scenario works fine with four(4) spec files at "https://www.bayzat.com":

	"1-visit_login_spec" file is based on "/" url and verifying these steps:
		visit www.bayzat.com
		log in via login link reachable from top menu

	"2-dashboard_viewteam_spec" file is based on "/enterprise/dashboard" url and verifying these steps:
		once logged in, user will land on https://www.bayzat.com/enterprise/dashboard
		"View Team" page should display list of employees (might be empty)
		New employee can be added using toolbar button above employees list (Add single employee)

	"3-add_employee_spec" file is based on "/enterprise/dashboard/employees/list" url and verifying this step:
		Add single employee

	"4-delete_employee_spec" file is based on "/enterprise/dashboard/employees/create" url and verifying these steps:
		once employee is added, she can be selected on the view employee screen
		once selected Employee can be deleted using "Delete" button that should show up near search field
		once deleted Logout using left menu user should land on "www.bayzat.com" again and login link should be available

Install & write tests in Cypress:

	Download this repository with "Download ZIP" option
	Extract it to your work folder
	Put "user.json" file at "BayzatAssignment-master\cypress\fixtures" directory
	Run command line in "BayzatAssignment-master" folder. 
	Type "npm install" line and "{enter}".
	After wait for a while you will be capable for running application with "node_modules\bin\cypress open" command.

For full information about installing follow the [link.](https://on.cypress.io/installing-cypress)

Test data:

	All test data is exists in "emplooye.json" file. This file is include employee properties except one property whose name is "searchName". It is abbreviation of employee name at "View Team" datagrid. If you are using your own test data, you must carefully set it considering its algorithm.
	
Bugs:

	There is no bug detected, except one supposition. Scenario says: "View Team" page should display list of employees (might be empty). But there is always one emplooye which cannot deleted because of priority.   

Output and video record are reachable at link:

	https://dashboard.cypress.io/#/projects/y38dja/runs/f2a2bde3-5ee5-4a2d-9a69-e90f20323392/output

Note: "user.json" file is not settled project due to security. You must put it into directory "\cypress\fixtures" manually.(Near the "employee.json")

Best Regards