// ==UserScript==
// @name         Discord Token Login
// @namespace    https://github.com/20cmDuro
// @version      1.0.2
// @description  Discord Token Login.
// @author       Jhin Scripter
// @match        https://discord.com/login
// @icon         https://logosmarcas.net/wp-content/uploads/2021/08/Akatsuki-Logo.png
// @grant        none
// @license      MIT
// @updateURL    https://raw.githubusercontent.com/20cmDuro/DiscordTokenLogin/main/index.js
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('load', function() {
        function login(e) {
            setInterval(() => {
                window.webpackChunkdiscord_app.push([
                    [Math.random()], {}, (req) => {
                        for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {
                            if (m.default && m.default.setToken !== undefined) {
                                return m.default.setToken(e)
                            }
                            if (m.setToken !== undefined) {
                                return m.setToken(e)
                            }
                        }
                    }
                ]);
                console.log("%cWorked!", "font-size: 50px");
            }, 50), setTimeout(() => {
                window.location.reload()
            }, 2500)
        }

        function buttonlogin() {
            login(document.getElementsByClassName("inputDefault-3FGxgL input-2g-os5")[0].value)
        }
        var element;
        (element = document.getElementsByClassName("marginBottom8-emkd0_ button-1cRKG6 button-f2h6uQ lookFilled-yCfaCM colorBrand-I6CyqQ sizeLarge-3mScP9 fullWidth-fJIsjq grow-2sR_-F")[0]).addEventListener("click", buttonlogin), (element = document.getElementsByClassName("marginBottom20-315RVT")[0]).parentElement.removeChild(element), (element = document.getElementsByClassName("colorStandard-21JIj7 size14-3fJ-ot h5-2RwDNl title-3hptVQ defaultMarginh5-3Jxf6f")[0]).innerHTML = "Token", element.id = "Token", (element = document.getElementsByClassName("transitionGroup-bPT0qU qrLogin-1ejtpI")[0]).parentElement.removeChild(element), (element = document.getElementsByClassName("verticalSeparator-2r9gHa")[0]).parentElement.removeChild(element);
    }, false);
})();
