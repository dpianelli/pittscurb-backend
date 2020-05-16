import { dynamoClient } from '.';

const defaultParams = { TableName: 'Project' };

export const getProject = (projectID: string) =>
  dynamoClient.get({ ...defaultParams, Key: { projectID } }).promise();
