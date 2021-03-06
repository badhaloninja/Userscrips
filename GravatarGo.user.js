// ==UserScript==
// @name         GravatarGo
// @namespace    badhaloninja_GravatarGo
// @website      https://github.com/badhaloninja/Userscrips
// @icon         https://raw.githubusercontent.com/badhaloninja/Userscrips/master/Icons/icon.png
// @icon64       https://raw.githubusercontent.com/badhaloninja/Userscrips/master/Icons/icon64.png
// @version      0.7
// @updateURL    https://github.com/badhaloninja/Userscrips/raw/master/GravatarGo.user.js
// @description  Bypasses gravatar weblock by using duckduckgo
// @author       badhaloninja
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
$("img").each(function(ignore, e) {
    var $e = $(e);
    if ($e.attr("src").startsWith("http://www.gravatar.com/")) {
        $e.attr("src", "https://images.duckduckgo.com/iu/?u=" + $e.attr("src").replace(/(\?.*)|(#.*)/g, "") + ".png");
    }
    if ($e.attr("src").startsWith("https://www.gravatar.com/")) {
        $e.attr("src", "https://images.duckduckgo.com/iu/?u=" + $e.attr("src").replace(/(\?.*)|(#.*)/g, "") + ".png");
    }
});
})();
