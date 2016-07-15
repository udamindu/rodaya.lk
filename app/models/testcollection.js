// Collection: testcollection   rodaya.lk
// actual db Collection: testcollections
var mongoose = require('mongoose');

module.exports = mongoose.model('testcollection', {
	name : {type : String, default: ''}
});