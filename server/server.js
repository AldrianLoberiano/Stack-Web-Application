const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { initializeDatabase } = require('./db/sqlite');
const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// ─── Middleware ──────────────────────────────────────────────────────────────
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── Routes ──────────────────────────────────────────────────────────────────
app.use('/api/contact', contactRoutes);
app.use('/api/users', userRoutes);

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Route not found.' });
});

// ─── Database & Server ───────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await initializeDatabase();
    console.log('✅  SQLite database ready');

    app.listen(PORT, () => {
      console.log(`🚀  Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('❌  SQLite initialization error:', err.message);
    process.exit(1);
  }

module.exports = app;
