const dataProvider = require('../../data/getloansbyinvestor/{id}.js');
const Promise = require('bluebird');
const Boom = require('boom');

module.exports = {
  get: (req, res) => {
    const status = 200;
    const provider = Promise.promisify(dataProvider.get[200]);
    provider(req, res)
      .then((data) => {
        const result = {
          responses: data,
        };
        req.totalCount = data.length ? data.length : 0;
        res(data && result.responses).code(status);
      })
      .catch((err) => {
        res(Boom.badRequest(err));
      });
  },
  patch: (req, res) => {
    const status = 202;
    const provider = Promise.promisify(dataProvider.patch[202]);
    provider(req, res)
      .then((data) => {
        const result = {
          responses: data,
        };
        req.totalCount = data.length ? data.length : 0;
        res(data && result.responses).code(status);
      })
      .catch((err) => {
        res(Boom.badRequest(err));
      });
  },
};
