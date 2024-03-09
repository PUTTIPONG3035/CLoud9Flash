const dotenv = require('dotenv');
dotenv.config();
const AWS = require('aws-sdk');

const AWS_ACCESS_KEY_ID = "ASIAZI2LIWC3SBEZJNIA"

const AWS_SECRET_ACCESS_KEY = "X2KUUsAcy961nN1VSLiCQEWV5bRvE3ehmGDJO0bR"
const AWS_SESSION_TOKEN=`FwoGZXIvYXdzEAAaDIrE4T7ciyucb5thpSLFAdfvcK3NLFihXJKQ4Gn9Pnm3sW1m/Nla5HlY6xRKh8kxms33PPvK03MSPYyKH8pzo224rlx7zN1+GmOUhUk9knIALDn/52ItamobQoIituk5h0UFoL/uhFY375XWBYATYLBTjRXR4+8d8+5beOrcCpthV9xNakd+wVCiYvgcU5Y/ry4HJgAdEFl/4DyObWNVDvty6jO11bdqmPJdYYT0ehJ5CxADGNzqti+vLC3cYf4Fu5ZgLpzxfFvDnR1BDLx3bDYwWu4rKIH9r68GMi3PJnaFK1215dje86oDMSTqoq0vSlxJtYtUGUCqD9bjW5wZ1Ywv6Gf72sqkd1c=`
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

const Table = 'Users'



module.exports = {
    db,
    Table
}





