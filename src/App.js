// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ArticleList from './components/ArticleList';
import SavedArticles from './components/SavedArticles';
import './styles.css';

const App = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/articles/fetch');
                setArticles(response.data);
            } catch (err) {
                setError('Failed to fetch articles. Please try again later.');
                console.error(err);
            }
        };

        fetchArticles();
    }, []);

    return (
        <div>
            <Header />
            {error && <p className="error">{error}</p>}
            <ArticleList articles={articles} />
            <SavedArticles />
        </div>
    );
};

export default App;
