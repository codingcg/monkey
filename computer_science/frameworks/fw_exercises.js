document.addEventListener('keydown', function(event) {
  // on I go back to higher layer
    if(event.keyCode == 73) { 
        window.location.href = "../../computer_science.html";
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

    <link rel="stylesheet" href="../../exercises.css" type="text/css" media="screen" />

  </head>
      
`;

var footer_content = `

  

`
var header_element = document.getElementById('header');
var footer_element = document.getElementById('footer');

header_element.innerHTML = header_content;
footer_element.innerHTML = footer_content;















