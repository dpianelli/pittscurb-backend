import awsSdk from 'aws-sdk';

awsSdk.config.update({
  region: 'us-east-1',
});

export const dynamoClient = new awsSdk.DynamoDB.DocumentClient();
