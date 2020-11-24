// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'ap-northeast-1'});

// Create S3 service object
const s3 = new AWS.S3({apiVersion: '2006-03-01'});

const params = {Bucket: 'sample', Key: 'test.jpg', Expires: 60};

var url = s3.getSignedUrl('getObject', params);
console.log('The URL is', url); // expires in 60 seconds