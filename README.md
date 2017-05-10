# TicTacToe

#### An Epicodus exercise on object-oriented JavaScript, 05.10.17

#### **By Anabel Ramirez**

## Description

This web page will help a user find out if a year inputted is a leap year or not.

|  behavior | input  | output  |
|---|---|---|
| A game should create 2 players and a board.  | player1, player2  |  player1, player2, board |
| A game should be able to move to the next turn.  | next player  |  player1 |
| A game should know which player's turn it is.  | player1  | player1  |
| A game should be able to tell if the game is over or not.  | "x""x""x"  | game over, player1 wins.  |
| A board should create 9 spaces with the proper coordinates.  | space.mark  | board.find(1, 2)  |
| A board should tell if there are three in a row marked by the same player. | space.mark(player_X)  | "x""x""x"  |
| A board should be able to return a space by its coordinates.  | space.mark(player_X)  | board.find(1, 2)  |
| A player should know whether it's an X or an O and be able to report that.  | player.mark()  | "X" or "O"  |
| A space should know its coordinates.  | space.mark  | board.find(1, 2) |
| A space should be able to be marked by a player.  | space.mark(player_X)  | "X"  |
| A space should be able to report who it's marked by. | space.markedby()  | "X" or "O" or a player object - player1 or player2 |

## Setup/Installation Requirements

Clone this repository.
Open the index page in a web browser.

## Known Bugs

No known bugs.

## Support and contact details

If you have any issues or have questions, ideas, concerns, or contributions please contact anabel@apparentinc.com.

## Technologies Used

* HTML
* CSS
* Javascript
* Bootstrap

### License
This software is licensed under the MIT license.

Copyright (c) 2017 **Anabel Ramirez**
