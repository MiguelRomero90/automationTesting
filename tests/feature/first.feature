Feature: EnrouteSystems
	
	Scenario: Open the EnrouteSystems Home page
		Given site http://enroutesystems.com is open
		Then page title should be Enroute

	Scenario Outline: Find the 'What we offer' section and click on each tab
		Given site http://enroutesystems.com is open
		When scroll to what we offer section
		And click on <offerTab>
		Then <div> should have a heading
		And <div> should have a description
		Examples:
		| offerTab                | div                     |
		| QA & Testing            | qa-and-testing          |
		| Software Development    | software-development    |
		| Inventory Management    | inventory-management    |
		| Data Management         | data-management         |
		| Application Maintenance | application-maintenance |

	Scenario: Click on the contact page
		Given site http://enroutesystems.com is open
		When click on Contact
		Then page title should be Contact – Enroute

	Scenario: Fill in all the fields under contact form
		Given site http://enroutesystems.com is open
		When click on Contact
		And scroll to reach out to us
		And fill your-name field
		And fill your-email field
		And fill your-subject field
		And fill your-message field
		Then submit button should be enabled

