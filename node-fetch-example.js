const fetch = require("node-fetch");

const API_URL = "https://opentdb.com/api.php?amount=1&category=18";

const getTriviaQuestion = async () => {
  // Write your solution here
  const getTriviaQuestion = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
};

getTriviaQuestion();
