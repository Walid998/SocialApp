# Social Media App

## Overview

This is a social media application designed to facilitate interaction between users through posts and reviews.

## Features

Users: Manage user profiles
Posts: Create, read, update, and delete posts.
Reviews: Enable users to review and provide feedback on posts(stories).

## Prerequisites

1. Postgres
2. NodeJs

## Getting Started

To get started with this Social Application, you'll first need to install the project and its dependencies. You can do this by running the following command:


1. Install your dependencies

    ```
      npm install
    ```
2. Create the database and apply migrations

    ```
    npm run db:create
    npm run db:migrate
    ```

Once the project and its dependencies are installed, you can start the server by running the following command:

3. Start your app

    ```
      npm run build
      npm start
    ```
This will start the server on port 8081 by default. You can access the API by sending HTTP requests to the appropriate endpoints.

4. To run the application in the development mode

    ```
      npm run serve 
    ``` 

## Usage

find the postman collection in the following link: https://drive.google.com/file/d/1WYvAox5RGkOTH8eb00a-wzB02MegmNgM/view?usp=sharing