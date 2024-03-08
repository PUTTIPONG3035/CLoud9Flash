const dotenv = require('dotenv');
dotenv.config();
const AWS = require('aws-sdk');

const AWS_ACCESS_KEY_ID = "ASIAZI2LIWC33P54KHWI"

const AWS_SECRET_ACCESS_KEY = "eVcTFG/a+u15r5WCjw1okLFeq2baI+kfnKK1hFvn"
const AWS_SESSION_TOKEN=`FwoGZXIvYXdzEL3//////////wEaDBOcrCPrynefbjsbqCLFAaKePzro9i6/9VbY3Wb+PySFh5s7tc2EvHfhoD8vXnfwSeH2ZajEaEstEXTDOlMrBlkP/u5Jib6yvSLIeAExH03+aXvfGvL5kb34uPOuOcytICsQHyC1GEnLLF0xnCNQJbooG6iSSG7YBcNM+xxlfrRVSWfp+DsM8cH6USmxJSx+uo3PFb35EVKhY7eVcK5ZNnkvDlt3Mdnddp/YknBSAUb7OV3vq0ubV3Sjpdlr9TXOc0oeY+Tyo8fsmiSJsZ6lghb2YjzMKN+yoa8GMi1DiUJtuCTfBdhdapuYsWz9VqiNGPyrPBkM9/Pe40b7KYY49TZqr7fXBuA3z2s=`
const accessKeyId  = AWS_ACCESS_KEY_ID
const secretAccessKey = AWS_SECRET_ACCESS_KEY
const sessionToken =  AWS_SESSION_TOKEN





const credentials = new AWS.Credentials({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    sessionToken:sessionToken,
  });

AWS.config.update({
    credentials: credentials,
    region : "us-east-1"
})

const db = new AWS.DynamoDB.DocumentClient()

const Table = 'users'



module.exports = {
    db,
    Table
}





