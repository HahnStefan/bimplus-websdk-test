# bimplus-websdk-test

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Bimplus Web SDK
Test of Bimplus Web SDK 
https://doc.allplan.com/display/bimpluspublic/Bimplus+Web+SDK+Reference

## Steps creating the test app

* `Create new test project`
> ember new bimplus-websdk-test

* `Install bimplus websdk`
> npm install bimplus-websdk

* `Import the node module`
for more information see:
https://davidtang.io/2018/04/30/importing-from-node_modules-in-ember.html

`  app.import('node_modules/bimplus-websdk/dist/bimplus-websdk.js', {`
`    using: [`
`      { transformation: 'amd', as: 'webapi' }`
`    ]`

* `Create a Ember login route and a login controller`
> ember g route login
> ember g controller login


* `Requirements for websdk`
To use this library you need to have installed these packages :
jQuery min. ver. 1.12. https://jquery.com/

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd bimplus-websdk-test`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
