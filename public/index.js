const EventEmitter = require('events');
const emitter = new EventEmitter();

// emitter.on('logged', (e) => {
//     console.log("Logging raised: With ", e);
// });

// emitter.emit('logged', {username:"Topia", password:"Pa&&w0rd"})
// emitter.emit('logged', {username:"Topia", password:"Pa&&w0rd"})
// emitter.emit('logged', {username:"Topia", password:"Pa&&w0rd"})
// emitter.emit('logged', {username:"Topia", password:"Pa&&w0rd"})
// emitter.emit('logged', {username:"Topia", password:"Pa&&w0rd"})

// class Logger extends EventEmitter {
//     log(msg) {
//         this.emit('message', { id: null, msg});
//     }
// }

// const logger = new Logger();

// logger.on('message', data => console.log("called ", data));

// logger.log('hi')



/* OS

*/
// const os = require('os')
//  console.log(os.uptime(), os.homedir());

/*

FILE SYSTEMS 
*reading files

*/

// const fs = require('fs');
// fs.readFile('./blog2.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })
/*
* Write files
*/
// fs.writeFile('./blog2.txt', '{Hello There}', () => {
//     console.log("File Written");
// })

/*
*Directories
*/

// if(fs.existsSync('./assets')){
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log("Something Happened");
//         }
//         console.log("removed succesfully");
//     })
// }else{
//     fs.mkdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log("Folder created");
//     })
//  }

/*
*Deleting files
*/
// if(fs.existsSync("./delete.txt")){
//     fs.unlink("./delete.txt", (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log("Deleted");
//     })
// }
// else{
//     console.log("Does not exist");
//     fs.writeFile('./delete.txt','Learn Node FS module', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log("Created");
//     })
//     console.log("Creating it");
// }
// console.log("Here first");

// const readStream = fs.createReadStream('./blog4.txt', { encoding: 'utf-8'})
// const writeStream = fs.WriteStream('./blog5.txt')
// readStream.on('data', (chunk) => {
//     console.log("---------------------NEW CHUNK------------------------");
//     console.log(chunk);
//     writeStream.write('\NEW CHUNK\n')
//     writeStream.write(chunk)
// })


    //piping

    // readStream.pipe(writeStream);


    /*
    * url
    */
//    const url = require('url');
//    url.fileURLToPath

