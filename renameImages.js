const fs = require('fs');

const dir = './src/assets/HoodNationalForest';

let i = 0;

const directory = fs.readdirSync(dir);

directory.forEach( function(file) {
  console.log(file);
  fs.renameSync(dir + '\\' + file, dir + '\\' + `IMG_${i}.JPG`);
  i++;
})
