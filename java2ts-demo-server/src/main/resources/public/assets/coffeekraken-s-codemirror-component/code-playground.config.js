module.exports = {
	// server port
	port : 3000,

	// title
	title : 's-codemirror-component',

	// layout
	layout : 'right',

	// compile server
	compileServer : {

		// compile server port
		port : 4000

	},

	// editors
	editors : {
		html : {
			language : 'html',
			data : `
				<div class="container">
					<h1 class="h1 m-b-small">
						Coffeekraken s-codemirror-component
					<h1>
					<p class="p m-b-bigger">
						Webcomponent wrapper for the codemirror editor library.
					</p>
					<s-codemirror language="html">
						<h1>Hello World</h1>
						<p>Nulla eget facilisis lacus. Morbi porta a lorem a pellentesque.</p>
					</s-codemirror>

					<s-codemirror line-numbers="false" language="html" theme="material">
						<h1>Hello World</h1>
						<p>Nulla eget facilisis lacus. Morbi porta a lorem a pellentesque.</p>
					</s-codemirror>

					<s-codemirror language="html" theme="dracula" update-on="run">
						<h1>Hello World</h1>
						<p>Nulla eget facilisis lacus. Morbi porta a lorem a pellentesque.</p>
					</s-codemirror>
					<!-- examples here... -->
				</div>
			`
		},
		css : {
			language : 'sass',
			data : `
				@import 'node_modules/coffeekraken-sugar/index';
				@import 'node_modules/codemirror/theme/material';
				@import 'node_modules/codemirror/theme/dracula';
				@include s-init();
				@include s-classes();
				@include s-typography-classes();
				body {
					background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
				}
				.container {
					@include s-position(absolute, middle, center);
					min-width:80vw;
				}
				s-codemirror {
					margin-bottom: s-space(big);
					@include s-depth(5);
				}
			`
		},
		js : {
			language : 'js',
			data : `
				import 'webcomponents.js/webcomponents-lite'
				import SCodemirrorComponent from './dist/index'
			`
		}
	}
}
