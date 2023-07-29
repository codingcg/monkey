document.addEventListener('keydown', function(event) {
  // on I go back to higher layer
    if(event.keyCode == 73) { 
        window.location.href = "../../computer_science.html";
    }
    // on 1 toggle random box
    if(event.keyCode == 49) { 
        toggle('random');
    }
    // on 2 toggle noise box
    if(event.keyCode == 50) { 
        toggle('noise');
    }
    // on 3 toggle soundeffect box
    if(event.keyCode == 51) { 
        toggle('soundeffect');
     }
    // on 4 toggle rules box
    if(event.keyCode == 52) { 
        toggle('rule');
    }

});

function toggle(id) {

  /*let classes = document.getElementsByClassName("floating-box");

  for(c in classes) {
    c.style.display = "none";
  }*/

  let el = document.getElementById(id);
  el.style.display = (el.style.display == "block") ? "none" : "block";
}










Reveal.initialize({
  controls: true,
  progress: true,
  center: true,
  hash: true,

  // Learn about plugins: https://revealjs.com/plugins/
  plugins: [ RevealMenu, RevealZoom, RevealNotes, RevealSearch, RevealMarkdown, RevealHighlight, RevealChalkboard],

  dependencies: [
    
    // Works too
    //{ src: '../../node_modules/reveal.js-toolbar/toolbar.js' },

    { src: '../../Reveal/plugins/toolbar/toolbar.js' }

  ],

  menu: {
    
  }

});












var header_content = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="description" content="My Copy Monkey">
    <meta name="author" content="Vera Christ">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="../../Reveal/dist/reset.css">
    <link rel="stylesheet" href="../../Reveal/dist/reveal.css">
    <link rel="stylesheet" href="../../Reveal/dist/theme/black.css" id="theme">
    <link rel="stylesheet" href="../../Reveal/plugin/highlight/monokai.css">
    <link rel="stylesheet" href="../../Reveal/plugin/chalkboard/style.css">
    <link rel="stylesheet" href="../../Reveal/plugin/customcontrols/style.css">


    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js-plugins/menu/font-awesome/css/fontawesome.css">


    <link rel="stylesheet" href="../../slides.css" type="text/css" media="screen" />
  </head>
      
`;

var side = `

<a href="../../computer_science.html style="z-index: 10">
      <span class="badge badge-pill bg-secondary" style="box-shadow: 0px 0px 3px 0px #fff;border: 3px solid #fff; position: fixed; top: 1%; right: 1%; padding: 1px; height: 6%; width:3%">
        <img src="../../general_img/back.png" width="40px" style="margin: 0px">
      </span>
    </a>
    <a href="#" onclick="toggle('random');" style="z-index: 10">
      <span class="badge badge-pill bg-primary" style="box-shadow: 0px 0px 3px 0px #fff;border: 3px solid #fff; position: fixed; top: 8%; right: 1%; padding: 1px; height: 6%; width:3%">
        <img src="../../general_img/random.png" width="25px" style="margin: 0px">
      </span>
    </a>
    <a href="#" onclick="toggle('noise');" style="z-index: 10">
      <span class="badge badge-pill bg-info" style="box-shadow: 0px 0px 3px 0px #fff;border: 3px solid #fff; position: fixed; top: 15%; right: 1%; padding: 1px; height: 6%; width:3%">
        <img src="../../general_img/noise.png" width="25px" style="margin: 0px">
      </span>
    </a>
    <a href="#" onclick="toggle('soundeffect');" style="z-index: 10">
      <span class="badge badge-pill bg-danger" style="box-shadow: 0px 0px 3px 0px #fff;border: 3px solid #fff; position: fixed; top: 22%; right: 1%; padding: 1px; height: 6%; width:3%">
        <img src="../../general_img/soundeffect.png" width="20px" style="margin: 0px">
      </span>
    </a>
    <a href="#" onclick="toggle('rule');" style="z-index: 10">
      <span class="badge badge-pill bg-success" style="box-shadow: 0px 0px 3px 0px #fff;border: 3px solid #fff; position: fixed; top: 29%; right: 1%; padding: 1px; height: 6%; width:3%">
        <img src="../../general_img/rule.png" width="20px" style="margin: 0px">
      </span>
    </a>

    <!-- RANDOM -->
    <div class="row floating-box img-thumbnail" id="random">
      <div class="col-lg-12 col-sm-12 col-12 box-upper-section bg-primary">
          Zufall .... 
      </div>
      <div class="col-lg-12 col-sm-12 col-12 box-lower-section">
          Auswahl
      </div>
      <div class="label">
        <h4><span class="badge badge-pill bg-primary">Zufall</span></h4>
      </div>
    </div>


    <!-- NOISE -->
    <div class="row floating-box img-thumbnail" id="noise">
      <div class="col-lg-12 col-sm-12 col-12 box-upper-section bg-info">
        Noise ....
      </div>
      <div class="col-lg-12 col-sm-12 col-12 box-lower-section">
          Level???
      </div>
      <div class="label">
        <h4><span class="badge badge-pill bg-info">Lautstärke</span></h4>
      </div>
    </div>

    <!-- NOISE -->
    <div class="row floating-box img-thumbnail" id="soundeffect">
      <div class="col-lg-12 col-sm-12 col-12 box-upper-section bg-danger">
        Soundeffect ....
      </div>
      <div class="col-lg-12 col-sm-12 col-12 box-lower-section">
          Music 1
      </div>
      <div class="label">
        <h4><span class="badge badge-pill bg-danger">Soundeffect</span></h4>
      </div>
    </div>


    <!-- RULES -->
    <div class="row floating-box img-thumbnail" id="rule">
      <div class="col-lg-12 col-sm-12 col-12 box-upper-section bg-success">
        <ol>
          <li>Kurz</li>
          <li>Klar</li>
          <li>Einfach</li>
        </ol>
      </div>
      <div class="col-lg-12 col-sm-12 col-12 box-lower-section">
          Mehr???
      </div>
      <div class="label">
        <h4><span class="badge badge-pill bg-success">Was ist wichtig?</span></h4>
      </div>
    </div>
`

var first = `
<section data-background-size="contain" data-background="../../general_img/spiral_slow.gif">
      </section>
`

var questions = `
Welche Fragen habt ihr noch? <br>
<img width="200" data-src="../../general_img/question.png">
<br>
`

var summary = `
<blockquote style="display: inline-block;">
  <br>
    Was habt ihr gemacht? 
  <br>
  <img width="70" data-src="../../general_img/learned.png">

  <br>
  <p style="color: red">
    Erkentnisse? 
  </p>
  <img width="70" data-src="../../general_img/learned.png">

  <br>
    Was merkt ihr euch?
  <br><br>
  
</blockquote>
`


var last = `
<section>
  <blockquote>
    <p style="font-size: 30pt;">
      ... und weiter geht es nächste Stunde ... 
    </p>
    <br>
  </blockquote>

  <aside class="notes">

    <p style="color: red">
      
      Bitte denkt an die Hausaufgaben

    </p>
  </aside>
</section>
`




var footer_content = `

  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

`
var header_element = document.getElementById('header');
var side_element = document.getElementById('side');
var first_element = document.getElementById('first');
var questions_element = document.getElementById('questions');
var summary_element = document.getElementById('summary');
var last_element = document.getElementById('last');
var footer_element = document.getElementById('footer');

header_element.innerHTML = header_content;
side_element.innerHTML = side;
first_element.innerHTML = first;
questions_element.innerHTML = questions;
summary_element.innerHTML = summary;
last_element.innerHTML = last;
footer_element.innerHTML = footer_content;















