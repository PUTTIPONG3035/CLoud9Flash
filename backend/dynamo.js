const dotenv = require('dotenv');
dotenv.config();
const AWS = require('aws-sdk');

const AWS_ACCESS_KEY_ID = "ASIAZI2LIWC3Y2WTZIUI"

const AWS_SECRET_ACCESS_KEY = "zY68zvid7gYd/drNeTghOKSL6+/KuQdsavZnv2Z2"
const AWS_SESSION_TOKEN=`FwoGZXIvYXdzEAcaDFKFzSPonIohqdvENyLFARRwC/hQ9zKV/zNt3H2ljE87zgVZPKoKXbRTRQiGn0fY8ETxXdinBRX0BFQDYd1dRkgwOADlNZz8DB0zUQokjJkVummPhdZOce7hOWECfFpdWNXfvbmvUqc8ZsJWtNklaa6zrXiQdk/JqNqIxy6VEk4c+ShRc1h2Wd+pcPxtXQ840ZfGGOcP7uJtioRQEVIWq30y9dv3HmECxz8Bv+oAr5LfosVZsTqyK2vmJJnfOl9Oc6gcqJjVoGtLEtzijQyRHUBIuEqMKKjBsa8GMi3y9ZkgPJ/I5vHpqol5wvSOdteYodBgQmc6X8CJD4CMX8V5jpfnh3+7iIr3xes=`
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





