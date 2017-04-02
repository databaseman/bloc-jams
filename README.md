

**Title**:  bloc-jams

**Description**:  A digital music player like Spotify that we'll use to learn frontend web development. 

**Technology**:  HTML, CSS, JavaScript, JQuery, and Buzz for playing music

**Install on Cloud9**:
  1. Go to your Cloud9 dashboard  
  2. Create new workspace
      * Workspace name:  bloc-jams  
      * Choose HTML5 template
      * Clone from Git URL: https://github.com/<c9username>/bloc-jams.git

**Run on Cloud9**:
  1. Open up index.html
  2. Click on Run on the Cloud9 toolbar to run index.html
  3. Wait for web server to start
  4. Go to URL: https://bloc-jams-<c9username>.c9users.io/index.html

**Install on Heroku** (all works are done from Cloud9):

  Heroku doesn't support static page, so we need to fool it by adding a php file
  
  $ vi index.php
  
    <?php header( 'Location: /index.html' ) ;  ?>
  
  $ git add -A
  
  $ git commit -m "Setup for Heroku static page"
  
  $ git push
  
  $ heroku create
  
  $ git push heroku master
  
  Go to web site returned from push command.  For example
     https://secure-springs-93236.herokuapp.com/index.html

**It might takes a couple of seconds before it plays on Heroku because of some site specific delays.**

  You can rename the url by doing the following:
  
    $ heroku apps:rename minh-bloc-jams
    Go to new URL: https://minh-bloc-jams.herokuapp.com  	

