# Password Generator Starter Code Challenge 03

Student Portfolio Challenge 03: Lindsay L. Libhart

Description
Created a general application to randomly generate passwords for the clients employees to use. The client gave specific critera that they have have selected for this project. The Password Generator app has been updated using HTML, CSS and JavaScript and is adaptable to many different screen sizes.

Acceptance Criteria

- Generate a password when button is clicked.
- When button is clicked, client is presented with a series of prompts for specific criteria pertaining to the password generation.
- Client is asked how long the password is 8-128, and client can type the character number in the prompt box between 8-128.
- Client is asked by more prompts, if they want Uppercase letters, Lowercase letter, Numbers or Special Charactors.
- Client will have to answer each prompt.
- Upon completion of the prompts a password will be generated that matches the criteria that they selected.
- The password will then be displayed.

Work Completed

- Coned the Repository from GitHub.
- Added comments to the HTML for future reference.
- Removed the readonly text from the textarea section in html.
- Added comments to the CSS for future reference.
- Added comments to the JavaScript file for future reference.
- Added a variable declaration area
- Added an event listener (onclick) called generatePassword.
  - which prompts the user for input between 8-128
  - This variable is changed to an interger using ParseInt(). This validates that the input is a number within range, or is a number.
  - The app uses the input to determine the types (or choices) or letters of characters used, using an if statement.
  - Then I assigned values to the variables using arrays for character, number or alphabet.
- I created another variable to concatenate the above variables.
- Also created a loop that will loop through the enter prompt until it reaches the number entered by user.The password variable takes the value from the loop, and converts it to a string.
- The string value then populates into the text area for the user using a UserInput function.

Website Link
https://libhartll.github.io/PWGenerator03/

GitHub Link
https://github.com/LibhartLL

LinkedIn Link
https://www.linkedin.com/in/lindsay-libhart-74453a238

Screenshot:
<img src="./assets/2022-06-24 12.31.45.gif" width="80%"></img>

Contact
Lindsay Libhart
https://github.com/LibhartLL

June 24, 2023
