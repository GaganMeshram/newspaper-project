// src/components/SavedArticles.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SavedArticles = () => {
    const [savedArticles, setSavedArticles] = useState([]);

    useEffect(() => {
        const fetchSavedArticles = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/articles/saved');
                setSavedArticles(response.data);
            } catch (error) {
                console.error('Failed to fetch saved articles:', error);
            }
        };

        fetchSavedArticles();
    }, []);

    return (
        <div>
            <h2>Saved Articles</h2>
            {savedArticles.map((article, index) => (
                <div key={index} className="article">
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
                    <p>Published at: {new Date(article.publishedAt).toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
};

export default SavedArticles;
