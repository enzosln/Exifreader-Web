const {existsSync} = require('fs');
const { exec} = require('child_process');
const {
    NonAuthorizedPath,
    ExiftoolError,
    FileNotExists
} = require('../Error/Errors');

module.exports = (path,callback)=>{
    if (path.includes('..')){
        callback(new NonAuthorizedPath(),null);
    }
    if (!existsSync(path)){
        callback(new FileNotExists(path),null);
    }
    try{
        exec("LC_ALL=C exiftool -U '"+path+"' -json",(e,stdout,stderr)=>{
            if (stderr){
                callback(new ExiftoolError(stderr),null);
            }
            callback(null,JSON.parse(stdout)[0]);
        })
    }catch (e) {
        console.error(e)
        return e;
    }
}
