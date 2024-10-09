// src/components/Article.js
import React from 'react';
import axios from 'axios';

const Article = ({ title, description, url, publishedAt }) => {
    const handleSaveArticle = async () => {
        try {
            const article = { title, description, url, publishedAt };
            await axios.post('http://localhost:5000/api/articles/save', article);
            alert('Article saved successfully!');
        } catch (error) {
            alert('Failed to save the article.');
            console.error(error);
        }
    };

    return (
        <div className="article">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Published at: {new Date(publishedAt).toLocaleString()}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">Read More</a>
            <button onClick={handleSaveArticle}>Save Article</button>
        </div>
    );
};

export default Article;
