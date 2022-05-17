# HW_11_Note-Taker
Table of Contents
-------------------------------------------------------------------------------------------------------

 * Introduction
 * Tech
 * Installation
 * Contributers



 Introduction
----------------------------------------------------------------------------------------------------------

an app that lets a user input and save notes. if a user decided they no longer need a specific note they can delete it as well.

    For this assignment I was given start code for a complete front end of an application. This application when loaded on the local server (port 3001) as defined in the server.js file will bring a user to a landing page inviting them to start a note. Once clicked indicating to proceed the user will be brought to the notes page that was required to be a path in the server.js file. The user is prompted to enter a title for the note and a body description for the note as well. If the user does not input in either one or both fields an error will occur. Once both fields have some sort of response the user can click the floppy disk icon in the top right corner which will save the note to the left of the screen with its title on display and a red trash can icon next to it. When this happens on the front end it tells the back end to append the note to an array in a json file through the fsutils.js file. When the user clicks the trashcan icon it will delete the note thanks to having similar code as the append to file. It compares the unique id given to that note when it was generated to the deleted one and removes it from the file while only keeping the notes that have other specified id’s thanks to uuid.

    

 * Live URL with heroku: https://tranquil-lowlands-77594.herokuapp.com/

 * Live URL with GITHUB: https://gretchesketch.github.io/HW_11_Note-Taker/

 * Repo URL: https://github.com/gretchesketch/HW_11_Note-Taker



Tech
------------------------------------------------------------------------------------------

This project used the following:

 * HTML
 * CSS
 * Javascript
 * Node.js
 * express.js
 * uuid (for unique ids assigned to different notes)
 * fs (for access to the file system)
 * nodemon (not required but a handy tool)
 * heroku


Instalations
--------------------------------------------------------------------------------------------
 
 * it is required to install express in the command line by running 'npm i express'.

 * it is required to install uuid in the command line.

 * installed nodemon using the comand line, this was helpful, but not required.




 Contributers and contact information
----------------------------------------------------------------------------------------
 
 * Gretchen Jensen : https://github.com/gretchesketch

 * Special shout out to my tutor Henry

 * Also like to thank my class instructor, Trey, for making himself available to ensure the class got through the homework assignment.





 ![img](public\assets\images\npm_start.jpg "starting local host")
 ![img](public\assets\images\landing_page.jpg "when you pull up the local host in the browser on port 3001")
 ![img](public\assets\images\create_a_note.jpg "start typing in the fields and click the save icon")
 ![img](public\assets\images\added_notes.jpg "note added to the side bar displaying title")
 ![img](public\assets\images\notes_added_to_json_file.jpg "note added on the backend to the json file")
