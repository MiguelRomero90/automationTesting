const { Given, When, Then } = require("cucumber");
const assert = require("assert");

Given(/^site (\S+) is open$/, (site) =>{
	browser.url(site);
});

When(/^scroll to what we offer section$/, () => {
	const elem = $('#post-6');
	elem.scrollIntoView();	
});

When(/^scroll to reach out to us$/, () => {
	const elem = $('.wpcf7-form');
	elem.scrollIntoView();
	browser.pause(3000);	
});

When(/^click on (.*)$/, (link) =>{
	const elem = $('a='+link);
	elem.click();
});

When(/^fill (\S+) field$/, (field) =>{
	
	var input=$('.'+field).$('.wpcf7-text');
	if(field.match('your-message')){
		input=$('.'+field).$('.wpcf7-textarea');
	}		
	switch (field){
		case 'your-name':
			input.addValue('Miguel Romero');
			break;

		case 'your-email':
			input.addValue('miguel.romero@enroutesystems.com');
			break;
		
		case 'your-subject':
		 	input.addValue('Automation Assignment');
		 	break;
		 
		case 'your-message':
		 	input.addValue('This is an automated message created for the Automation Assignment');
		 	break;
	}
});

Then(/^page title should be (.*)$/, (expectedTitle) =>{
	const title = browser.getTitle();
	assert.equal(title, expectedTitle);
});

Then(/^(.*) should have a heading$/, (div) =>{
	const content = $('#'+div).$('<strong />');
	const contentTitle = content.getHTML(false);
	assert.notEqual("",contentTitle);
	assert.notEqual(null,contentTitle);
});

Then(/^(.*) should have a description$/, (div) =>{
	const content = $('#'+div).$('<p />');
	const contentp = content.getHTML(false);
	assert.notEqual("",contentp);
	assert.notEqual(null,contentp);
});

Then(/^submit button should be enabled$/, () =>{
	const button = $('.btn-submit');
	assert(button.isEnabled());
});

