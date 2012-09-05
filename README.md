cz-ipgeo
========

ipgeo use cz88 database 使用纯真数据库的IP地址信息查询

```
var ipgeo = require('node-czip');

ipgeo.loadDataFile('qqwry.dat');
console.dir(ipgeo.lookup('127.0.0.1'));
```