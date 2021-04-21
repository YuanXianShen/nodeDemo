// const a = require('./a');
// console.log(a.add(2, 3));
// const a = require('./a');
// console.log(a.aa('zhangsan'));
const fs = require('fs');
fs.readFile('./a.js', 'utf-8', (err, doc) => {
    if (err == null) {
        console.log(doc);
    } else {
        console.log('错误');
    }
})