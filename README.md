# rexprouter
> **RE**cursive **EXPR**ess **ROUTER** boilerplate based on directory structure

## getting started
* `$ git clone https://github.com/jb-/rexprouter`
* `$ cd rexprouter`
* `$ npm install`
* `$ npm start` to run the server on port 3000 (port number increases if the port is already in use)

## adding routes (recursively)
* `$ mkdir routes` in the root directory of `rexprouter`
* `$ cd routes`
* `$ git clone https://github.com/jb-/rexprouter ${NEW_ROUTE_PATH}`
* `$ npm install`
* restart the server
* open http://localhost:3000/${NEW_ROUTE_PATH} then it'll respond with url
