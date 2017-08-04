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
        (These two represent partf of a message)
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
        
       
 __________________________________________________________________________
 
 Friday August 4, 2017