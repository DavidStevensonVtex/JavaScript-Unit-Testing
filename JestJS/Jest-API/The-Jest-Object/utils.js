const utils = {
    authorize: () => {
      return 'token';
    },
    isAuthorized: secret => secret === 'wizard',
    isLocalhost() {
      return process.env.HOSTNAME === 'localhost';
    },
  };

  module.exports = utils ;