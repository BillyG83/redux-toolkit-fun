# redux-toolkit-fun
 
# redux-fun
 
Just some fun comparing this same app:
https://github.com/BillyG83/redux-fun

but this time using Redux Toolkit
https://redux-toolkit.js.org/usage/usage-guide

## to run the app
- clone repo
- cd to project directory
- run `npm install`
- run `npm run start`
- open in Chrome `http://localhost:9000/`

## Info and whats changed

- index.js is a super basic html element setup that uses the Redux actions / WHATS NEW: Now the actions are passed an object with key and value
- Actions.js has all the actions and what payload each of them take / WHATS NEW: Much less code no 'type' detection needed for createAction
- ActionTypes.js are basically just strings, which act like identifiers for the actions saved as variables to be called Actions.js and Store.js / WHATS NEW: Nothing, its 100% the same
- Reducer.js is where the magic happens, it detects the action type and returns and new state object (never mutated) with the changes needed to the data / WHATS NEW: Data magic, notice I pushed to an Array and mutated an object property, breaking all the rules =]
- Store.js initializes the Redux createStore and has config for the Redux Chrome middle wear / WHATS NEW: Pretty much the same but we user toolkit to create our store now