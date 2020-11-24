// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'ap-northeast-1'});

// Create S3 service object
const s3 = new AWS.S3({apiVersion: '2006-03-01',signatureVersion: 'v4'});

const params = {Bucket: 'sample', Key: 'test.jpg', Expires: 300};

const url = s3.getSignedUrl('putObject', params);
console.log('The URL is', url);
