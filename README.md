# coFIT

> Stay FIT during COVID

This app is intended for recommending and guiding user to Yoga exercises to stay
healthy during the lockdown.

## What problem are we solving

During COVID-19 and quarantine, many gyms and yoga studios were closed. Especially for Yoga, this made these workouts even more difficult because people no longer had an instructor to follow. We sought to fix this problem by providing useful information, such as benefits, detailed steps and videos, in order to help those that relied on studios and instructors to practice Yoga.

## Running the server

### Front-end

The front-end is a stencil.js web components application in `frontend` directory.
To run the front-end in dev mode: `npm run frontend:start:dev`.

### Back-end

The back-end is an API in Node/Express application in `backend` directory.
To run the back-end in dev mode: `npm run backend:start:dev`.

### Web

The web is the express server serving both the front-end from `frontend` and the api from `backend`.
To build the front-end and start the back-end: `npm run web:start`.
To build the front-end and start the back-end in dev mode: `npm run web:start:dev`.

## Challenges we ran into

For some of us, React and web development was brand new. This was one major challenge as we began building our web application. We also originally planned to have a ML model that could correct a user's pose or posture as they performed the exercises along with a video. We were successful in creating a model for still images; however, videos presented a more difficult challenge. We found that the model could not correctly identify or properly predict a user's posture, likely due to noisy backgrounds.

## What we have learned

We have learned more about React and how to run web applications. There were many components of React we had not used before, and this project gave us the opportunity to play around with them. We have also learned that video ML is much more advanced than ML for still images.

## Future plan

In the future, we hope to add many more exercises and hopefully even implement the video ML model. This type of website would be great for a specific Yoga company because they could create their own set of videos, rather than having us use Youtube videos.
