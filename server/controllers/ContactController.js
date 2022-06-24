const db = require('../connection');

module.exports = {
  index(req, res, next) {
    db.query(`SELECT * FROM contacts`, (err, results) => {
      if (err) {
        return res.sendStatus(500);
      }

      return res.send({ items: results });
    });
  },

  store(req, res, next) {
    db.query(
      `INSERT INTO contacts
                (image, first_name, last_name, email, phone_number)
                VALUES (?, ?, ?, ?, ?)`,
      [
        req.body.item.image,
        req.body.item.first_name,
        req.body.item.last_name,
        req.body.item.email,
        req.body.item.phone_number,
      ], (err, result) => {
        if (err) {
          return res.sendStatus(500, err);
        }
        return res.send({
          item: {
            id: result.insertId,
            image: req.body.item.image,
            first_name: req.body.item.first_name,
            last_name: req.body.item.last_name,
            email: req.body.item.email,
            phone_number: req.body.item.phone_number,
          }
        });
      }
    );
  },

  update(req, res, next) {
    db.query(
      `UPDATE contacts SET image = ?, first_name = ?, last_name = ?, email = ?, phone_number = ? WHERE id = ?`,
      [
        req.body.item.image,
        req.body.item.first_name,
        req.body.item.last_name,
        req.body.item.email,
        req.body.item.phone_number,
        req.params.item
      ],
      err => {
        if (err) {
          return res.sendStatus(500);
        }
        return res.sendStatus(200);
      }
    );
  },

  destroy(req, res, next) {
    db.query(
      `DELETE FROM contacts  WHERE id = ?`,
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
