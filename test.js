var ipgeo = require('./index.js');

ipgeo.loadDataFile('qqwry.dat');
console.dir(ipgeo.lookup('127.0.0.1'));