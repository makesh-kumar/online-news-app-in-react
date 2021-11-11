import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import "./Home.css";
import NewsOption from "./NewsOption";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Home() {
  const [newsData, setNewsData] = useState(null);
  const BASE_URL = "https://newsapi.org/v2/top-headlines?";
  //const API_KEY = "69b260814b97465cb6f4d07a98998868";
  const API_KEY = "476849f56dfd431ba3c716068456306e";
  useEffect(() => {
    getNewsData();
  }, []);

  const getNewsData = async (
    category = "headlines",
    country = "in",
    keyWords = ""
  ) => {
    let endPoint = "";
    if (category === "headlines") {
      endPoint = `${BASE_URL}country=${country}&apiKey=${API_KEY}`;
    } else {
      endPoint = `${BASE_URL}country=${country}&category=${category}&apiKey=${API_KEY}`;
    }
    if (keyWords) {
      endPoint = endPoint + `&q=${keyWords}`;
    }
    const response = await axios.get(`${endPoint}&apiKey=${API_KEY}`);
    setNewsData(response.data.articles);
  };
  return (
    <>
      <div className="footer">
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div">
              Makesh
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div className="options">
        <NewsOption onCategorySelect={getNewsData} />
      </div>
      {newsData && !newsData.length ? (
        <div className="loading-text">
          <h3>No Result Found</h3>
        </div>
      ) : null}
      <div className="home-container">
        {newsData &&
          newsData.map((data) => {
            return (
              <div className="news-item">
                <NewsCard {...data} />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Home;
