-- CREATE DATABASE grocery;

use grocery;

CREATE TABLE Groceries (
  groceryID INT IDENTITY(1,1) PRIMARY KEY,
  groceryName VARCHAR(50) NOT NULL,
  Quantity VARCHAR(100) NOT NULL,
);

INSERT INTO Groceries (groceryName, Quantity) VALUES ('Apples', '5');
INSERT INTO Groceries (groceryName, Quantity) VALUES ('Bananas', '10');

SELECT * FROM Groceries;