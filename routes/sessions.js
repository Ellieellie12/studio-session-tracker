import { Router } from 'express'
import * as sessionsCtrl from '../controllers/sessions.js'


const router = Router()
// localhost:3000/sessions/new
router.get('/new', sessionsCtrl.new)


export {
  router
}
