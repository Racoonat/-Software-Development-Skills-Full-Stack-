//import fs from 'fs';
import fs from 'fs/promises';


/*//readFile() - callBack
fs.readFile('./test.txt','utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});

//readFileSync() - Synchronus version
const data = fs.readFileSync('./test.txt','utf8');
console.log(data);*/

//readFile() - Promise .then()
/*fs.readFile('./test.txt','utf8')
    .then((data)=>console.log(data))
    .catch((err)=> console.log(err));*/

//  readFile() - async/await
const readFile = async ()=>{
    try{
        const data =await fs.readFile('./test.txt','utf8');
        console.log(data);
    }catch(error){
        console.log(error);
    }
}

//WriteFile()
const writeFile = async() => {
    try{
        await fs.writeFile('./test.txt','Hello i am writing to this File');
        console.log('File Writen to...');
    }catch(error){
        console.log(error);
    }
};

//appendFile()
const appenFile = async()=>{
    try{
        await fs.appendFile('./test.txt','\n This is Appended text');
        console.log('Filed appended to...');
    }catch(error){
        console.log(error);
    }
}

writeFile();
appenFile();
readFile();