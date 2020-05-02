var router = require('express').Router()
const { login, signup, catList } = require('./../controllers/catsController')

router.get('/login', login)
router.post('/signup', signup)
router.get('/', catList)
router.post('/like',)
router.post('/unlike')
router.post('/interest')
router.delete('/interest')
router.put('/interest')

module.exports = router
