// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
	apiKey: "AIzaSyBuDCJZ6iwNgIy0gNz2VFGex_D6IS8kd_I",
    authDomain: "fir-fotos-b3e08.firebaseapp.com",
    databaseURL: "https://fir-fotos-b3e08.firebaseio.com",
    projectId: "firebasefotos",
    storageBucket: "firebasefotos.appspot.com",
    messagingSenderId: "229927263828"
  }
};
