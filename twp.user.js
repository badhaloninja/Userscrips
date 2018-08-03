// ==UserScript==
// @name         TWP link fixer
// @namespace    badhaloninja_twp
// @website      https://github.com/badhaloninja/Userscrips
// @icon         https://raw.githubusercontent.com/badhaloninja/Userscrips/master/Icons/icon.png
// @icon64       https://raw.githubusercontent.com/badhaloninja/Userscrips/master/Icons/icon64.png
// @version      0.4
// @updateURL    https://github.com/badhaloninja/Userscrips/raw/master/twp.user.js
// @description  Fixes links to forums.thinking.withportals.com
// @author       badhaloninja
// @match        http://*/*
// @match        https://*/*
// @grant        none
// ==/UserScript==

var links,thisLink;
links = document.evaluate("//a[@href]",
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null);

for (var i=0;i<links.snapshotLength;i++) {
    var thisLink = links.snapshotItem(i);

    thisLink.href = thisLink.href.replace('forums.thinkingwithportals.com',
                                          'forums.thinking.withportals.com');
}
