requestAnimationFrame('dotenv').config()
const res = require('express/lib/response')
const Joi = require('Joi')
const { v4: uuidv4 } = require('uuid')


const transferfund = (req, res) => {
    const transferSchema = Joi.object({
        accountName: Joi.string().required(),
        accountNumber: Joi.string().object(),
        password: Joi.string().required(),
    })

    .then(transferAmountisEmpty =>{
        if(transferAmountisEmpty == ""){
            throw new Error("Please select amount to transfer")
        }
        
        const transferAmountReturnErr = transfer_fundService.creatTransferErrRes(req.body)
        if(transferAmountReturnErr.Error){
            throw new Error("Sorry, Cannot perform this transfer")
        }
        res.status(200).send({
            status: true,
            message: "successful",
            data: transferAmountReturnErr.response.data
        })
    })
    .catch(checkUserErr => {
             res.status(200).send({
                status: false,
                message:  "Service timed out",
                response: []
         })
     })
    
}

const fundaccount = (req, res) => {

    const {accountNumber, password} = req.body
    .then(checkUserAccountIfEnable => {
        if(checkUserAccountIfEnable != accountNumber){
            throw new Error("Unable to identify. wrong cridentials supplied")
        }
    })
    .then(checkUserAccountIfEnable => {
        if(checkUserAccountIfEnable === accountNumber && checkUserAccountIfEnable === password){
           res.status(400).send({
               status: true,
               message: "Confirmed, you can now transfer"
           })     
        }
    })
    .catch(err => {
        res.status(201).send({
            status: false,
            message: "service not allow"
        })
    }) 
}

const comfirmTransferToOtherBanks = () => {
    const { accountName, accountNumber, password} = req.body

    .then(checkIfUserDetailsValidation => {
       if(checkIfUserDetailsValidation !=  accountName || accountNumber && password){
        if(checkIfUserDetailsValidation != true){
            throw new Error("Cannot complete this transaction")
            }
            res.status(200).send({
                status: true,
                message: "Invalid Request"
            })
       }
    })
    .then(UserDetailverified => {
        if(UserDetailverified == accountNumber && password){
            res.status(200).send({
                status: "Connected to account",
                message: `Welcome, ${accountName} to ${organization}`
            })
        }
    })
    .catch(err => {
        res.status(201).send({
            status: false,
            message: "service not allow"
        })
    })  
}

const withdrawalfund = () => {
    const {accountNumber, password, amount} = req.body
    .then(isAccountNumberVerify => {
       if(isAccountNumberVerify != true){
           throw new Error("This account cannot be verify")
       }
    })
    .then(isAccountNumberVerify => {
        if(isAccountNumberVerify == accountNumber && accountNumber === password){
            res.status(400).send({
                status: "Succesful",
                message: "This account is now confirmed to perform transfer"
            })
        }
    })

    .catch(err => {
        res.status(404).send({
            status: "Account is Insufficiency",
            message: "Go and work hard ogbeni"
        })
    })
     
}




module.exports = {
    transferfund,
    fundaccount,
    comfirmTransferToOtherBanks,
    withdrawalfund
}