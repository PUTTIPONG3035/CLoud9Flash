const dotenv = require('dotenv');
dotenv.config();
const AWS = require('aws-sdk');

const AWS_ACCESS_KEY_ID = "ASIAZI2LIWC3QOM3DGPU"

const AWS_SECRET_ACCESS_KEY = "ndxoBSPa0Wp3wkS6TtfsDPqo25kGYTU2hLQ5tkGQ"
const AWS_SESSION_TOKEN=`FwoGZXIvYXdzEE8aDKMZ1tXvaFsWN1o/cyLFATVqf2HQV6JlXG87T889R63aYiktD92Z3eqOhzQancOO/rWIflQmGoS9QcTPjqQUC96VnqJhnmZNYL6/ZZJ1Z/TGDD5VbBBRkUcbVMK9ndksE7O7BIuz8eYv/WhOEpXGmFpnJHn8VKxT5BaVaEJpLiJq5/v2TjmeTYgWginbsyEbxrVbDR0x5bIliFhIsFjDphs5SZA0WIMvOaB0cM48lSXRlEUz7G7KTfFDD/95sjxSGroIKrpp137G5aG3ECSgJPgMK8yVKKOnwa8GMi3K+ICUCSdtzLy+VlaMKpcjliwitwNNK7YjPjzmzEI3uMlWUFtPULNCtspD6bM=`
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





