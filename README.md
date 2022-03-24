# iprice-test

## Setup development env
1. Run `yarn install` on repo root
## Run instructions
1. Run `yarn start <...args>` on the repo root
eg: `yarn start hello world`

## Run unit tests
1. Run `yarn test` on the repo root

## To add new text output strategies
1. Define a new class and extend it with `IOutputStrategy`
2. Override the `output()` function and write custom strategy code. Return the text that needs to be printed in the console.
3. Pass an instance of the new strategy as an array to the TextOutputter constructor,
eg: If your strategy was `LowerCaseOutput`, you can pass to TextOutputter as follows 
`new TextOutputter([new LowerCaseOutput()])`
see `index.js` in `src` folder for working example.

