# MyOwnSpace
  
  

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Walkthrough Video](#walkthrough-video)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)
  
  ## Description
  A social networking site that allows for user profile creation along with posting and reacting to others' posts as well as deleting and updating the posts and reactions. Users may also add and delete friends to their friend count.

  ## Installation
  Cloning the repo and then at the command line inputting npm install express and mongoose web package files. 
  
  ## Walkthrough Video
  https://drive.google.com/file/d/1WnCLE02ix5DDM1PAAYFxxyLvvKfAYGCF/view

  ## Usage
  Using Insomnia, access http://localhost3001/api will be the hosting site and then running all the GET, POST, PUT, and DELETE requests from the application itself. Must provide a "userName", "email" and for the text body "thoughtText" to enter text. 

  ## Licenses
    This project is covered under the MIT license. To learn more about what this means, click the license button at the top.

  ## Contributing
  Email me at arias.rafael.1984@gmail.com for any contribution requests as well as any issues you may arise with the app itself.

  ## Tests
  Tests were written using Insomnia Core
  
  **`/api/users`**
* `GET` all users
* `POST` a new user:
    ```json
    // example data
    {
        "username": "rafael",
        "email": "rafael@gmail.com"
    }
        ```
---
**`/api/users/:userid`**
* `GET` a single user by its `_id` 
* `PUT` to update a user by its `_id`
* `DELETE` to remove user by its `_id`
---
**`/api/users/:userId/friends/:friendId`**
* `POST` to add a new friend to a user's friend list
* `DELETE` to remove a friend from a user's friend list
---
**`/api/thoughts`** 
* `GET` to get all thoughts
* `POST` to create a new thought
    ```json
    // example data
    {
    "thoughtText": "Here's a cool thought...",
    "username": "Rafael",
    "userId": "6262aea9e6f2ef3f1eb99b85"
    }
    ```
---
**`/api/thoughts/:thoughtId`**
* `GET` to get a single thought by its `_id`
* `PUT` to update a thought by its `_id`
* `DELETE` to remove a thought by its `_id`
---

**`/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction 
    ```json
    // example data
    {
    "reactionBody":"Sample reaction",
    "username":"Rafael"
    }
    ```
---
**`/api/thoughts/:thoughtId/reactions/:reactionId`**
* `DELETE` remove a reaction by the `reactionId`

  ## Questions
  Have questions about this projet?
  GitHub: https://github.com/GeneHackerman

  ## Credits
  Rafael Arias
  
  
