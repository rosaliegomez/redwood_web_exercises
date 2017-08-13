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