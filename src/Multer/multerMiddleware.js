module.exports = {
    upload: require('multer')({
            storage: require('./multerStorage'),
            limits: {fileSize: 1024 * 1024 * 10}
        }
    ).single('file'),
    MulterError : require('multer').MulterError
};