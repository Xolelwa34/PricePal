import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sqlite3 from 'sqlite3';

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// SQLite Database setup
const db = new sqlite3.Database('./products.db', (err) => {
  if (err) {
    console.error('Failed to open the database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');

    // Create the 'products' table if it doesn't exist
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        store TEXT,
        price REAL,
        url TEXT
      );
    `;

    db.run(createTableQuery, (err) => {
      if (err) {
        console.error('Error creating table:', err.message);
      } else {
        console.log('Table "products" is ready.');
      }
    });


    const insertDataQuery = `
      INSERT INTO products (name, description, store, price, url)
      VALUES
      ('Product 1', 'Description of Product 1', 'Store 1', 20.99, 'http://example.com/product1'),
      ('Product 2', 'Description of Product 2', 'Store 2', 35.50, 'http://example.com/product2')
    `;
    db.run(insertDataQuery, (err) => {
      if (err) {
        console.error('Error inserting data:', err.message);
      } else {
        console.log('Sample data inserted.');
      }
    });
  }
});

// Login route
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const users = [
    { username: 'user1', password: 'password123' },
    { username: 'user2', password: 'password456' },
  ];

  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    const token = 'y#';  
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

app.get('/api/products', (req, res) => {
  const query = 'SELECT id, name, description, url, store, price FROM products';

  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    const products = [];
    rows.forEach((row) => {
      const existingProduct = products.find((p) => p.id === row.id);

      if (existingProduct) {
        existingProduct.prices.push({
          store: row.store,
          price: row.price,
          url: row.url,
        });
      } else {
        products.push({
          id: row.id,
          name: row.name,
          description: row.description,
          prices: [
            {
              store: row.store,
              price: row.price,
              url: row.url,
            },
          ],
        });
      }
    });

    res.json(products);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

