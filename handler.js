'use strict';

module.exports.FirstServerlessDemollo = (event, context, callback) => {
 callback(null, "This is my first serverless..")

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
