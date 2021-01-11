const express = require('express');
const router = express.Router();

const {
    leaderboardController
} = require ('../controllers/leaderboard')

router.get('/', leaderboardController.leaderboard)

modules.export = router