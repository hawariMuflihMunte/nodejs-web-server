/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const requestListener = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Powered-By', 'NodeJS');

  const { method, url } = req;

  if (url === '/') {
    if (method === 'GET') {
      res.statusCode = 200;

      res.end(JSON.stringify({
        message: 'Ini adalah halaman homepage',
      }));
    } else {
      res.statusCode = 404;

      res.end(JSON.stringify({
        message: `Halaman tidak dapat diakses dengan method: ${method}\nCoba akses dengan method GET!`,
      }));
    }
  } else if (url === '/about') {
    if (method === 'GET') {
      res.statusCode = 200;

      res.end(JSON.stringify({
        message: 'Halo! Ini adalah halaman about',
      }));
    } else if (method === 'POST') {
      res.statusCode = 201;

      let body = [];

      req.on('data', (chunk) => {
        body.push(chunk);
      });

      req.on('end', () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        res.end(JSON.stringify({
          message: `Halo, ${name}! Ini adalah halaman about`,
        }));
      });
    } else {
      res.end(JSON.stringify({
        message: `Halaman tidak dapat diakses dengan method: ${method}\nCoba akses dengan method GET!`,
      }));
    }
  } else {
    res.statusCode = 404;

    res.end(JSON.stringify({
      message: 'Halaman tidak ditemukan!',
    }));
  }
};

module.exports = requestListener;
