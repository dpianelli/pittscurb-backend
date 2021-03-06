import request from 'request';
/*
 ** This method returns a promise
 ** which gets resolved or rejected based
 ** on the result from the API
 */
function restWrapper(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    request(url, { json: true }, (err: any, res: any, body: any) => {
      if (err) reject(err);
      resolve(body);
    });
  });
}

export default restWrapper;
