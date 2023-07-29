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
  plugins: [ RevealZoom, RevealNotes, RevealSearch, RevealMarkdown, RevealHighlight, RevealChalkboard],

  dependencies: [
    
    //{ src: '../../node_modules/reveal.js-toolbar/toolbar.js' }
  ]
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


var footer_content = `

  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

`
var header_element = document.getElementById('header');
var footer_element = document.getElementById('footer');

header_element.innerHTML = header_content;
footer_element.innerHTML = footer_content;















