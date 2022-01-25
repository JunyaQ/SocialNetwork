# bootcamp-challenge-18-SocialNetwork

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
- Get All Users: http://localhost:3001/api/users
- Get one single user: http://localhost:3001/api/users/ 61efb56bb214ad449f20c45c (61efb56bb214ad449f20c45c is the user ID)
- Create one single user: http://localhost:3001/api/users/
- Update one single user: http://localhost:3001/api/users/ 61efb56bb214ad449f20c45c (61efb56bb214ad449f20c45c is the user ID)
- Delete on single user: http://localhost:3001/api/users/ 61efb56bb214ad449f20c45c (61efb56bb214ad449f20c45c is the user ID)
- User add a friend: 
- Delete a friend: 

### Thoughts
- Get all Thoughts: http://localhost:3001/api/thoughts
- Get one single thought: http://localhost:3001/api/thoughts/61f04325784dd3c4f0594f1c (61f04325784dd3c4f0594f1c is the thought ID)
- Create one single thought: http://localhost:3001/api/thoughts/61efbfa2bad5a0bd9f93890f (61efbfa2bad5a0bd9f93890f is the thought ID)
- Update one single thought: http://localhost:3001/api/thoughts/61efbfa2bad5a0bd9f93890f (61efbfa2bad5a0bd9f93890f is the thought ID)
- Delete one single thought: http://localhost:3001/api/thoughts/61f04325784dd3c4f0594f1c (61f04325784dd3c4f0594f1c is the thought ID)
- Create a reaction based on a thought: http://localhost:3001/api/thoughts/61f04325784dd3c4f0594f1c/reactions (61f04325784dd3c4f0594f1c is the thought ID)
- Delete a reaction: http://localhost:3001/api/thoughts/61f04325784dd3c4f0594f1c/reactions/61f04cd767a304180f7d8409 (61f04325784dd3c4f0594f1c is the thought ID, and 61f04cd767a304180f7d8409 is the reaction ID )
