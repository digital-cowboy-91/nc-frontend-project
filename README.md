# Frontend for NC News

[Live App](https://ncnews.colaia.dev/)

This is a **React-based** frontend application for **NC News** that allows users to view and interact with articles, comments, and vote on both. It consumes the backend API to display articles, handle sorting, pagination, and more.

**Unlike many similar applications, I chose to solve most problems using pure JavaScript (ES6) and CSS, avoiding the need for additional libraries or frameworks.** This choice helps keep the project lightweight, improves performance, and demonstrates a deep understanding of core web technologies.

The application is deployed and hosted on a **DigitalOcean Droplet**, making it accessible online and ensuring that I have hands-on experience with cloud-based deployments.

## Features

- Display a list of articles and comments with pagination
- View details of a single article
- View and post comments on articles
- Vote on articles and comments
- Sort and order articles
- View articles by topic

## Technologies Used

- **ReactJS**: JavaScript library for building user interfaces
- **Axios**: HTTP client for making API requests
- **React Router**: Library for handling client-side routing

## Setup

### Prerequisites

- Node.js (v22.6.0)

### Installation

1. Clone the repository and install dependencies:

   ```bash
   git clone https://github.com/digital-cowboy-91/nc-frontend-project
   cd nc-frontend-project
   npm i
   ```

2. Create `.env` file with following environmental variables:
   ```env
   VITE_API_BASE_URL=https://ncnews.colaia.dev/api
   ```
3. Run application
   ```bash
   npm run dev
   ```

## See also

1. [Backend for NC News](https://github.com/digital-cowboy-91/nc-backend-project)

---

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)
