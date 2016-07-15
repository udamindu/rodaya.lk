
var testcollectiondb = require('./models/testcollection');
module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
    
    // route to handle retrieving goes here (app.get)
    app.get('/api/testcollections', function(req, res) {
        // use mongoose to get all testcollection records in the database
        testcollectiondb.find(function(err, testcollections) {
            
            // nothing after res.send(err) will execute if thers an error
            if (err)
                res.send(err);

            res.json(testcollections); // return all testcollections in JSON format
        });
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};