import { Router } from 'express'
import * as sessionsCtrl from '../controllers/sessions.js'
import { isLoggedIn } from '../middleware/middleware.js'


const router = Router()

// localhost:3000/sessions
router.get('/', isLoggedIn, sessionsCtrl.index)
// localhost:3000/sessions/new
router.get('/new', sessionsCtrl.new)

// localhost:3000/sessions
router.post('/', isLoggedIn, sessionsCtrl.create)

router.get('/:sessionId', sessionsCtrl.show)

export {
  router
}
