const aws = require('./aws');
const awsLambdaAtEdge = require('./aws-lambda-at-edge');

const providers = {
  aws,
  awsLambdaAtEdge
};

module.exports = function getProvider(options) {
  const { provider = 'aws' } = options;

  if (provider in providers) {
    return providers[provider](options);
  }

  throw new Error(`Unsupported provider ${provider}`);
};
