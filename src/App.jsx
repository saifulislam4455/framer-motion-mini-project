
import React from 'react'
import { motion } from 'framer-motion'
import './App.css'

const products = [
  {
    id: 1,
    name: 'Luxury Perfume',
    price: '$49',
    icon: '🧴',
    color: '#f3e8ff'
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    price: '$79',
    icon: '🎧',
    color: '#dbeafe'
  },
  {
    id: 3,
    name: 'Classic Watch',
    price: '$99',
    icon: '⌚',
    color: '#dcfce7'
  },
  {
    id: 4,
    name: 'car',
    price: '$8999',
    icon: '🚗',
    color: '#dcfce7'
  },
  {
    id: 5,
    name: 'Riksha',
    price: '$223',
    icon: '🛺',
    color: '#dcfce7'
  },
  {
    id: 6,
    name: 'truck',
    price: '$99000',
    icon: '🚚',
    color: '#dcfce7'
  }
]

// Parent ki animation
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8
    }
  }
}

// Har card ki animation
const card = {
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

const App = () => {
  return (
    <div className="app">
      <h1>Motion Store</h1>
      <p className="subtitle">
        Discover products with smooth animations
      </p>

      <motion.div
        className="product-grid"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {products.map((product) => (
          <motion.div
            className="product-card"
            key={product.id}
            variants={card}
            whileHover={{
              y: -10,
              scale: 1.1
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="product-image"
              style={{ backgroundColor: product.color }}
            >
              <span>{product.icon}</span>
            </div>

            <h2>{product.name}</h2>
            <p className="price">{product.price}</p>

            <button className="buy-button">
              View Product
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default App
