CREATE DATABASE top_songs_db;

USE top_songs_db;

CREATE TABLE top5000 (
position INT NOT NULL,
artist VARCHAR(100) NULL,
song VARCHAR(100) NULL,
year INT NULL,
raw_total DECIMAL(10,4) NULL,
raw_usa DECIMAL(10,4) NULL,
raw_uk DECIMAL(10,4) NULL,
raw_eur DECIMAL(10,4) NULL,
raw_row DECIMAL(10,4) NULL,
PRIMARY KEY (position)
)

SELECT * FROM top5000;

USE top_songs_db;

CREATE TABLE top_albums (
 position INT NOT NULL,
 artist VARCHAR(100) NULL,
 album VARCHAR(100) NULL,
 year INT NULL,
 raw_total DECIMAL(10,4) NULL,
 raw_usa DECIMAL(10,4) NULL,
 raw_uk DECIMAL(10,4) NULL,
 raw_eur DECIMAL(10,4) NULL,
 raw_row DECIMAL(10,4) NULL,
 PRIMARY KEY (position)
);

SELECT * FROM top_albums;