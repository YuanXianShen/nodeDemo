const content = `<h3>我是要写入的内容</h3>`;
const fs = require('fs');
fs.writeFile('./index.html', content, function (err, doc) {
    if (err != null) {
        console.log(err);
        return;
    }
    console.log('写入成功');
})