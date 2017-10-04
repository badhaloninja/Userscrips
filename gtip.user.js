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

(function() {
    'use strict';
    var $a = $(a);
        if ($a.attr("href").startsWith("https://gbatemp.net")) {
        $a.attr("src", $a.attr("src").replace("https://gbatemp.net", "http://62.210.180.159"));
        }
      $("a[href='http://gbatemp.net']").attr('href','http://62.210.180.159');
      $("a[href='https://gbatemp.net/*']").replace('https://gbatemp.net','http://62.210.180.159');
})();
