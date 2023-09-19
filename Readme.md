# Synop - Web App for Summarizing Articles

**Synop** is a powerful and user-friendly web application that simplifies the process of summarizing articles from URLs. Whether you're a student looking to extract key information from research papers or a busy professional trying to stay informed, Synop has got you covered. With just a few clicks, you can generate concise and coherent summaries, saving you time and effort.

## Live Demo

[https://synops.netlify.app/](https://synops.netlify.app/)

## Features

- **URL Summarization**: Synop allows you to provide the URL of any article, blog post, or news story, and it will generate a summary for you.

- **Accurate Summaries**: chat gpt cutting-edge natural language processing algorithms ensure that the generated summaries are accurate and relevant.

## Technology Stack

- **Frontend**: Synop's user interface is built using React.js, providing a responsive and interactive experience for users.

- **Backend**: The server-side of Synop is powered by Node.js, enabling efficient processing of article summaries.

- **Database**: MongoDB is used as the database to store user query.

## Installation

To install and run this app locally, follow the steps below:

1. Clone the repository:

   ```bash
   git clone https://github.com/shuvra-matrix/summarize-articles--MERN-.git

   ```

2. Install the dependencies for the server by navigating to the server folder:

   ```bash
   cd ./server
   npm install

   ```

3. Set up environment variables by creating a .env file in the "server" folder with the following content:

   ```bash
   API_KEY= your_summerize_rapid_api_key
   MONGO_USER = mongodb_user_id
   MONGO_PASS = mongodb_password
   ```

4. Start the server by running the following command:

   ```bash
   npm start
   ```

This will launch the server and make it accessible at [http://localhost:3030](http://localhost:3030).

4. Install the dependencies for the frontend by navigating to the public folder:

   ```bash
   cd ./public
   npm install

   ```

5. Start the React app by running the following command:

   ```bash
   npm start
   ```

6. You can use the following APIs to integrate YouTube and Twitter video download functionality into your backend:

   Article Data Extraction and Summarization API: https://rapidapi.com/artemsementsov/api/article-data-extraction-and-summarization

This will start the frontend of the app and make it accessible at [http://localhost:3000](http://localhost:3000).

## Disclaimer

Synop is a tool designed to aid in summarizing articles and does not replace critical thinking or research skills. While we strive for accuracy, the generated summaries may not always capture the full context of an article. Users are encouraged to use Synop summaries as a starting point and verify information when needed.

## Contributing

We welcome contributions from the community to help improve Vidown. Feel free to submit bug reports, feature requests, or pull requests.

## Issue Report

If you encounter any issues while using Synop or have suggestions for improvements, we encourage you to report them. To report an issue, please follow these steps:

1. Visit our [Issue Tracker](https://github.com/shuvra-matrix/summarize-articles--MERN-/issues) on GitHub.

2. Click the "New Issue" button.

3. Fill out the issue form with a clear and detailed description of the problem or suggestion you have.

4. Click the "Submit New Issue" button to create the issue.

## Get Started

Visit [Synop](https://synops.netlify.app/) and start summarizing articles effortlessly. Say goodbye to lengthy reading and hello to efficient, accurate, and user-friendly article summaries with Synop!
