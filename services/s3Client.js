const s3 = require('s3');

const client = s3.createClient({
  maxAsyncS3: 20,
  s3RetryCount: 3,
  s3RetryDelay: 1000,
  multipartUploadThreshold: 20971520,
  multipartUploadSize: 15728640,
  s3Options: {
    accessKeyId: process.env.AKIAIEWE5AOBQSPKXJ3A,
    secretAccessKey: process.env.AOKHkv3pipcCek8LaeClnFMgO9KIjRmBc7EgVH3N
  }
});

module.exports = client;
