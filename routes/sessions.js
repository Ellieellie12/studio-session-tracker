import { Router } from 'express'
import * as sessionsCtrl from '../controllers/sessions.js'
import { isLoggedIn } from '../middleware/middleware.js'
// import { session } from 'passport'


const router = Router()

// localhost:3000/sessions
router.get('/', isLoggedIn, sessionsCtrl.index)

// localhost:3000/sessions/new
router.get('/new', isLoggedIn, sessionsCtrl.new)

// localhost:3000/sessions
router.post('/', isLoggedIn, sessionsCtrl.create)

// localhost:3000/sessions
router.get('/:sessionId', isLoggedIn, sessionsCtrl.show)

// localhost:3000/sessions/sessionId/edit
router.get('/:sessionId/edit', isLoggedIn, sessionsCtrl.edit)

// localhost:3000/sessions/sessionsId
router.put('/:sessionId', isLoggedIn, sessionsCtrl.update)

// localhost:3000/sessions/sessionsId
router.delete('/:sessionId', isLoggedIn, sessionsCtrl.delete)

export {
  router
}
