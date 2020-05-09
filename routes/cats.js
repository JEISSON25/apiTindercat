var router = require('express').Router()
const {
  login, signup, catList,
  liked, unliked, addInterest,
  removeInterest, updatePreferences
} = require('./../controllers/catsController')

router.get('/login', login)
router.post('/signup', signup)
router.get('/', catList) // devolver la lista de los gatos
router.post('/liked', liked)
router.post('/unliked', unliked)
router.post('/interest', addInterest)
router.delete('/interest', removeInterest)
<<<<<<< HEAD
router.put('preferences', updatePreferences)
=======
router.put('/preferences', updatePreferences)
>>>>>>> 2aaa5696a83cdac87952b8fdb6044f4510b1c0e0

module.exports = router
