const db = require('../connection');

module.exports = {
  index(req, res, next) {
    db.query(`SELECT * FROM items`, (err, results) => {
      if (err) {
        return res.sendStatus(500);
      }

      return res.send({ items: results });
    });
  },

  store(req, res, next) {
    db.query(
      `INSERT INTO items
                (value1, value2, value3)
                VALUES (?, ?, ?)`,
      [req.body.item.value1, req.body.item.value2, req.body.item.value3],
      (err, result) => {
        if (err) {
          return res.sendStatus(500);
        }

        return res.send({
          item: {
            id: result.insertId,
            value1: req.body.item.value1,
            value2: req.body.item.value2,
            value3: req.body.item.value3
          }
        });
      }
    );
  },

  update(req, res, next) {
    db.query(
      `UPDATE items SET value1 = ?, value2 = ?, value3 = ? WHERE id = ?`,
      [
        req.body.item.value1,
        req.body.item.value2,
        req.body.item.value3,
        req.params.item
      ],
      (err, result) => {
        if (err) {
          return res.sendStatus(500);
        }

        return res.sendStatus(200);
      }
    );
  },

  destroy(req, res, next) {
    db.query(
      `DELETE FROM items  WHERE id = ?`,
      [req.params.item],
      (err, result) => {
        if (err) {
          return res.sendStatus(500);
        }

        return res.sendStatus(200);
      }
    );
  }
};
