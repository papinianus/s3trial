// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
const fs = require('fs');
const request = require('request');
// Set the region 
AWS.config.update({region: 'ap-northeast-1'});

const getSignedUrl = (keypairId, privateKey, options) => {
    const signer = new AWS.CloudFront.Signer(keypairId, privateKey);
    return signer.getSignedUrl(options);
}
const target = "distribution and object key";
const privateKey = fs.readFileSync('path_to_privakekey.pem');
// URL生成
const url = getSignedUrl(
    "privatekey id",
    privateKey,
    {
        url: target,
        expires: 300,
    }
);
console.log(url);
fs.readFile('test.jpg', (err, data) => {
    request.put({
        method: "PUT",
        uri: url,
        headers:{"Content-Disposition":'attachment',"Content-Type":'img/jpeg',"x-amz-acl": "bucket-owner-full-control"}
    }, (error, response, body) => {
        console.log(error);
        console.log(response);
    });
});
