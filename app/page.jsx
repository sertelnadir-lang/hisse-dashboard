'use client';

import { useState } from "react";
import { motion } from "framer-motion";

export default function HisseDashboard() {
  const [stocks, setStocks] = useState([
    { symbol: "ISCTR", qty: 750, cost: 12.06, price: 0 },
    { symbol: "MEKAG", qty: 3651, cost: 5.58, price: 0 },
    { symbol: "MRSHL", qty: 28, cost: 2366.54, price: 0 },
    { symbol: "NETAS", qty: 400, cost: 78.91, price: 0 },
    { symbol: "ENDAE", qty: 247, cost: 19.5, price: 0 },
    { symbol: "PRDGS", qty: 501, cost: 7.82, price: 0 },
    { symbol: "THYAO", qty: 101, cost: 284.65, price: 0 }
  ]);

  const fetchPrices = async () => {
    const updated = stocks.map((s) => ({
      ...s,
      price: (s.cost * (0.9 + Math.random() * 0.2)).toFixed(2),
    }));
    setStocks(updated);
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <button 
        onClick={fetchPrices} 
        style={{
          padding: '10px 20px',
          fontSize: 16,
          marginBottom: 20,
          cursor: 'pointer'
        }}
      >
        Fiyatları Güncelle (Demo)
      </button>

      <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
        {stocks.map((s, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            style={{
              border: '1px solid #ddd',
              borderRadius: 12,
              padding: 20,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            <h2 style={{ fontSize: 22, fontWeight: 'bold' }}>{s.symbol}</h2>
            <p>Adet: {s.qty}</p>
            <p>Maliyet: {s.cost} TL</p>
            <p>Güncel Fiyat: {s.price} TL</p>
            <p style={{ marginTop: 10, fontWeight: 'bold' }}>
              Kar/Zarar: {((s.price - s.cost) * s.qty).toFixed(2)} TL
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
