const express = require('express')
const { use } = require('express/lib/router')
const router = express.Router()
const usersController = require('../controllers/users_controllers')


router.post('/user/create', usersController.createNewFundUser)

router.get('user/fundaccount:id', usersController.fundaccount)

router.post('/user/transferfund', usersController.transferfund)

router.get('.user/confirmTransfer', usersController.comfirmTransferToOtherBanks)

router.get('/user:id', usersController.withdrawalfund)

module.exports = router