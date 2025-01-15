const fs = require('fs');

const sqlite3 = require('sqlite3');


// Create or open the database
const db = new sqlite3.Database('./products.db');

// Read and parse the JSON data from the file
let productsData;

try {
  productsData = JSON.parse(fs.readFileSync('products.json', 'utf8'));
  console.log('Loaded products:', productsData);  // Debugging log
} catch (err) {
  console.error('Error reading or parsing products.json:', err);
}

if (productsData) {
  // Insert data into the database
  db.serialize(() => {
    // Prepare the statement for inserting into the database
    const stmt = db.prepare('INSERT INTO products (id, name, description, store, price, url) VALUES (?, ?, ?, ?, ?, ?)');

    // Loop through each product and insert it into the database
    productsData.forEach(product => {
      // Insert each store's product data as a separate row
      stmt.run(product.id, product.name, product.description, product.store, product.price, product.url);
    });

    stmt.finalize();  // Finalize the prepared statement
  });

  db.close();  // Close the database connection
} else {
  console.error('No products data found to insert.');
}

