// ==UserScript==
// @namespace   badhaloninja_GTIP
// @icon        https://raw.githubusercontent.com/badhaloninja/Userscrips/master/Icons/icon.png
// @icon64      https://raw.githubusercontent.com/badhaloninja/Userscrips/master/Icons/icon64.png
// @author      badhaloninja
// @updateURL   https://github.com/badhaloninja/Userscrips/raw/master/gtip.user.js
// @version     0.3
// @match       http://*/*
// @grant       none
// @name        GbaTemp to IP
// @description Bypasses Gbatemp weblock by using ip address.
// ==/UserScript==

var links,thisLink;
links = document.evaluate("//a[@href]",
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null);

for (var i=0;i<links.snapshotLength;i++) {
    var thisLink = links.snapshotItem(i);

    thisLink.href = thisLink.href.replace('https://gbatemp.net',
                                          'http://62.210.180.159');
}
