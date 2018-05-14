# webpack multistep bug

## Instructions

* Run `yarn install` or `npm install`
* Run the script `start`
* Run the script `start:server` in another shell instance
* Go to `localhost:3000`
* Edit the render of the file `src/components/App/App.js` (in my case, I included the letter "a" between the `<div>` and the `<Routes />` component)
* See the app crash and the following error on the console `Uncaught ReferenceError: webpackHotUpdate is not defined`
