-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create products table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE,
  description TEXT,
  price INTEGER NOT NULL,
  category TEXT,
  sku TEXT UNIQUE,
  stock_status TEXT DEFAULT 'instock',
  condition TEXT DEFAULT 'New',
  image_url TEXT,
  featured BOOLEAN DEFAULT FALSE
);

-- Create index on slug for faster lookups
CREATE INDEX idx_products_slug ON products(slug);

-- Create index on category
CREATE INDEX idx_products_category ON products(category);

-- Create index on featured
CREATE INDEX idx_products_featured ON products(featured) WHERE featured = TRUE;
