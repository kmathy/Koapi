# Koapi - REST API boilerplate made with Koa.js (v2+)

![](https://img.shields.io/badge/Version-0.4.0-blue.svg)
[![GitHub license](https://img.shields.io/badge/license-Apache%202-blue.svg)](https://raw.githubusercontent.com/kmathy/Koapi/master/LICENSE)
<a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
[![Dependency Status](https://www.versioneye.com/user/projects/597afffe6725bd0040fda90f/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/597afffe6725bd0040fda90f)
[![Code Climate](https://codeclimate.com/github/kmathy/Koapi/badges/gpa.svg)](https://codeclimate.com/github/kmathy/Koapi)

## Purpose
There is too few projects using the new version of Koa and with a list of updated plugins, dependencies,... 
This repository is an attempt to create a good and reusable boilerplate for various starting projects in API.
<br>
Don't hesitate to send an issue or a pull request to maintain this repository healthy!

## features
- **Mongoose** - to manage database in Mongo
- **Webpack** - to create builds (Uglify.js, Compression plugin)
- **Yarn** - for fast installation
- **Eslint + Standard style** - Standard style for code consistency
- **Babel** - to parse files in es5 + keep sourceMaps
- **Nodemon** - to reload automatically the server in development
- **Authentication using JWT and bcrypt to encrypt password**
- **Koa-respond** - to send responses
- Basic securities (See [koa-helmet](https://github.com/venables/koa-helmet#usage))
- Basic routing configuration ([koa-router](https://github.com/alexmingoia/koa-router))
- Basic User model

## How to install it?
* Node >= 7.6 [Link to node Latest Features](https://nodejs.org/en/download/current/)
* ``git clone https://github.com/kmathy/Koapi.git``
* ``yarn`` (or ``npm install`` if you want)
* ``npm start`` to launch server

## ROADMAP
To have a global view of our roadmap, see [HERE](ROADMAP.md)
