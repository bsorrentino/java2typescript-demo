import "babel-polyfill";
import "webcomponents.js/webcomponents-lite";
import SInteractiveDemoComponent from '../dist/index';
import { expect } from 'chai'
import testingStack from 'coffeekraken-testing-stack';
const html = require('./fixture.html');

// preparing mocha
testingStack.mocha.injectHTML(html);
testingStack.mocha.run();

// tests
describe('s-codemirror', () => {
	let component, originalContent;
	before((done) => {
		// grab the component
		component = document.querySelector('s-codemirror');
		setTimeout(done,1000);
	});
	afterEach(() => {
		component.onComponentDidUpdate = null;
	});
	it('Should be a cool component', () => {
		expect(true).to.equal(true);
	});
});
