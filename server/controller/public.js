const axios = require("axios");
const { validationResult } = require("express-validator");

exports.getApi = (req, res, next) => {
  res.status(200).json({ message: "Welcome To Safu API V1" });
};

exports.postApi = (req, res, next) => {
  const url = req.body.urls;

  const error = validationResult(req);

  if (!error.isEmpty()) {
    console.log(error.array());
    return res.status(500).json({
      status: "fail",
      error: "Please enter a valid URL.",
      code: 422,
    });
  }

  const options = {
    method: "GET",
    url: "https://article-data-extraction-and-summarization.p.rapidapi.com/article",
    params: {
      url: url,
      summarize: "true",
      summarize_language: "auto",
    },
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host":
        "article-data-extraction-and-summarization.p.rapidapi.com",
    },
  };

  try {
    axios
      .request(options)
      .then((response) => {
        const summary = response.data.article.summary;
        res.status(200).json({ summary: summary });

        return req.user
          .addQuery({ question: url, summary: summary })
          .then((result) => {
            console.log(result);
          });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          status: "fail",
          error: "An unexpected error occurred. Please try again later.",
          code: 500,
        });
        const err = new Error(error);
        err.httpStatusCode = 500;
        return next(err);
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "fail",
      error: "An unexpected error occurred. Please try again later.",
      code: 500,
    });
    const err = new Error(error);
    err.httpStatusCode = 500;
    return next(err);
  }
};
