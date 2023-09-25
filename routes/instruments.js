import { Router } from 'express'
import * as instrumentsCtrl from '../controllers/instruments.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/new', isLoggedIn, instrumentsCtrl.new)
router.post('/', instrumentsCtrl.create)



export {
  router
}