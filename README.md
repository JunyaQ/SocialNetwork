# SocialNetwork

## Social Network API
- User model has user id, username, email, thoughts(related to thought model) and friends(related to user model itself)
- Thought model has thought id, thoughtText, created time, username, and reaction (related with reaction schema)
- Reaction schema has reactionId, reactiontext, username and chreated time

## About Social Network API
WHEN I enter the command to invoke the application<br/>
THEN my server is started and the Mongoose models are synced to the MongoDB database<br/>
WHEN I open API GET routes in Insomnia for users and thoughts<br/>
THEN the data for each of these routes is displayed in a formatted JSON<br/>
WHEN I test API POST, PUT, and DELETE routes in Insomnia<br/>
THEN I am able to successfully create, update, and delete users and thoughts in my database<br/>
WHEN I test API POST and DELETE routes in Insomnia<br/>
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list<br/>

## Set Up
This application is using Mongoose, so it doesn't need a database setup<br/>
Using npm run start to run the applicaiton

## Start application with Insomnia
In the console, make connection to localhost, with "npm run start". <br/>
Because there is no data in the database, it

### Users
- Get All Users (GET): http://localhost:3001/api/users
- Get one single user (GET): http://localhost:3001/api/users/ 61efb56bb214ad449f20c45c (61efb56bb214ad449f20c45c is the user ID)
- Create (POST) one single user: http://localhost:3001/api/users/
- Update (PUT) one single user: http://localhost:3001/api/users/ 61efb56bb214ad449f20c45c (61efb56bb214ad449f20c45c is the user ID)
- Delete on single user (DELETE): http://localhost:3001/api/users/ 61efb56bb214ad449f20c45c (61efb56bb214ad449f20c45c is the user ID)
- User add a friend (POST): http://localhost:3001/api/users/61efbfa2bad5a0bd9f93890f/friends/61f05de667a304180f7d8414 (61efbfa2bad5a0bd9f93890f is the first user ID, and 61f05de667a304180f7d8414 is the second user ID)
- Delete a friend (DELETE):  http://localhost:3001/api/users/61efbfa2bad5a0bd9f93890f/friends/61f05de667a304180f7d8414 (61efbfa2bad5a0bd9f93890f is the first user ID, and 61f05de667a304180f7d8414 is the second user ID)
 
### Thoughts
- Get all Thoughts (GET): http://localhost:3001/api/thoughts
- Get one single thought (GET): http://localhost:3001/api/thoughts/61f04325784dd3c4f0594f1c (61f04325784dd3c4f0594f1c is the thought ID)
- Create one single thought (POST): http://localhost:3001/api/thoughts/61efbfa2bad5a0bd9f93890f (61efbfa2bad5a0bd9f93890f is the thought ID)
- Update one single thought (PUT): http://localhost:3001/api/thoughts/61efbfa2bad5a0bd9f93890f (61efbfa2bad5a0bd9f93890f is the thought ID)
- Delete one single thought (DELETE): http://localhost:3001/api/thoughts/61f04325784dd3c4f0594f1c (61f04325784dd3c4f0594f1c is the thought ID)
- Create a reaction based on a thought (POST): http://localhost:3001/api/thoughts/61f04325784dd3c4f0594f1c/reactions (61f04325784dd3c4f0594f1c is the thought ID)
- Delete a reaction (DELETE): http://localhost:3001/api/thoughts/61f04325784dd3c4f0594f1c/reactions/61f04cd767a304180f7d8409 (61f04325784dd3c4f0594f1c is the thought ID, and 61f04cd767a304180f7d8409 is the reaction ID )

## Technologies use
- Javascript 
- Node js
- Express js
- MongoDB


## Walkthrough video
 [Insomnia walkthrough video](https://drive.google.com/file/d/1e4pOmaqR7x9V1ZLvwqb7iqpXv9D4alek/view?usp=sharing)<br/>
