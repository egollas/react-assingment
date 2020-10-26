import React from "react";
import { Container } from "react-bootstrap";

import ArticleCard  from '../../Components/ArticleCard'
import Header  from '../../Components/Header'

// import { allArticles } from '../../Services/ArticlesAPI'
import allArticles  from '../../articles.json'

const HomePage = () => {
  // const articles = allArticles()
  console.log( allArticles)
  return (
    <Container>
      <Header />
      {allArticles.map((item, idx) => <ArticleCard key={idx} {...item} />)}
    </Container>
  );
};

export default HomePage;
