import { Router } from 'express'

import * as userServices from 'services/user'

const router = Router()

router
  .route('/')
  .get(async (req, res, next) => {
    try {
      const users = await userServices.listAllUsers()
      res.json({ users })
    } catch (err) {
      next(err)
    }
  })
  .post(async (req, res, next) => {
    try {
      const userInfo = req.body
      const user = await userServices.addUser(userInfo)
      res.json({ user })
    } catch (err) {
      next(err)
    }
  })

export default router
