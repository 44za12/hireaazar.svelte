import App from './App.svelte';

const app = new App({
	target: document.body,
	// _props: {
	// 	name: 'world'
	// },
	// get props() {
	// 	return this._props;
	// },
	// set props(value) {
	// 	this._props = value;
	// },
});

export default app;