var express = require('express');
var router = express.Router();

var list1 = require('../data/list.json')
var list2 = require('../data/list2.json')
var list3 = require('../data/list3.json')
var hScroll = require('../data/hScroll.json')
var line1 = require('../data/line1.json')
var line2 = require('../data/line2.json')
var line3 = require('../data/line3.json')

var cityList1 = require('../data/cityList1.json')
var cityList2 = require('../data/cityList2.json')

var tuan = require('../data/tuan.json')
/* GET home page. */

router.get('/api/cityList0', function(req, res, next) {
    res.json({
        cityList1
  })
});

router.get('/api/cityList1', function(req, res, next) {
    res.json({
        cityList2
  })
});

router.get('/api/list1', function(req, res, next) {
  	res.json({
        data: list1
	})
});

router.get('/api/list2', function(req, res, next) {
    res.json({
        data: list2
	})
});

router.get('/api/list3', function(req, res, next) {
	res.json({
      data: list3
  	})
});

router.get('/api/hScroll', function(req, res, next) {
	res.json({
      hScroll
  	})
});

router.get('/api/line1', function(req, res, next) {
  res.json({
      line1
    })
});

router.get('/api/line2', function(req, res, next) {
  res.json({
      line2
    })
});

router.get('/api/line3', function(req, res, next) {
  res.json({
      line3
    })
});

router.get('/api/tuan', function(req, res, next) {
  res.json({
      tuan
    })
});
module.exports = router;
