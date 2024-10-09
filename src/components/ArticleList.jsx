// src/components/ArticleList.js
import React from 'react';
import Article from './Article';

const ArticleList = ({ articles }) => {
    return (
        <div>
            {articles.map((article, index) => (
                <Article
                    key={index}
                    title={article.title}
                    description={article.description}
                    url={article.url}
                    publishedAt={article.publishedAt}
                />
            ))}
        </div>
    );
};

export default ArticleList;
