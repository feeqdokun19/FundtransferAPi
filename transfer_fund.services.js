require('dotenv').config()
const axios = require('axios')
const { v4: uuidv4 } = require('uuid')


const checkAccountNumber = () => {

    return axios({
    method: "get",
    url: `${process.bank_URL}`,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.bank_SECRET_KEY}`
    },
})
}
const creatTransferErrRes = (accountNumber, accountName) => {
    const checkAccountDetails = checkAccountNumber()

    return axios({
        method: "get",
        url: `${process.bank_URL}`,
        headers: {
            "content-Type": "application/json",
            "Authorization": `Bearer ${getbankTokenResp.access_token}`
        },
        data: {
            "type": "Transfer",
            "Name": accountName,
            "accountNumber": accountNumber,
            "Bank": bank,
            "Type_of_currency": "NGN" 
        }
    })

}
const showBalanceAfterTransfer = (user_id) => {
    //let acountBalance = (accountNumber - amount)

    return axios({
        method: "get",
        url: `${process.env.BANK_URL}/transfer/${user_id}`,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
        },
        Responsedata: {
            "type": "Transfer",
            "Name": accountName,
            "accountNumber": accountNumber,
            "Bank": bank,
            "Type_of_currency": "NGN",
            "Amount": Amount,
            "Balance": Balance 
        }
})
}

module.exports = {
    checkAccountNumber,
    creatTransferErrRes,
    showBalanceAfterTransfer
}


 