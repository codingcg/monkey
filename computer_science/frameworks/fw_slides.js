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
  plugins: [ RevealMenu, RevealZoom, RevealNotes, RevealSearch, RevealMarkdown, RevealHighlight, RevealChalkboard, RevealCustomControls],

  dependencies: [
    
    // Works too
    //{ src: '../../node_modules/reveal.js-toolbar/toolbar.js' },

    { src: '../../Reveal/plugin/toolbar/toolbar.js' }

  ],

  menu: {
    // Specifies which side of the presentation the menu will
    // be shown. Use 'left' or 'right'.
    side: 'left',

    // Specifies the width of the menu.
    // Can be one of the following:
    // 'normal', 'wide', 'third', 'half', 'full', or
    // any valid css length value
    width: 'normal',

    // Add slide numbers to the titles in the slide list.
    // Use 'true' or format string (same as reveal.js slide numbers)
    numbers: true,

    // Specifies which slide elements will be used for generating
    // the slide titles in the menu. The default selects the first
    // heading element found in the slide, but you can specify any
    // valid css selector and the text from the first matching
    // element will be used.
    // Note: that a section data-menu-title attribute or an element
    // with a menu-title class will take precedence over this option
    titleSelector: 'h1, h2, h3, h4, h5, h6',

    // If slides do not have a matching title, attempt to use the
    // start of the text content as the title instead
    useTextContentForMissingTitles: true,

    // Hide slides from the menu that do not have a title.
    // Set to 'true' to only list slides with titles.
    hideMissingTitles: false,

    // Adds markers to the slide titles to indicate the
    // progress through the presentation. Set to 'false'
    // to hide the markers.
    markers: true,

    // Specify custom panels to be included in the menu, by
    // providing an array of objects with 'title', 'icon'
    // properties, and either a 'src' or 'content' property.
    custom: false,

    // Specifies the themes that will be available in the themes
    // menu panel. Set to 'true' to show the themes menu panel
    // with the default themes list. Alternatively, provide an
    // array to specify the themes to make available in the
    // themes menu panel, for example...
    //
    // [
    //     { name: 'Black', theme: 'dist/theme/black.css' },
    //     { name: 'White', theme: 'dist/theme/white.css' },
    //     { name: 'League', theme: 'dist/theme/league.css' },
    //     {
    //       name: 'Dark',
    //       theme: 'lib/reveal.js/dist/theme/black.css',
    //       highlightTheme: 'lib/reveal.js/plugin/highlight/monokai.css'
    //     },
    //     {
    //       name: 'Code: Zenburn',
    //       highlightTheme: 'lib/reveal.js/plugin/highlight/zenburn.css'
    //     }
    // ]
    //
    // Note: specifying highlightTheme without a theme will
    // change the code highlight theme while leaving the
    // presentation theme unchanged.
    themes: true,

    // Specifies the path to the default theme files. If your
    // presentation uses a different path to the standard reveal
    // layout then you need to provide this option, but only
    // when 'themes' is set to 'true'. If you provide your own
    // list of themes or 'themes' is set to 'false' the
    // 'themesPath' option is ignored.
    themesPath: 'dist/theme/',

    // Specifies if the transitions menu panel will be shown.
    // Set to 'true' to show the transitions menu panel with
    // the default transitions list. Alternatively, provide an
    // array to specify the transitions to make available in
    // the transitions panel, for example...
    // ['None', 'Fade', 'Slide']
    transitions: true,

    // Adds a menu button to the slides to open the menu panel.
    // Set to 'false' to hide the button.
    openButton: true,

    // If 'true' allows the slide number in the presentation to
    // open the menu panel. The reveal.js slideNumber option must
    // be displayed for this to take effect
    openSlideNumber: false,

    // If true allows the user to open and navigate the menu using
    // the keyboard. Standard keyboard interaction with reveal
    // will be disabled while the menu is open.
    keyboard: true,

    // Normally the menu will close on user actions such as
    // selecting a menu item, or clicking the presentation area.
    // If 'true', the sticky option will leave the menu open
    // until it is explicitly closed, that is, using the close
    // button or pressing the ESC or m key (when the keyboard
    // interaction option is enabled).
    sticky: false,

    // If 'true' standard menu items will be automatically opened
    // when navigating using the keyboard. Note: this only takes
    // effect when both the 'keyboard' and 'sticky' options are enabled.
    autoOpen: true,

    // If 'true' the menu will not be created until it is explicitly
    // requested by calling RevealMenu.init(). Note this will delay
    // the creation of all menu panels, including custom panels, and
    // the menu button.
    delayInit: false,

    // If 'true' the menu will be shown when the menu is initialised.
    openOnInit: false,

    // By default the menu will load it's own font-awesome library
    // icons. If your presentation needs to load a different
    // font-awesome library the 'loadIcons' option can be set to false
    // and the menu will not attempt to load the font-awesome library.
    loadIcons: true
  },

  customcontrols: {
    controls: [
      {
        id: 'toggle-overview',
        title: 'Toggle overview (O)',
        icon: '<i class="fa fa-th"></i>',
        action: 'Reveal.toggleOverview();'
      },
      { icon: '<i class="fa fa-pen-square"></i>',
        title: 'Toggle chalkboard (B)',
        action: 'RevealChalkboard.toggleChalkboard();'
      },
      { icon: '<i class="fa fa-pen"></i>',
        title: 'Toggle notes canvas (C)',
        action: 'RevealChalkboard.toggleNotesCanvas();'
      }
    ]
  },

  /*
  Mouse or touch
    Click on the pen symbols at the bottom left to toggle the notes canvas or chalkboard
    Click on the color picker at the left to change the color (the color picker is only visible if the notes canvas or chalkboard is active)
    Click on the up/down arrows on the left to the switch among multiple chalkboardd (the up/down arrows are only available for the chlakboard)
    Click the left mouse button and drag to write on notes canvas or chalkboard
    Click the right mouse button and drag to wipe away previous drawings
    Touch and move to write on notes canvas or chalkboard
    Touch and hold for half a second, then move to wipe away previous drawings
  Keyboard
    Press the 'BACKSPACE' key to delete all chalkboard drawings
    Press the 'DEL' key to clear the notes canvas or chalkboard
    Press the 'c' key to toggle the notes canvas
    Press the 'b' key to toggle the chalkboard
    Press the 'd' key to download drawings
    Press the 'x' key to cycle colors forward
    Press the 'y' key to cycle colors backward

  */
  chalkboard: {
        boardmarkerWidth: 3,
        chalkWidth: 7,
        chalkEffect: 1.0,
        storage: null,
        src: null,
        readOnly: undefined,
        transition: 800,
        theme: "chalkboard",
        background: [ 'rgba(127,127,127,.1)' , path + 'img/blackboard.png' ],
        grid: { color: 'rgb(50,50,10,0.5)', distance: 80, width: 2},
        eraser: { src: path + 'img/sponge.png', radius: 20},
        boardmarkers : [
                { color: 'rgba(100,100,100,1)', cursor: 'url(' + path + 'img/boardmarker-black.png), auto'},
                { color: 'rgba(30,144,255, 1)', cursor: 'url(' + path + 'img/boardmarker-blue.png), auto'},
                { color: 'rgba(220,20,60,1)', cursor: 'url(' + path + 'img/boardmarker-red.png), auto'},
                { color: 'rgba(50,205,50,1)', cursor: 'url(' + path + 'img/boardmarker-green.png), auto'},
                { color: 'rgba(255,140,0,1)', cursor: 'url(' + path + 'img/boardmarker-orange.png), auto'},
                { color: 'rgba(150,0,20150,1)', cursor: 'url(' + path + 'img/boardmarker-purple.png), auto'},
                { color: 'rgba(255,220,0,1)', cursor: 'url(' + path + 'img/boardmarker-yellow.png), auto'}
        ],
        chalks: [
                { color: 'rgba(255,255,255,0.5)', cursor: 'url(' + path + 'img/chalk-white.png), auto'},
                { color: 'rgba(96, 154, 244, 0.5)', cursor: 'url(' + path + 'img/chalk-blue.png), auto'},
                { color: 'rgba(237, 20, 28, 0.5)', cursor: 'url(' + path + 'img/chalk-red.png), auto'},
                { color: 'rgba(20, 237, 28, 0.5)', cursor: 'url(' + path + 'img/chalk-green.png), auto'},
                { color: 'rgba(220, 133, 41, 0.5)', cursor: 'url(' + path + 'img/chalk-orange.png), auto'},
                { color: 'rgba(220,0,220,0.5)', cursor: 'url(' + path + 'img/chalk-purple.png), auto'},
                { color: 'rgba(255,220,0,0.5)', cursor: 'url(' + path + 'img/chalk-yellow.png), auto'}
        ]
    },


    


  toolbar: {
    // Specifies where the toolbar will be shown: 'top' or 'bottom'
    position: 'top',

    // Add button to toggle fullscreen mode for the presentation
    fullscreen: true,

    // Add button to toggle the overview mode on and off
    overview: true,

    // Add button to pause (hide) the presentation display
    pause: true,

    // Add button to show the speaker notes
    notes: true,

    // Add button to show the help overlay
    help: false,

    // If true, the reveal.js-menu will be moved into the toolbar.
    // Set to false to leave the menu on its own.
    captureMenu: true,

    // If true, the playback control will be moved into the toolbar.
    // This is only relevant if the presentation is configured to autoSlide.
    // Set to false to leave the menu on its own.
    capturePlaybackControl: true,

    // By default the menu will load it's own font-awesome library
    // icons. If your presentation needs to load a different
    // font-awesome library the 'loadIcons' option can be set to false
    // and the menu will not attempt to load the font-awesome library.
    loadIcons: true,
  },



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

    <link rel="stylesheet" href="../../Reveal/dist/reveal.css">
    <link rel="stylesheet" href="../../Reveal/dist/theme/sky.css" id="theme">
    <link rel="stylesheet" href="../../Reveal/plugin/highlight/monokai.css">
    <link rel="stylesheet" href="../../Reveal/dist/reset.css">
    <link rel="stylesheet" href="../../Reveal/plugin/customcontrols/style.css">
    <link rel="stylesheet" href="../../Reveal/plugin/chalkboard/style.css">

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















