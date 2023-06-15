import AWS from 'aws-sdk';

const s3 = new AWS.S3();

const fetchS3File = async (bucketName: string, key: string) => {
  const params: AWS.S3.GetObjectRequest = {
    Bucket: bucketName,
    Key: key,
  };

  try {
    const data: AWS.S3.GetObjectOutput = await s3.getObject(params).promise();
    return {
      Body: data.Body?.toString('base64'),
    };
  } catch (error) {
    console.error('Error retrieving file:', error);
    throw error;
  }
};

export { fetchS3File };
