const router = require('express').Router()
const {upload, MulterError} = require('../../Multer/multerMiddleware');
const exiftool = require('../../Exiftool/exiftool');
const {resolve} = require('path')
router.get('/', (req, res) => {
    res.sendFile(resolve(__dirname + "../../../../../FRONT/index.html"))
})
router.get('/monip', (request, response) => response.send(request.ip))

router.post('/api/getMetadatas', (req, res) => {
    upload(req, res, (err) => {
        if (err instanceof MulterError && err.code === 'LIMIT_FILE_SIZE') {
            res.status(413).json({error: 'FILE_TOO_LARGE'});
        } else if (err) {
            return res.status(500).json({error: 'SERVER_ERROR'});
        }
        console.log(req.file);
        if (req.file) {
            exiftool(req.file.path, (e, result) => {
                if (!e) {
                    delete result['Directory'];
                    delete result['SourceFile'];
                    delete result['ExifToolVersion'];
                    for (let cle in result) {
                        if (cle.startsWith('File')) {
                            delete result[cle];
                        }
                    }
                    res.json({Filename: req.file.originalname, ...result})
                } else {
                    console.error(e.message)
                    res.status(500).json({error: 'SERVER_ERROR'});
                }
            })
        }
    })
})

module.exports = router;