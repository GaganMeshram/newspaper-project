// routes/articles.js
const express = require('express');
const axios = require('axios');
const Article = require('../models/Article');
const router = express.Router();

// Fetch articles from News API
router.get('/fetch', async (req, res) => {
    try {
        const response = await axios.get(
            'https://newsapi.org/v2/top-headlines?country=us&apiKey=9b1c7364c5804d0c9b44e76f86a615cb'
        );
        const articles = response.data.articles;
        res.json(articles);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching articles', error });
        res.send(error)
    }
});

// Save an article to MongoDB
router.post('/save', async (req, res) => {
    const { title, description, url, publishedAt } = req.body;
    const newArticle = new Article({ title, description, url, publishedAt });

    try {
        await newArticle.save();
        res.status(201).json(newArticle);
    } catch (error) {
        res.status(400).json({ message: 'Error saving article', error });
    }
});

// Get saved articles
router.get('/saved', async (req, res) => {
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving articles', error });
    }
});

module.exports = router;
