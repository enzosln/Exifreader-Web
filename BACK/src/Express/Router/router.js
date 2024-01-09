const router = require('express').Router()
const {upload, MulterError} = require('../../Multer/multerMiddleware');
const exiftool = require('../../Exiftool/exiftool');
const path = require('path')
router.get('/', (req, res) => {
    res.sendFile(path.resolve('../FRONT/index.html'))
})
router.get('/monip', (request, response) => response.send(request.ip))

router.post('/api/getMetadatas', (req, res) => {
    upload(req, res, (err) => {
        if (err instanceof MulterError && err.code === 'LIMIT_FILE_SIZE') {
            res.status(413).send({error: 'FILE_TOO_LARGE'});
        } else if (err) {
            return res.status(500).send({error: 'SERVER_ERROR'});
        }
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

                    res.json({...result,Filename : req.file.originalname})
                } else {
                    console.error(e.message)
                    res.status(500).send({error: 'SERVER_ERROR'});
                }
            })
        }
    })
})

module.exports = router;