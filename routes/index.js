var router = require('koa-router')();
var path = require('path');
var fs = require('fs');

/* GET home page. */
router.get('/', function* (next) {
	this.body = fs.createReadStream(path.join(__dirname, '../public/index.html'));
	this.type = 'html';
});

module.exports = router;
