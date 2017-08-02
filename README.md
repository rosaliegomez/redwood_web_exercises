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
            
   
    