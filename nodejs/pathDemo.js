import path, { dirname } from 'path';
import url from 'url';

const filepath ='./dir1/dir2/test.txt';

// basename()
console.log(path.basename(filepath));

// dirname()
console.log(path.dirname(filepath));

// extname()
console.log(path.extname(filepath));

// parse()
console.log(path.parse(filepath));


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename,__dirname);

// join()
const filepath2 = path.join(__dirname,'dir1','dir2','test.txt');
console.log(path.dirname(filepath2));

// resolve()
const filepath3 = path.resolve(__dirname,'dir1','dir2','test.txt');
console.log(path.dirname(filepath3));