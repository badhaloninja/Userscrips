// ==UserScript==
// @name         ImgurGo
// @namespace    badhaloninja_ImgurGo
// @website      https://github.com/badhaloninja/Userscrips
// @icon         https://raw.githubusercontent.com/badhaloninja/Userscrips/master/Icons/icon.png
// @icon64       https://raw.githubusercontent.com/badhaloninja/Userscrips/master/Icons/icon64.png
// @version      0.3
// @updateURL    https://github.com/badhaloninja/Userscrips/raw/master/ImgurGo.user.js
// @description  Bypasses imgur weblock by using duckduckgo
// @author       badhaloninja
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
$("img").each(function(ignore, e) {
    var $e = $(e);
    if ($e.attr("src").startsWith("http://i.imgur.com/")) {
        $e.attr("src", "https://images.duckduckgo.com/iu/?u=" + $e.attr("src").replace("http", "https"));
    }
    if ($e.attr("src").startsWith("https://i.imgur.com/")) {
        $e.attr("src", "https://images.duckduckgo.com/iu/?u=" + $e.attr("src"));
    }
});
})();
