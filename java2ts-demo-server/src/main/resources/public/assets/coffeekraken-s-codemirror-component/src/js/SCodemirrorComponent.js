import SWebComponent from 'coffeekraken-sugar/js/core/SWebComponent'
import __throttle from 'coffeekraken-sugar/js/utils/functions/throttle'
import Codemirror from 'codemirror'
import Clipboard from 'clipboard';
import __mousetrap from 'mousetrap';
require('codemirror/mode/htmlmixed/htmlmixed');
require('./codemirror/autoFormatRange');

/**
 * @name 		SCodemirrorComponent
 * @extends 	SWebComponent
 * Webcomponent wrapper for the codemirror editor library.
 *
 * @example 	html
 * <s-codemirror language="html">
 * 	<h1>
 * 		Hello world
 * 	</h1>
 * 	<p>
 * 		Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent eleifend risus nibh, sed ultrices turpis imperdiet a. Praesent elit odio, efficitur accumsan nisl nec, venenatis.
 * 	</p>
 * </s-codemirror>
 *
 * @see 		http://github.coffeekraken.io/codemirror/codemirror/^5.0.0 		Codemirror 5.x.x repository
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */

export default class SInteractiveDemoPartComponent extends SWebComponent {

	/**
	 * Default props
	 * @definition 		SWebcomponent.defaultProps
	 * @protected
	 */
	static get defaultProps() {
		return {
			/**
			 * Specify the mode used inside the demo
			 * @prop
			 * @type 		{String}
			 */
			mode : null,

			/**
			 * Specify the language used inside the demo (alias to mode)
			 * @prop
			 * @type 		{String}
			 */
			language : 'html',

			/**
			 * Specify the id of the part
			 * @prop
			 * @type 		{String}
			 */
			id : null,

			/**
			 * Set the indent unit to use
			 * @prop
			 * @type 		{Intetger}
			 */
			indentUnit : 4,

			/**
			 * Set the theme to use
			 * @prop
			 * @type 		{String}
			 */
			theme : 'default',

			/**
			 * Set the tab size
			 * @prop
			 * @type 		{Integer}
			 */
			tabSize : 4,

			/**
			 * Set if need to indent with tabs or not
			 * @prop
			 * @type 		{Boolean}
			 */
			indentWithTabs : true,

			/**
			 * Specify if need to wrap long lines or not
			 * @prop
			 * @type 		{Boolean}
			 */
			lineWrapping : true,

			/**
			 * Display or not the line numbers
			 * @prop
			 * @type 		{Boolean}
			 */
			lineNumbers : true,

			/**
			 * When an update has been made
			 * @prop
			 * @type 	 	{Function}
			 */
			onUpdate : null,

			/**
			 * Compile the code before injecting it into the iframe.
			 * This function specified here will receive as parameters:
			 * 1. The code string to compile
			 * 2. The language in which to compile the code
			 * 3. The compileOptions object if provided for this particular language
			 * This function has to return an object formated like this:
			 * ```js
			 * return {
			 * 	language : 'css',
			 * 	data : '...'
			 * };
			 * ```
			 * @prop
			 * @type 		{Function}
			 */
			compile : null,

			/**
			 * Compile options by language
			 * @prop
			 * @type 		{Object}
			 */
			compileOptions : null,

			/**
			 * Specify when to trigger the update
			 * @prop
			 * @type 		{String}
			 * @values 		change|run
			 */
			updateOn : 'change',

			/**
			 * Update timeout when the updateOn property is on "change"
			 * @prop
			 * @type 		{Number}
			 */
			updateTimeout : 0,

			/**
			 * Set the title of the editor
			 * @prop
			 * @type 		{String}
			 */
			title : null,

			/**
			 * Set the accepted modes (comma separated modes)
			 * @prop
			 * @type 		{String}
			 */
			accept : null
		};
	}

	/**
	 * Base css
	 * @definition 		SWebComponent.css
	 * @protected
	 */
	static defaultCss(componentName, componentNameDash) {
		return `
			${componentNameDash} {
				display:block;
				position:relative;
			}
			.CodeMirror{font-family:monospace;height:300px;color:#000}.CodeMirror-lines{padding:4px 0}.CodeMirror pre{padding:0 4px}.CodeMirror-gutter-filler,.CodeMirror-scrollbar-filler{background-color:#fff}.CodeMirror-gutters{border-right:1px solid #ddd;background-color:#f7f7f7;white-space:nowrap}.CodeMirror-linenumber{padding:0 3px 0 5px;min-width:20px;text-align:right;color:#999;white-space:nowrap}.CodeMirror-guttermarker{color:#000}.CodeMirror-guttermarker-subtle{color:#999}.CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}.CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}.cm-fat-cursor .CodeMirror-cursor{width:auto;border:0!important;background:#7e7}.cm-fat-cursor div.CodeMirror-cursors{z-index:1}.cm-animate-fat-cursor{width:auto;border:0;-webkit-animation:blink 1.06s steps(1) infinite;-moz-animation:blink 1.06s steps(1) infinite;animation:blink 1.06s steps(1) infinite;background-color:#7e7}@-moz-keyframes blink{50%{background-color:transparent}}@-webkit-keyframes blink{50%{background-color:transparent}}@keyframes blink{50%{background-color:transparent}}.cm-tab{display:inline-block;text-decoration:inherit}.CodeMirror-rulers{position:absolute;left:0;right:0;top:-50px;bottom:-20px;overflow:hidden}.CodeMirror-ruler{border-left:1px solid #ccc;top:0;bottom:0;position:absolute}.cm-s-default .cm-header{color:#00f}.cm-s-default .cm-quote{color:#090}.cm-negative{color:#d44}.cm-positive{color:#292}.cm-header,.cm-strong{font-weight:700}.cm-em{font-style:italic}.cm-link{text-decoration:underline}.cm-strikethrough{text-decoration:line-through}.cm-s-default .cm-keyword{color:#708}.cm-s-default .cm-atom{color:#219}.cm-s-default .cm-number{color:#164}.cm-s-default .cm-def{color:#00f}.cm-s-default .cm-variable-2{color:#05a}.cm-s-default .cm-variable-3{color:#085}.cm-s-default .cm-comment{color:#a50}.cm-s-default .cm-string{color:#a11}.cm-s-default .cm-string-2{color:#f50}.cm-s-default .cm-meta,.cm-s-default .cm-qualifier{color:#555}.cm-s-default .cm-builtin{color:#30a}.cm-s-default .cm-bracket{color:#997}.cm-s-default .cm-tag{color:#170}.cm-s-default .cm-attribute{color:#00c}.cm-s-default .cm-hr{color:#999}.cm-s-default .cm-link{color:#00c}.cm-invalidchar,.cm-s-default .cm-error{color:red}.CodeMirror-composing{border-bottom:2px solid}div.CodeMirror span.CodeMirror-matchingbracket{color:#0f0}div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#f22}.CodeMirror-matchingtag{background:rgba(255,150,0,.3)}.CodeMirror-activeline-background{background:#e8f2ff}.CodeMirror{position:relative;overflow:hidden;background:#fff}.CodeMirror-scroll{overflow:scroll!important;margin-bottom:-30px;margin-right:-30px;padding-bottom:30px;height:100%;outline:0;position:relative}.CodeMirror-sizer{position:relative;border-right:30px solid transparent}.CodeMirror-gutter-filler,.CodeMirror-hscrollbar,.CodeMirror-scrollbar-filler,.CodeMirror-vscrollbar{position:absolute;z-index:6;display:none}.CodeMirror-vscrollbar{right:0;top:0;overflow-x:hidden;overflow-y:scroll}.CodeMirror-hscrollbar{bottom:0;left:0;overflow-y:hidden;overflow-x:scroll}.CodeMirror-scrollbar-filler{right:0;bottom:0}.CodeMirror-gutter-filler{left:0;bottom:0}.CodeMirror-gutters{position:absolute;left:0;top:0;min-height:100%;z-index:3}.CodeMirror-gutter{white-space:normal;height:100%;display:inline-block;vertical-align:top;margin-bottom:-30px}.CodeMirror-gutter-wrapper{position:absolute;z-index:4;background:0 0!important;border:none!important;-webkit-user-select:none;-moz-user-select:none;user-select:none}.CodeMirror-gutter-background{position:absolute;top:0;bottom:0;z-index:4}.CodeMirror-gutter-elt{position:absolute;cursor:default;z-index:4}.CodeMirror-lines{cursor:text;min-height:1px}.CodeMirror pre{-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;border-width:0;background:0 0;font-family:inherit;font-size:inherit;margin:0;white-space:pre;word-wrap:normal;line-height:inherit;color:inherit;z-index:2;position:relative;overflow:visible;-webkit-tap-highlight-color:transparent;-webkit-font-variant-ligatures:none;font-variant-ligatures:none}.CodeMirror-wrap pre{word-wrap:break-word;white-space:pre-wrap;word-break:normal}.CodeMirror-linebackground{position:absolute;left:0;right:0;top:0;bottom:0;z-index:0}.CodeMirror-linewidget{position:relative;z-index:2;overflow:auto}.CodeMirror-code{outline:0}.CodeMirror-gutter,.CodeMirror-gutters,.CodeMirror-linenumber,.CodeMirror-scroll,.CodeMirror-sizer{-moz-box-sizing:content-box;box-sizing:content-box}.CodeMirror-measure{position:absolute;width:100%;height:0;overflow:hidden;visibility:hidden}.CodeMirror-cursor{position:absolute;pointer-events:none}.CodeMirror-measure pre{position:static}div.CodeMirror-cursors{visibility:hidden;position:relative;z-index:3}.CodeMirror-focused div.CodeMirror-cursors,div.CodeMirror-dragcursors{visibility:visible}.CodeMirror-selected{background:#d9d9d9}.CodeMirror-focused .CodeMirror-selected,.CodeMirror-line::selection,.CodeMirror-line>span::selection,.CodeMirror-line>span>span::selection{background:#d7d4f0}.CodeMirror-crosshair{cursor:crosshair}.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}.cm-searching{background:#ffa;background:rgba(255,255,0,.4)}.cm-force-border{padding-right:.1px}@media print{.CodeMirror div.CodeMirror-cursors{visibility:hidden}}.cm-tab-wrap-hack:after{content:''}span.CodeMirror-selectedtext{background:0 0}
			${componentNameDash} .CodeMirror{
				height:100%;
			}
			${componentNameDash} .CodeMirror-lines {
				padding: 60px 10px 10px 0;
			}
			${componentNameDash} .CodeMirror-sizer[style*="margin-left: 0px;"] {
				padding-left: 20px;
			}
			.${componentNameDash}__actions {
				position:absolute;
				top:15px; right:0px;
				z-index:90;
				opacity:0;
				transition:all .1s ease-in-out;
			}
			.${componentNameDash}__actions button {
				background-color:transparent;
				background-repeat:no-repeat;
				background-size:12px;
				background-position:0 50%;
				padding:0 10px 0 20px;
				margin-left:10px;
				color: #37A0CE;
				outline:none;
				border:none;
				cursor:pointer;
				font-size:12px;
				font-family:monospace;
			}
			.${componentNameDash}__actions button:disabled {
				opacity:.65;
				color: #f2bc2b;
			}
			.${componentNameDash}__actions button.error {
				color: red;
			}
			.${componentNameDash}__actions button.success {
				color: #d2fc0f;
			}
			.${componentNameDash}__modes {
				margin-right: 10px;
			}
			.${componentNameDash}__name {
				box-sizing:border-box;
				position:absolute;
				top:0; left:0;
				padding:15px 20px 10px 20px;
				width:100%;
				z-index:10;
				display:block;
				font-size:16px;
				font-family:monospace;
			}
			@keyframes ${componentNameDash}-compiling {
			    0% {
			       left:0;
				   right:100%;
			    }
				50% {
					right:0;
				}
			    100% {
				   left:100%;
				   right:0;
			    }
			}
			@keyframes ${componentNameDash}-compiling-success {
				0% {
				   opacity:0;
				}
				50% {
					opacity:1;
				}
				100% {
					opacity:0;
				}
			}
			.${componentNameDash}--compiling .${componentNameDash}__name:before {
				content:"";
				display:block;
				position:absolute;
				bottom:0; left:0;
				height:1px;
				background: #f2bc2b;
				animation: ${componentNameDash}-compiling 1.5s ease-in-out infinite;
			}
			.${componentNameDash}--compiling-success .${componentNameDash}__name:before {
				content:"";
				display:block;
				position:absolute;
				bottom:0; left:0;
				right:0;
				height:1px;
				animation: ${componentNameDash}-compiling-success .8s cubic-bezier(0.275, 0.200, 0.090, 1);
				background: #d2fc0f;
			}
			.${componentNameDash}--compiling-error .${componentNameDash}__name:before {
				content:"";
				display:block;
				position:absolute;
				bottom:0; left:0;
				right:0;
				height:1px;
				background: red;
			}
			.${componentNameDash}__name:after {
				content:"";
				display:block;
				position:absolute;
				top:0; left:0;
				width:100%; height:100%;
				background:rgba(0,0,0,.1);
				mix-blend-mode:overlay;
				pointer-events:none;
			}
			.${componentNameDash}--compiling .${componentNameDash}__name:after {

			}
			.${componentNameDash}__copy {
				background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path fill='#37A0CE' d='M15.143 13.244l.837-2.244 2.698 5.641-5.678 2.502.805-2.23s-8.055-3.538-7.708-10.913c2.715 5.938 9.046 7.244 9.046 7.244zm8.857-7.244v18h-18v-6h-6v-18h18v6h6zm-2 2h-12.112c-.562-.578-1.08-1.243-1.521-2h7.633v-4h-14v14h4v-3.124c.6.961 1.287 1.823 2 2.576v6.548h14v-14z'/></svg>");
			}
			.${componentNameDash}__run {
				background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path fill='#37A0CE' d='M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm0-2C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zM9 17V7l9 5-9 5z'/></svg>");
			}
			.${componentNameDash}__name.cm-s-default {
				background-color: #f7f7f7;
				border-bottom: 1px solid #ddd;
			}
			.${componentNameDash}--compiling .${componentNameDash}__actions,
			.${componentNameDash}--compiling-success .${componentNameDash}__actions,
			${componentNameDash}:hover .${componentNameDash}__actions {
				opacity:1;
				right:10px;
			}
		`;
	}

	/**
	 * Component will mount
	 * @definition 		SWebcomponent.componentWillMount
	 * @protected
	 */
	componentWillMount() {
		super.componentWillMount();
		this._updateTimeout = null;
		this._refs = {};
		// handle language alias
		if ( ! this.props.mode) {
			this.props.mode = this.props.language;
		}
	}

	/**
	 * Component mount
	 * @definition 		SWebcomponent.componentMount
	 * @protected
	 */
	componentMount() {
		super.componentMount();

		const mousetrap = new __mousetrap(this);
		// console.log('mouise', __mousetrap);
		mousetrap.bind('mod+s', () => {
			if ( ! this.isCompiling()) {
				clearTimeout(this._updateTimeout);
				this._processCode();
			}
			return false;
		});

		// get the content
		let content = this.innerHTML;
		const firstChildElm = this.querySelector('*:first-child');
		if (firstChildElm && firstChildElm.nodeName && firstChildElm.nodeName === 'TEMPLATE') {
			content = firstChildElm.innerHTML;
		}
		this.innerHTML = '';
		this._refs.name = document.createElement('span');
		this._refs.name.className = `${this._componentNameDash}__name cm-s-${this.props.theme}`;
		this._refs.actions = document.createElement('div');
		this._refs.actions.className = `${this._componentNameDash}__actions`;
		this._refs.run = document.createElement('button');
		this._refs.run.className = `${this._componentNameDash}__run`;
		this._refs.run.innerHTML = 'Run';
		this._refs.copy = document.createElement('button');
		this._refs.copy.className = `${this._componentNameDash}__copy`;
		this._refs.copy.innerHTML = 'Copy to clipboard';

		// init accept
		this._initAccept();

		// append elements to actions
		this._refs.actions.appendChild(this._refs.copy);
		if (this.props.updateOn === 'run') {
			this._refs.actions.appendChild(this._refs.run);
		}
		// append elements to the item itself
		this.appendChild(this._refs.name);
		this.appendChild(this._refs.actions);

		// set the name
		this._refs.name.innerHTML = this.props.title || this.props.id || this.props.language || this.props.mode;

		// init clipboard
		this._initClipboard();

		// init codemirror
		const initialProps = Object.assign({}, this.props);
		if (initialProps.mode === 'html') initialProps.mode = 'htmlmixed';
		this._codemirror = new Codemirror(this, {
			value : content.trim(),
			viewportMargin : Infinity,
			...initialProps
		});

		// get some codemirror elements
		this._codemirrorSizerElm = this.querySelector('.CodeMirror-sizer');
		this._codemirrorElm = this.querySelector('.CodeMirror');

		// auto format
		this._autoFormatCode();

		// handle update
		switch(this.props.updateOn) {
			case 'run':
				// init run
				this._initRun();
			break;
			case 'change':
			default:
				// listen editor change
				this._codemirror.on('change', (cm, change) => {
					clearTimeout(this._updateTimeout);
					this._updateTimeout = setTimeout(this._processCode.bind(this), this.props.updateTimeout);
				});
			break;
		}
		// first update
		this._processCode();
	}

	/**
	 * Component will receive prop
	 * @definition 		SWebComponent.componentWillReceiveProp
	 * @protected
	 */
	componentWillReceiveProp(name, newVal, oldVal) {
		switch(name) {
			case 'mode':
				// handle html as parameter
				let mode = newVal;
				if (mode === 'html') {
					mode = 'htmlmixed'
				}
				this._codemirror.setOption('mode', mode);
				this._autoFormatCode();
				if (this._refs.modes) {
					this._refs.modes.value = newVal;
				}
				this.setProp('language', newVal);
			break;
			case 'language':
				this.setProp('mode', newVal);
			break;
			default:
				// try to set to codemirror the new prop
				try {
					this._codemirror.setOption(name, newVal);
				} catch(e) {}
			break;
		}
	}

	/**
	 * Refresh the editor
	 */
	refresh() {
		this._codemirror.refresh();
	}

	/**
	 * Init run
	 */
	_initRun() {
		this._refs.run.addEventListener('click', (e) => {
			// notify udpate
			this._processCode();
		});
	}

	/**
	 * Init accept
	 */
	_initAccept() {
		if ( ! this.props.accept) return;
		// split accept
		let modes = this.props.accept;
		if (typeof(modes) === 'string') {
			modes = modes.split(',').map((mode) => {
				return mode.trim();
			});
		}
		// create the select
		this._refs.modes = document.createElement('select');
		this._refs.modes.className = `${this._componentNameDash}__modes`;
		// add options
		modes.forEach((mode) => {
			const option = document.createElement('option');
			option.value = mode;
			option.innerHTML = mode;
			// append to select
			this._refs.modes.appendChild(option);
		});
		// append select to actions
		this._refs.actions.appendChild(this._refs.modes);
		// listen for change
		this._refs.modes.addEventListener('change', (e) => {
			let mode = e.target.value;
			if (mode === 'html') { mode = 'htmlmixed'; }
			// set the mode
			this.setProp('mode', mode);
		});
	}

	/**
	 * Init clipboard
	 */
	_initClipboard() {
		this._clipboard = new Clipboard(this._refs.copy, {
			text : (trigger) => {
				this._refs.copy.classList.add('success');
				this._refs.copy.innerHTML = 'Copied!';
				setTimeout(() => {
					this._refs.copy.classList.remove('success');
					this._refs.copy.innerHTML = 'Copy to clipboard';
				}, 1000);
				return this._codemirror.getValue();
			}
		});
	}

	/**
	 * Auto format code
	 */
	_autoFormatCode() {
		var totalLines = this._codemirror.lineCount();
		this._codemirror.autoFormatRange({line:0, ch:0}, {line:totalLines});
	}

	/**
	 * Process code
	 * @return  	{Promise}		A promise with the processes code
	 */
	_processCode() {
		const promise = new Promise((resolve, reject) => {
			// compile options
			let compileOptions = {};
			if (this.props.compileOptions) {
				compileOptions = compileOptions[this.props.language] || compileOptions;
			}
			// check if need to compile
			if (this.props.compile) {
				// handle run button
				this._refs.run.innerHTML = 'Compiling...';
				this._refs.run.disabled = true;
				// launch a compileStart event
				this.dispatchComponentEvent('compileStart');
				// add class
				this.addComponentClass(this, null, 'compiling');
				// compile
				const fn = this.props.compile.bind(this);
				resolve(fn(this.value, this.language, compileOptions));
			} else {
				resolve(this.value, this.language, compileOptions);
			}
		});
		promise.then((code) => {
			// handle run button
			this._refs.run.disabled = false;
			if (this.props.compile) {
				this._refs.run.innerHTML = 'Compiled!';
				// remove class
				this.removeComponentClass(this, null, 'compiling');
				// add success class
				this.addComponentClass(this, null, 'compiling-success');
			}
			this._notifyUpdate(code);
			this._refs.run.classList.add('success');
			setTimeout(() => {
				this._refs.run.innerHTML = 'Run';
				this._refs.run.classList.remove('success');
				// add success class
				this.removeComponentClass(this, null, 'compiling-success');
			}, 800);
			// compile end event
			if (this.props.compile) {
				// launch a compileStart event
				this.dispatchComponentEvent('compileEnd', {
					language : (typeof(code) === 'string') ? this.props.language : code.language,
					data : (typeof(code) === 'string') ? code : code.data
				});
			}
		}, (error) => {
			this._refs.run.innerHTML = 'Error while compiling...';
			console.error('Compiling error', error);
			if (this.props.compile) {
				this._refs.run.innerHTML = 'Compiled!';
				// remove class
				this.removeComponentClass(this, null, 'compiling');
				// add success class
				this.addComponentClass(this, null, 'compiling-error');
			}
			this._refs.run.classList.add('error');
			this._refs.run.innerHTML = 'Run';
			this._refs.run.disabled = false;
			setTimeout(() => {
				this._refs.run.classList.remove('error');
				// add success class
				this.removeComponentClass(this, null, 'compiling-error');
			}, 800);
			// dispatch a compile error
			this.dispatchComponentEvent('compileError', {
				error : error
			});
		});
		// return promise
		return promise;
	}

	/**
	 * Notify that an update has been made in the editor
	 */
	_notifyUpdate(code) {
		// dispatch an event
		this.dispatchComponentEvent('update', {
			language : (typeof(code) === 'string') ? this.props.language : code.language,
			data : (typeof(code) === 'string') ? code : code.data
		});
		// on update callback
		this.props.onUpdate && this.props.onUpdate({
			language : (typeof(code) === 'string') ? this.props.language : code.language,
			data : (typeof(code) === 'string') ? code : code.data
		});
	}

	/**
	 * Check if is compiling or not
	 * @return 		{Boolean} 	Return if the editor is in compile phase
	 */
	isCompiling() {
		return this.classList.contains(`${this._componentNameDash}--compiling`);
	}

	/**
	 * Get editor value
	 * @type 	{String}
	 */
	get value() {
		return this._codemirror.getValue();
	}
}
