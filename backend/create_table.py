import sqlite3
from data.metadata import CategoriesData
connection = sqlite3.connect('data.db')

cursor = connection.cursor()

# MUST BE INTEGER
# This is the only place
# where int vs INTEGER matters—in auto-incrementing columns

create_table = """CREATE TABLE IF NOT EXISTS category
  (id INTEGER PRIMARY KEY, name text, description text, img_src text)"""
cursor.execute(create_table)

query = """INSERT INTO category (id, name, description, img_src)
  VALUES (:id, :name, :description, :img_src);"""

for data in CategoriesData:
    cursor.execute(query, data)

connection.commit()

connection.close()
