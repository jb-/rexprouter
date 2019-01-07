const fs = require('fs');
const express = require('express');

// define routes for current path
const router = express.Router();
router.get('/', (req, res) => {
  res.send(req.originalUrl);
});

// define routes for subpaths
const filePath = __dirname + '/routes';
if (fs.existsSync(filePath)) {
  const subRoutes = fs.readdirSync(filePath).filter(value => {
    return value !== '.DS_Store';
  });
  if (subRoutes.length > 0) {
    subRoutes.map(route => {
      router.use(`/${route}`, require(`./routes/${route}`));
    });
  }
}

module.exports = router;
