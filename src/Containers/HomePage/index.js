import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import ArticleCard from "../../Components/ArticleCard";
import Header from "../../Components/Header";

import { allArticles } from "../../Services/ArticlesAPI";

const HomePage = () => {
  const [articles, setArticles] = useState({data: []});

  const getArticles = (searchTerm) => {
    allArticles(searchTerm)
      .then((res) => {
        setArticles({...res})
      })
      .catch((err) => err);
  }

  useEffect(() => {
    getArticles()
  }, []);

  return (
    <Container>
      <Header onSearch={getArticles} />
      {articles.data.map((item, idx) => (
        <ArticleCard key={idx} {...item} />
      ))}
    </Container>
  );
};

export default HomePage;
