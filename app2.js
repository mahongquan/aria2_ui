#!/usr/bin/env node
//var exec = require('child_process').exec;
var static = require('./node-static');
var file = new static.Server('./');
var path = require('path');
var fs=require('fs')
var server=require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(8000);
console.log("listen at 8000");
