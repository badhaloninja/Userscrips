// ==UserScript==
// @name         GbaTemp to IP
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
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
