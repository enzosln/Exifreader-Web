const {v4} = require('uuid');


module.exports = require('multer').diskStorage({
    destination: (req, file, callback)=> {
        callback(null, require('path').resolve(__dirname, "../../files_received/"));
        //callback(null, require('path').resolve("/tmp/"));
    }, filename: (req, file, callback) => {
        callback(null, v4() +"_"+ req.ip + "_" + file.originalname);
    },
});