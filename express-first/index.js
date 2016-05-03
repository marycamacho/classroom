/**
 * Created by mary on 5/3/2016.
 */

;(function(){

    "use strict";
    var fs = require('fs');
    var express = require('express');
    var handlebars = require ('express-handlebars');

    var app = express();

    app.engine('handlebars', handlebars({defaultLayout: "main"}));
    app.set('view engine', 'handlebars');


    app.use(express.static('public'));

    app.get("/", function(req, res) {
        res.render('index', {
            name: "Mary"
        });

    });

    app.get('/cats', function(req, res) {
        res.send('So I hear you like cats');
    });

    app.use(express.static('public'));

    app.listen(3000, function() {
        console.log('server started');
    });


}());