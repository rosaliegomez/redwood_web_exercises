# This will ignore the .DS_Store file anywhere in your file system. Shows that it will never be important.
**/.DS_Store

**Notes from August 1, 2017**

* Directory/ File
    pwd     Print Working Directory
    mkdir   Create directory
    'cd'    Change directory, moves to a specific directory
    'cd ..' leave directory, go to the parent directory
    ls      List Files
    touch   Creates an empty file
    cat     Show the contents of a file
    rm      Delete files or directories
    Control L - Clears the terminal
    '-r'    denotes recursive element,
            repeats the same operation to the directories within the current directories.
            It implies some sort of repetition of the same process
    'rm -r' if the directory or any inner directory has files
    'rm -rf directory' if the directory or any inner directory has files

Git workflow
HTML Overview
    *Elements are containers (grammar)
        *Elements can have either more elements or text (text nodes)
        *Types of elements
            *Block level -> div, p, h1, h6
            *Inline elements -> strong, em, span
            *Void elements -> br, meta, hr
        *Rules
            *block within block (valid)
            *inline within inline (valid)
            *inline within black (valid)
            *Are void elements block elements (some of them -> br, hr) 
            *Block within inline (invalid)
        *Attributes (describe elements)
            *examples: class, id, src, href
            *2 types
                *Required: a -> href, 
                *Optional: p -> class
              
              
        Without erros vs Valid
            *Well-formed documents
               - Have correc syntax
            *Mal-formed document
               - A non-void element must have a closing
         *Valid document / Invalid document
            * We need to follow the rules defined by the doctype
            * https:
            
**Wednesday - August 2, 2017**
## What's the HTTP protocol?
   -Rules to exchange messages in the internet.
    Types of messages
        -Questions
        -Command
    *Messages come in pairs - a request and response
    HTTP Verbs
        -GET -questions
        -POST - commands
        -There are more: PUT, DELETE
    Parts of a message
        -Header
            -Meta-information (configuration)
                -Status code: 200 ok( means "I got your message and everthing is ok,
                Or 404 Not found, or 500 Server error)
                -Content type (either) image, audio, video, text, html, or pdf)
    (When we make requests, it only has a header, no body)  
   -Body
         -THe real content
        (These two represent part of a message)
        (Git Pull origin master - is the command that pulls or downloads changes made(possibly by other users))
    Forms and form elements
    ("<form action> shows what server to send the info do
    then include METHOD - which is either GET or POST)
    (label for="username" the "for" is defining the element)
    <!-- All form elements need a name or they will be ignored by the server -->
   (By choosing input type as "password" it hides the information)
   (ID's are unique, usually used by truncated laguages like JAVAscript and CSS, not so much with HTML,)
   (Order of elements in HTML is not relevent)
   (Input type can be "checkbox")
   (add "?inspect to the request bin website to view)
   (<Input type="radio" name="type1" value="frontend"
   -- if they have a different name, you can click several answers.  If its the same name, then only one)
   (EX: <select name="framework" id="framework -- if you include 'multiple' right here, it allows several.">
        <option value="bootstrap">Bootstrap</option>)
        *Don't forget that "Select" is a dropdown box.
        "Disabled" and "readonly" are an attributes put in the input element"
        Disabled makes the box grayed out.
        Readonly makes certain text always there. Doesn't allow you to type in.
    Inspecting form values in RequestBin
    -https://requestb

GIT WORKFLOW    
    'git status
    git add filename
        "git add ." This adds everything in the current directory but deleted files
        "git add -A" This adds everything including ignored files.
        "git commit --amend -m" (basically rewrites the last commit)
   
       
     git log to see your new commit
     git push origin master
     man git - manual git
            
   Notes on CSS August 2, 2017 - Afternoon
   
 Inline styling is discouraged. ie: <h1 style="color: blue; font: 12px">
 Better is: <style>
                .fancy-header {
                    color: blue;
                    text-decoration: underline;
                    }
            </style>
            </head>
            <body>
                <h1 class="fancy-header">I've got style</h1>
            
            
 HOW TO DO CSS:
 
    <link rel="stylesheet" href="forms.css">
   Link always goes in the <head></head> section.
   To create notes in CSS, use /**/.  /* make your notes like this.*/
   In CSS, class selectors have priority over basic selector.  
   Basic Selector
   ex:
    selector{
        property1; value;
        property2; value;
        }
        
   Multiple Selectors:
    ex: if you want several headings to be the same
    ex: h1, h2 {
               color: red:
               }
    
   Combining Classes
   Target a group of elements and items with a specific id.
    EX:
    .fancy-header
    
    .extra-large
    
  Use a <class ID> to make something really specific.
  ex: in css write: #name {
                        color: green;
                        }
       * This makes sure that only the name is green regardless of where it it placed or if it's in a header.    
    Ids are more specific than classes in CSS
    
  Direct- Child
  If they are both in the same div, there is a direct child and they will be affected, 
  --UNLESS it is written like this= #personal>h2 {
                                        color:yellow;
                                        }
                                        
     #top:hover{
        text-decoration:none;
        
        Changes the state of the mouse hoving over a link or other item.
        
 **August 3, 2017**
 
 ID selectors take priority over element selectors.  Class selectors are in the middle.
 
 Pseudo-classes
 Activates when you do a certain action.  Becomes interactive with user interaction.
 These are:
 Link
 Visited
 Hover
 Active
 
 These are typically used with anchors.
 
 Properties:
 Colors
 Text
 Font
 Backgrounds
 Lists
 Tables
 
 This would look something like:
 
 a:visited {
    color: purple;
    }
    
    Or 
    
 a:hover {
    background-color: gray
        }
     
     
 
 To remove bullets in CSS:
    ul{
       list-style-type:none;
       }
 body {
    background-color: #E6ECF0
    
 a {
    color:
    }
 
 **"Class" and "panel" are comment names for columns in html"
 
 When you see repetition, remove it.
 
 use a comma if using the same rule.
 
 Go to www.w3schools.com --> to find code for "rounded corners" or other css data.
 
 www.caiuse.com --> Come to this site to verify that you can use code from w3schools.
 
 To make a cute "twitter-like" button:
 
 button {
    font-weight: bold;
    border-radius: 15px;
    border: 1px solid #3B94D9;
    
  ( to make classes to distinguish the different types of buttons:)
  
  .highlight {
    background-color: #B94D9;
    color: 3fff;
    }
   .regular {
        background-color: #fff;
        color: #3B94D9
            }
   Then in html file, change it from <button> to <button class="highlight"> or <button class="regular">
   
   To change input, as in "search twitter," do the following:
   
   input {
    border-radius: 15 px;
    border:
    background-color:
    background-image: url ("http://via.placeholder.com/10x10);
    background-repeat: no-repeat;
    background-position: right
  
  To change navigation links:
  Make a class:
  .nav-item {
            font-weight:
            color:
            text-decoration:
      
  To make a background image:
  .hero {
    /*relative path*/
  background-image: url("../imgs/background.jpeg")      
            
            
            Then change in html <a href="#"> to <a href="#" class="nav-item"
            
  To make a circle, make the border radius larger, Luis used 100px to make a circle.
  
  One more service for images is placeholder.com
  Monospace fonts are typically used in terminals.
  Glyph - is how the letter or font will look in the computer.
  
  *Using google fonts*
    Select a font
    
 In the META section, put link to the font before the stylesheet.
  
 In css, to make a selector that uses all anchor elements, use "a".
 
 #container h1.fancy-header {
 }
 This is an example of order placement.
 
 Command + I = Opens the counsole
 
 To Make a background image in css:
 .body {
 background-image:url ("../imgs/background.jpeg")
 }
 
 If background image won't or can't load, then the background color will show.
 
 
 THis is an example of a pseudo-file:
 a:active {
    color: red;
 }
 
 
   ** fyi, ID's should not be numbers.**
   
 **August 3, 2017 - Notes on Box Model:
 
 How to creat boxes:
 In body (of HTML):
 
 <div id="box1" class="boxes"></div>
 
 Boxes need a value to exist. This means it will not show much unless it has a value and a border.
 You can style in the html style section located in the <head></head>, but it is better to put in the css. 
 
 
 in <style>
    .boxes {
        width: 200px
        height:
        background-color:
        padding:
        border:
        margin
    
    #box1{
        margin-bottom: 5px;
        
  use the following to select images within boxes or div(s).
  
  .boxes>img {
    position: absolute;
    bottom: 60px;
    }
    
    Make sure that position is indicated within classes.  If it is relative to something
    else, make sure its listed as relative.
       
 __________________________________________________________________________
 
 Friday August 4, 2017
 
 1. A quick note on box sizing
    border-box vs content box
    
    "CSS 3 box model" 
 On some style sheets, box-sizing: border-box; 
 may be used but does not change the height/ width.  
    
 In the content box option, the padding affects the overall size.  
 
 
 
 2. positioning
 Can be very complicated.  Only use one type, since it can get very confusing.
 
 
   *floats - Has ability to break free and layer on top.  Also similar to Tetris.  
   Each element can be positioned individually.  
   
  ** If you add a float to a "block-element" then it doesn't technically act like a block element. 
  Usually apply "clear:" to last one.
  Floating can be very confusing, and frameworks are becoming more popular.
   **Luis recommends using a red border at first to distinguish positioning. 
    relative - Using relative positioning is alot easier.  you can use right: left: top: and bottom: followed by a
    number to show where a certain object goes. Negative numbers may also be used. 
   
   
   absolute positioning - if you want to use absolute positioning, 
   
   use something similar to the following:
   position: absolute;
   left: 10px;
   top: 0px;
   
 Distinguish whether box or shape or item is RELATIVE or ABSOLUTE!
 This can be done in the formatting section of the css page that you wrote the other 
 basics such as height and width.   
 
 With relative positioning, it may overlap images and it can appear to be lost. :(
   
 (if you use -)
 
 
 fixed positioning
 -Tries to apply relating to the browsing window.
 -Doesn't matter who the parent is.
 
 
 Instead of choosing "bottom: 60px," you can use "top:-40" or something similar using
 a negative number.
 
 ##CSS Notes
 
 The unit of work in CSS is a rule.
    -It has one or several selectors.
    - Can have one or more declarations that affect properties and values.
 *selector, properties, 
 'selector {property: value;}'
 
 Types of selectors
    *elements, classes, ids, pseudo-selector
    *Combinations 
    
 There are 3 ways to include CSS in a page:
    1. Inline: Using the style attribute.
    2. Embedded. using the "style element"
    3. External. using the 'link' element pointing to an external '.css'file.
 
 Types of positioning:
    -static is the default positiioning
    -absolute and relative- mostly for images
    - fixed - usually for main navigation bars
    -float is mostly used to create columns.
 There are 3 main font families:
 
 Serif, Sans serif, and monospace
 
 How to use Google fonts
    1. Select a font.
    2. 

Fundamental blocks of websites include:
header, footer, main, block.

So the first step is to
1. analyze duplication
2. Find all variations

There are several approaches to CSS

OOCSS (nicole SUllivan)
   Separate container and content.
   Main thing is to separate elements from container.
SMACSS (Jonathan Snook)
    Base (Reset)
    Layout (Positioning) like columns
    Module (lke in OOCSS)
    State - like disabled elements
    THeme - the only part that is optional
    
    (Involves separating modules)
    
    
BEM (Yandex)

   Block - Entity - Meaningful on its own (module in OOCSS). 
            Header, menu, input
   Element
     - Part of a block semantically tied to its parent.  Menu-item, checkbox-caption, header-title
        
  Modifier
  Represents a change in appearance or behavior (state in SMACSS). 
  disabled, highlighted, checked,  and fixed)
             
  IE. you can include "Base-type" rule to change the body and "Menu or nav-menu" to 
  change the menu.
  (Union of the two other) 
  
  In this, go to HTML and you can select Class as something similar to "button button-regular"
  Or "button button-highlighted" to should that there is a regular button class and a special one.
  Between "button" and "button-highlighter"  it will accept the last stated one 
    
   
   
   1. Base or reset rules
   2. modules rules (as they are usually positioned in the page.
        1. Blocks
        2. elements 
        3. states
   3. Layout (column or grid system)
   
_______________________________________________________________

To create margins, you can set width: to 960px and set margin to 0 auto, and this centers
the text.  THis only works for the body.  

Fixed layouts do not change when the window is minimized.
   
 If you change it to "fluid" then it moves smaller when the window is reduced.
 If you put width to :80%
 and other columns to :20% it changes and comes fluid. 
 
 You can use "media screen" for different screen sizes.
 
 /*Ex : for screen sizes 500px and up*/
 @media screen and (min-width:500px) {
    selector {
    property: value;
    }
   }
   
   Min and Max are 

screen sizes between 960 px and 1200px
@media screen and (min-width:960 and max width: 1200px)

Media queries can have a bunch of rules

Viewport
in <head></head>
write meta name="viewport" content="width=device-width, initial scale=1" 
print.css can be used to print the code.


Put "repository"

**August 8, 2017**

1. Complete Media queries exercise
2. Review of the solution
3. How to create a simple grid system

media Queries Exercise

note: there are not many containers, so it may work a little differently.

First, add viewport to <meta> tag, and link to css.

(commit) (prepare the HTML page for styling)

In css,

Wireframe is an idea that comes before formatting, focuses on a general layout 
(without colors, sizes, etc).

Lately most developers and designers focus on mobile design first.

Since there are only 2 screen sizes asked for, there should only be one (1) media 
query,

/* Reset Styles*/

html, (if you want to use the full size of the page, start with "html")
html, body {
    margin: 0 (This is very important if you are trying to make things align)
    height: 100%
    width: 100%
    box-sizing: border-box;
    }

body {
    display: block;
    padding: 5px;
    
h1 {
    
.alert-info {
    background-color: lightblue;
    border: 2px solid lightgrey;
    color: #000; ---> Wont work!
    text-decoration: none; ----> won't work!! 
    }
    
.alert-info > a { 
    color: #000;
    text-decoration: 1em;
    text-align: center; ---> "text-align wont work with block elements, only inline!!"
   
   }
   
   .nav-links {
   padding: left
 .nav-links li {
    
   background-color: lightgray;
   padding: 1em;
   text-align: center;
   list-style-type: none
   margin-bottom:
   
   .header-img>img {
   width: 100%;
   
   
   .subsection: {
    font-style: italic}
   
   
   ** TO HIDE SOMETHING:
   use 
   hide on mobile: {
   display: none 

   }
   
   ** TO MAKE LIST IN A ROW**
   
   li { 
   display: inline-block;
   }
   
   To make a COLUMN, USE :
   float: (try to float to the left always)
   and 
   width:
   
   This can be used with text as well.
   
   A column that takes up 1/3 on the right, would be written as:
   
   .main {
    float: left;
    width: 67%
    }
   
   
 
 **August 8, 2017 Notes continued**
 
 Grids
 A generalization to create layouts based on columns.
 
 - They are generally 12 columns.
 - We have several general concepts.
 
    Container- will define the maximum width of the blocks in the page. (Example
    was photo of giant cat.)
    Can use something like the following in css:
    
    .container {
    width: 90%
    max-width: 1200px;
    margin: 0 auto;
    }
    
    **in html you can add a <div class of "column-one-third" before the <p> paragraph starts.
    
    .column-one-third {
        float: left;
        width: 33%
        }
        
    .row {
        width: 100%
        overflow: auto;
        }
        
        
        
    
    Row -   It's a container for columns. (Similar to Twitter example)
    Columns - Are usually elements floating with a specific width based on percents. 
    (We should at this moment be most familiar with this one.)
    
 In HTMl, if you have several divs that you intend to be a column together, you
 can create 
 
 
 The ".row after" works on more browsers that the .row at fixing the rows of different
 columns to be aligned.  (Without it the rows can appear to start at different heights.)
 .row after {
    content: "";
    display: table;
    clear: both:
    
 Wed developer tool bar
 
 @media-screen and (min-width: 360px) {
  /*the is going to be applied to small screens and bigger*/
  float: left;
  width: 100%
  
  
  Most framers use 5 types:
  xs
  x
  m
  l
  xl
  
  <div class="column-one-third column-three-thirds-medium">
  
  .offset-one-third {
    margin-left: 33%;
    }
    "offset affects empty columns"
   
   
   **August 9, 2017**
   
   Review of grid system exercise
   
   Use div.container as a class since it is gray.  
   
   You can use div.row*5 to quickly create 5 rows.
   
   <div class="row>
    <div class="column">1/2</div>
    
    if you are in html and you want to go to your link, you can hit: COMMAND + B (while the link is highlighted
    
    padding can affect size.
    
    first thing you do when you have a grid system, is put it in a container.
   
   
   How to use bootstrap:
   
   Is a css framework.  
   There are several ways to set up.
   Easiest way is CDN
   
   Copy the first link tag and add it to the head of your document
   copy the only scrip tag and add it before the end of your body element
   
 **August 10, 2017**
 Navbar of Bootstrap is usually the biggest section of code.
 Usually the main class will tell you padding and second will tell you the colors.
 example: <navclass="navbar navbar-default" the first nav bar deals with padding and the second deals with colors.
 Since div class is "container-fluid" you would use percentage.
 
 Don't remove "navbar-header" because that is what makes it responsive.
 Don't change first three things. 
 You can start changing after "collapse navbar-collapse"
 
 There is "navbar-left" and "navbar-right."
 
 In bootstrap, hero class is called "jumbotron."  
  ie.  
  in html:
  
  .hero-pizza {
  background-image: url("http....com");
  
  .hero-pizza-title {
    text-aline: ...
    background-color:...
    padding: ...;
    opacity: (makes the background transparent.)
  }
  
  Use "em" instead of pixels to size things when you want it to move.  
  
  You can use (in CSS)
  
  background-size: cover;
  
  to make the full image to fit within the page.
  
  When you look at panels, the first panel affects size and padding, and the panel-default, changes the colors. 
 
 
 Make a live template
 <div class=panel panel info
 
 <div class= panel-heading></div?
 
   <div class="panel-body"
   
   **To do a grid in bootstrap**
   
   but in <div class="col-xs-6">
   
   'col-xs-3' means three columns for extra small devices and bigger (or all devices)
   
   or you can put <div class='col-xs-12 col-md-4'>
   
   Means that 
   
   **August 14, 2017**
   
   
   Git Branches
   
   Commit - has several parts  
   an author,
   a message,
   a commit ID.
   
   Master is the main branch in github.
   "head" is considered the last commit or most latest.
   
   Feature Branch
   
   Reasons to "commit:"
   New feature 
   Removing errors
   
   If you want to remove branch, you can (in the terminal) type "git branch -d 'name of variable'"
   
   New method of pushing from now on: 
   1. Feature branch for the lesson/exercise
   2. commit changes in that new branch
   3.  merge with master
   4. push to master
   
   **Javascript**
   
   var name = "codeup"
   
   Example of a statement.
   
   Statements
    variable declaration " or var identifier"
        Identifier Cannot begin with a number(but can be included after beginning)
        Cannot include spaces
        Dashes are not allowed
        but Underscores are.
        
    
 Assignment
    'identifier +variable'
    
  Variables can change.
        
  Constants stay the same, they cannot change type or value.
  example 
  const pi = 3.145;
  
  if you type pi = 3.1 
  you will receive an error message. 
  
  "//" is considered a single-line comment
  
  /*  is for multiple line comments */
  
  Boolean operators are &&, ||, and !
  
  modulus %
  
  The remainder.  
  
  6 % 4 = 2
  
  3 % 4 = 3
  
  Difference between a statement and an expression:
  
  An operator and an operand.
  
  Operand is 1 or ...
  Operator is a plus sign.  
  
  Statement is a combination of expressions.  
  And it ends with a ; or a semi-colon.
  
  + operator is considered an overloaded operator because it can work on strings
  and addition.  
  
  Concatenate 
  
  '\' has special meaning. 
  example if you want to write a single quote. you can type
  
  'here is a single quote -->'<--'
  but you have to write 'here is a single quote -->\' and it works'
  
  '\n' shows that it's a new line.  
  
  you need to type two backslashes to get get one.  
  
  If you want four backslashes, you need to type 8!!
  
  
  *String functions will replace the value but will not permanently chance the variable.  
  
  
  Exercise Notes from Monday Afternoon
  
  var sample = "Hello Codeup"
  To permantantly change to uppercase
  sample = sample.toUpperCase()
  
  sample.toUpperCase; (is not permanent)
  
  sample + 'students';
  adds students to the back.
  
  sample.replace('Students','Class');
  sample = sample.replace('Students','Class')
  
  var indexofCodeup = sample.indexOf('CODEUP')
   
  Use naming convention - called camel case.
  
  This means write The Little Mermaid as littleMermaid.
  
  
  var littleMermaid = 3
  var brotherBear = 5
  var hercules = 1
  
  var totalDays = littleMermaid + brotherBear + hercules
  
  var grandTotal = totalDay * 3
  
  grandTotal = 27
  
  Next problem.....
  
  var googleRate = 400
  var amazonRate = 380
  var facebookRate = 350
  var googleHours = 6
  var amazonHours
  .............incomplete
  
  var paycheck = googleHours * googleRate + amazonHours * amazonRate + facebookHours * facebookRate =
  7420
  
  var classFull = False
  var scheduleHasConflicts = false
  var canEnroll = !classFull && !scheduleHasConflicts;
  
  However... try not to make variables such as "classNotFull" since it makes things more
  difficult to have a negative in the variable.
  
  Next problem...
  
  // discount is applied if brought more than two items or they are a premium member and the
  offer has not expired.
  
  (It's a good idea to make notes in the code)
  
  var numberOfItemsBought = 100
  var is PremiumMember = false
  var offerIsExpired = false
  
  numberOfItemsBought >2 || idPremiumMember) && !offerIsExpired
  
  
  var username = 'codeup';
  var password = 'notastrongpassword';
  Create a variable that holds a boolean value for each of the following conditions:
  
  the password must be at least 5 characters
  the password must not include the username
  the username must be no more than 20 characters
  neither the username or password can start or end with whitespace
  
  In console type:
  
  var username = 'codeup';
    var password = 'notastrongpassword';
    
  var passwordIsLongEnough = password.length >=5
  var passwordContainsUsername = password.indexOf(username) !==-1
  
  
  (This checks if password contains the username.)
  
  
  var usernameIsTooLong = username.length > 20;
  var UsernameHasWhiteSpace = username !== username.trim()
  var passwordHasWhitespace = password !== password.trim()
  car hasWhiteSpace = passwordHasWhiteSpace || usernameHasWhiteSpace
  
  
  This would look like 
  'codeup' !=='
  "true"
  
  To use java in html, put in a <script> tag in the body.
  
  
  
  //inline javascript inside of script tags
  
  USe
  <script>
  "use strict";
  console.log('hello redwood');
  console.log('this is inline JS');
  
  </script>
  <script src = "http://js/my_javascript_script
  
  Every file from now on should read "use strict". 
  
  Two ways to use javascript is internal (in the html page) and external a separate 
  one.  In external sheet, still write, "use strict"
  
  *User interaction*
  alert (shows a message
  confirm (acts as a boolean)
  prompt ('What is your favorite pizza topping?') (Gets text input from the user;);
  
  you can store that in a variable.
  car toppingToAdd = prompt('What pizza topping should we add?')
  toppingToAdd "anchioves"
  
  ** August 15. 2017 **
  
  to make new branch... "-b.."
  
  in example...
  
  alert('ready for action')
  to make sure its linked.
  
  console.log('before the if statement')
  
  if() {
    console.log('body of the if statement');
  }
  

  
  
  if (true)
  it will show...
  if(false)
  nothing will show. 
  
  } else {
    console.log('condiiton evaluates to false');
    colsole.log('else branch')
  }
  
  var numberOfTimesIVotedForTheSeatingChart = 1;
  
  if (numberOfTimesIVotedForTheSeatingChart ===1) {
    console.log('good job');
    } else if (numberOfTimesIVotedForTheSeatingChart >1 && numberOfTimes... <99 {
        console.log('what do you think you are doing?');
     } else if (numberOfTimesIVotedForTheSeatingChart > 100 {
             console.log('You must have written a script to break the site');   
    } else if (number of... === 0) {
        console.log(why did you not vote?);
        }
        console.log(after the if statement.
        
        
    Loosely is ==
    Strictly is ===
    Use Strictly most of the time. 
    
    Usually anything inside of curly braces is indented one time.
    
    
    
    
   Ternary Operator
   
  Statements not expressions.
  Expression has operators and operands.
  
  Ternary operator makes it so that you can make an If/Else statement
  as an expression.
  
  condition ? 'value if true' : 'value if else
  
  Var message = (1>2) ? 'math is broken' : 'everything is fine';
  
  console.log(message)
  
  
  Example:::
  
  reg:
  
  var message;
  if (success) {
    message = "operation as successful.":
    }else {
        massage = "oops, something went wrong.";
        }
        
  Rewritten with a ternary operator
  
  var message = (success) ? 'operation was successful.' " 'Oops, something went wrong:'
  console.log(message);
  
  **Message can be any variable**
    
  
  
Switch (variable we want to look at) {
    case a literal value;
    break;
    }
   
   Don't fall through intentionally.  Meaning... don't forget to use "break"
   Switch case is easier to understand. 
   
   example:
    
var 


** August 16, 2017 *

Git fetch is a git download.  downloads change from the remote without applying them to the mty local repo

git stash saves work in progress.


(taken from switch js exercise)
// 1. variable declaration. 2. assignment.
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Neither of these are expressions.
// 1. variable declaration 2. Assignment
// After the '=' is considered the assignment part.
// If you see arithmetic operation, then it's an expression.
// a function call is an expression IF it returns a value
var color = colors[Math.floor(Math.random()*colors.length)];

console.log(color); // Not an expression
In this example, color is a string.  But...Color is an expression. 

These are considered sequectual statements. 

Switch (color) { is a statement.
    case "red":
        console.log ('color red');
        
Cameron's Case

var sale = 190;
var minSale = 200;

if (true) {}

if (sale>minSale) {
    Then the discount applies
    and the rest of the functionality to give discounts
    }
    
 Turnary Operator - is whatever type you like....
 
 
 ...
 
 Loop
 
 sequential -> if (condition) ) {} -> while (condition) {}
 
 // print the number from 1 - 5
 
 var limit = 5;
 var counter = 
 
 //go to
 
 console.log (1)
 console.log (2)
 console.log (3)
 console.log (4)
 console.log (5)
 
 Then you can choose:
 
  console.log(counter);
  counter++;
  console.log(counter);
  counter++;
  console.log(counter);
  counter++;
  console.log(counter);
  counter++;
  console.log(counter);
  counter++;
  
  while  (counter <= limit) {
    console.log(counter);
    counter++
    }
    
    
    If you want to do only once then use do while...
    but if more use while.  
    
    for (
        counter = 1; //1. first time (once)
        counter <= limit; //2. should i continue?
        counter++ //4. increment -> go to condition
        ) {
        console.log(counter); // 3. body
        }
        
 Best practces are to include "variables" at the top of the code.
 
 
 if (counter === 3) {
    console.log('you reached the number 3");
    console.log("I will stop the app");
    break;
    }
    
 Do - while and while are better used when you're unsure of the number of times 
 it will be looped.  (ie. doesn't necessaryily use i++ or i--). 
 
 
 **August 17**
 
 .repeat works to repeat.
 
 .toString() will create a string out of numbers.  
 
 
 to make a function:
 
 function printName() {
 cosole.log(firstName + " " + lastName);
 }
 
 "argument is the number portion or info put in the () following an established function.
 
 Global scope : 
 Function Scope: variable has to be inside of the function.
 
 ** August 22 **
 
 Object properties can either be written:
 
 book["title"], book["author"]
 or 
 book.title, book.author
 
 **August 23**
 
 Arrays arrays are objects.
 Functions are objects.  Math is a function that an be used as an object.
 Almost everything in javascript is an object.
 
 
 Math.random();
 
 Math.round(20.49)
 Math.round(20.5)
 Rounds to nearest number....
 
 math.floor- Will always choose the smaller number.  45.95 = 45.
 -45.95 = -46
 
 Math.ceil(.95) = 1
 Math.ceil(7.04) = 8
 
 Math.pow(2,16); 
 
** August 24 **


.getElementsByTagName means the elements within the <> ie <form>.
snake case
camel case
or dot notation
train case

 
 
 