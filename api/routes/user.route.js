import express from 'express';
import { test } from '../controllers/user.controller.js';

// create a router
const router = express.Router();

// create test API routes
router.get('/test', test)

export default router;