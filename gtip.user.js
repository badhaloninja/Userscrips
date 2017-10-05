// ==UserScript==
// @name         GbaTemp to IP
// @namespace    badhaloninja_gtip
// @website      https://github.com/badhaloninja/Userscrips
// @icon         https://raw.githubusercontent.com/badhaloninja/Userscrips/master/Icons/icon.png
// @icon64       https://raw.githubusercontent.com/badhaloninja/Userscrips/master/Icons/icon64.png
// @version      0.3
// @updateURL    https://github.com/badhaloninja/Userscrips/raw/master/gtip.user.js
// @description  Bypasses gbatemp weblock by using ip adress
// @author       badhaloninja
// @match        http://*/*
// @grant        none
// ==/UserScript==

document.body.addEventListener('mousedown', function(e){
    var targ = e.target || e.srcElement;
    if ( targ && targ.href && targ.href.match(/https?:\/\/gbatemp.net/) ) {
        targ.href = targ.href.replace(/https?:\/\/gbatemp\.net/, 'http://62.210.180.159');
    }
    if ( targ && targ.href && targ.href.match(/http?:\/\/gbatemp.net/) ) {
        targ.href = targ.href.replace(/http?:\/\/gbatemp\.net/, 'http://62.210.180.159');
    }
});
