import { Router } from 'express'
import * as sessionsCtrl from '../controllers/sessions.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', isLoggedIn, sessionsCtrl.index)
router.get('/new', isLoggedIn, sessionsCtrl.new)
router.post('/', isLoggedIn, sessionsCtrl.create)
router.get('/:sessionId', isLoggedIn, sessionsCtrl.show)
router.get('/:sessionId/edit', isLoggedIn, sessionsCtrl.edit)
router.put('/:sessionId', isLoggedIn, sessionsCtrl.update)
router.post('/:sessionId/instruments', sessionsCtrl.addInstrument)
router.delete('/:sessionId', isLoggedIn, sessionsCtrl.delete)

export {
  router
}
