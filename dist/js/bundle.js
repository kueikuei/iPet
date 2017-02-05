(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var REQUEST_URL = 'http://163.29.157.32:8080/dataset/6a3e862a-e1cb-4e44-b989-d35609559463/resource/f4a75ba9-7721-4363-884d-c3820b0b917c/download/393625397fc043188a3f8237c1da1c6f.json';
var data = '';
var str = '';
var xhr = new XMLHttpRequest();

// xhr.open('GET',REQUEST_URL);
// xhr.send();

// xhr.onreadystatechange=function(){


//   if(xhr.readyState===XMLHttpRequest.DONE){
//       data = JSON.parse(xhr.responseText);
//       dataList();
//   };
// }

//Asynchronous

function fetchDemo() {
  if (self.fetch) {
    fetch(REQUEST_URL).then(function (response) {
      // fetch(REQUEST_URL).then((response) => {
      return response.json();
    }).then(function (json) {
      data = json;
      dataList();
    });
  } else {
    xhr.open('GET', REQUEST_URL);
    xhr.send();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        data = JSON.parse(xhr.responseText);
        dataList();
      };
    };
  }
}

//put data into HTML
var dataList = function dataList() {
  console.log(data);
  data.map(function (key, index) {
    //ES6 把前端變數丟入

    str += '\n      <div class="col-sm-6 col-md-4">\n        <div class="thumbnail">\n          <img class="img-circle" src="' + key.ImageName + '" alt="...">\n          <div class="caption">\n            <h3>' + key.Variety + ' ' + key.Name + ' <span class="label label-default">' + key.HairType + '</span></h3>\n            <p class="ellipsis">' + key.Resettlement + '</p>\n            <p><a href="tel:' + key.Phone + '" class="btn btn-primary" role="button">\u806F\u7D61\u96FB\u8A71</a> <a href="mailto:' + key.Email + '" class="btn btn-default" role="button">\u806F\u7D61\u4FE1\u7BB1</a></p>\n          </div>\n        </div>\n      </div>\n    ';
  });
  document.querySelector('#data-list').innerHTML = str;
};

fetchDemo();

},{}]},{},[1]);
