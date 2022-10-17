# Project-4: Coaches Corner

## Project Information
This project was apart of my Software Engineering Immersive course at General Assembly. The objective was to create a full-stack MERN application that met the following requirements:

 1. A working full-stack, single-page application hosted on Heroku.
 2. Incorporate the technologies of the MERN-stack:MongoDB/Mongoose, Express, React, Node
 3. Have a well-styled interactive front-end.
 4. Communicates with the Express backend via AJAX.
 5. Implement token-based authentication. Including the ability of a user to sign-up, log in & log out.
 6. Implement authorization by restricting CUD data functionality to authenticated users. Also, navigation should respond to the login status of the user.
 7. Have a well-scoped feature-set.

### App Description

Coaches Corner is an app for coaches to create practice plans for their respective teams. After creating a plan, the coach will be able to add drills for the practice.

### Technologies Used

 - **MongoDB/Mongoose** 
 - **Express** 
 - **React** 
 - **Node** 
 
## Using the App
 - Link to game is [here](https://project-4-taxi2.herokuapp.com/)
 - Upon arriving at the app, you will be prompted to login or sign up for an account if you do not already have one
 
 **Log In**
 ![Screen Shot 2022-10-17 at 3 08 07 PM](https://user-images.githubusercontent.com/59453943/196261853-9259d9b9-0363-453b-91c5-35c420a73a5d.png)
**Sign Up**
![Screen Shot 2022-10-17 at 3 09 32 PM](https://user-images.githubusercontent.com/59453943/196261927-0a52d6fd-c1eb-44aa-bf20-36cd396707a3.png)

- After signing into the app, the user dashboard will be rendered. If you already have any practice plans, you will see them listed. 

**Dashboard**
![Screen Shot 2022-10-17 at 3 21 32 PM](https://user-images.githubusercontent.com/59453943/196264225-903d011b-98f2-48db-9c56-107e6f042b82.png)

- The navbar contains a link to the create a new plan page, where you can add new practice plans

**Create New Plan**
![Screen Shot 2022-10-17 at 3 24 48 PM](https://user-images.githubusercontent.com/59453943/196265015-03bfa7a1-f3b4-4d16-b55d-df83f75afb90.png)

- On the user dashboard, on the list of plans, there is a link to view the details for each practice

**Deatil View**
![Screen Shot 2022-10-17 at 3 24 48 PM](https://user-images.githubusercontent.com/59453943/196265411-6e8197f2-b679-43c3-b2a8-8c7ec8c686b0.png)

## Approach Taken
- **Wireframe:** Link to wireframe is [here](https://whimsical.com/connect-four-2hawUxoduy7KME5LiFP8C2)
- **Pseudocode:** Link to pseudocode is [here](https://docs.google.com/document/d/1gpZOTKWqRWZA9izZgI-v74ohHJ-872QfOxfI2-Hnmhs/edit?usp=sharing)

## Hurdles
 - The first hurdle I faced was updating the board. For the logic to make moves on the board I started by implementing the logic used from my Tic-Tac-Toe game. This would not work for Connect Four because it updated the individual circles instead of the column. I contemplated on multiple solutions and settled on implementing a data structure we learned in class, a stack. I created an array of arrays called **col**, to represent the 7 columns on the board. I used a conditional statement to add elements to the array. This allowed me to update the columns from bottom to top.
 
 
 - The other hurdle I faced was how I would restart the game. For my Tic-Tac-Toe game the approach I used would refresh the entire page when the restart button was pressed. For my Connect Four game I wanted to keep a score of games won so the previous approach would not work this time. So, within my function to restart the game I chose to reset variables and change the background of the circles to restart a game. This allowed me to keep the score displayed and only resetting the board. 
 
## Future Features
 - Prompt at start of game to determine game mode
 - Different game modes for a quick game, match game, vs CPU, vs another opponent on separate device
 - Prompt at conclusion of game to start new game, quit, reset score, keep score
 - Make responsive and visually pleasing on all devices

