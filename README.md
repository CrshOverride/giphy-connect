# Giphy-connect

Welcome to Giphy Connect, the social network for sharing your favorite gifs!

You can follow the directions below for starting the application locally. Two things before you start though:

1. Authentication with Facebook requires you to be using the giphyconnect.com domain name. You'll have to add the following to `/etc/hosts`: `127.0.0.1  giphyconnect.com`

2. All data is stored in localStorage and will persist between uses of the application. There is an initializer that should pre-load the data but, during local development, I've found the Ember Data Adapater to be a little buggy. The first time you load the application in the browser, you should get Users and Groups loaded. It may take a re-load of the application in the browser to get the Group Memberships loaded. If you're not seeing any users belonging to groups after that, you'll have to use your Developer Tools to delete anything in local storage with the following keys: `index-*`, `user-*`, `group-*`, and `group-membership-*`.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

