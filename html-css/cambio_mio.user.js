// ==UserScript==
// @name           Write text on Google's logo
// @version        1.0
// @description    Poner cara libro en facebook
// @include        *://www.urjc.es/*
// @copyright      2014, Jesus M. Gonzalez-Barahona, GPLv3
// ==/UserScript==

function changer(id, newValue) {
    var element = document.getElementById(id);
    element.innerHTML = newValue;
}
console.log ("Pepe");
changer('imagenLogo', '<a target="_parent" href="http://www.facebook.es">Visitame</a>');
