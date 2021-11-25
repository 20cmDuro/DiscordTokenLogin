// ==UserScript==
// @name         Discord Token Login
// @namespace    https://github.com/20cmDuro
// @version      1.0.0
// @description  Discord Token Login.
// @author       Jhin Scripter
// @match        https://discord.com/login
// @icon         https://logosmarcas.net/wp-content/uploads/2021/08/Akatsuki-Logo.png
// @grant        none
// @license      MIT
// ==/UserScript==
 
(function() {
    'use strict';

    console.log("Using Jhin Scripter's tampermonkey script.");

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
            login(document.getElementsByClassName("inputDefault-_djjkz input-cIJ7To")[0].value)
        }
        var element;
        (element = document.getElementsByClassName("marginBottom8-AtZOdT button-3k0cO7 button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeLarge-1vSeWK fullWidth-1orjjo grow-q77ONN")[0]).addEventListener("click", buttonlogin), (element = document.getElementsByClassName("marginBottom20-32qID7")[0]).parentElement.removeChild(element), (element = document.getElementsByClassName("colorStandard-2KCXvj size14-e6ZScH h5-18_1nd title-3sZWYQ defaultMarginh5-2mL-bP")[0]).innerHTML = "Token", element.id = "Token", (element = document.getElementsByClassName("transitionGroup-aR7y1d qrLogin-1AOZMt")[0]).parentElement.removeChild(element), (element = document.getElementsByClassName("verticalSeparator-3huAjp")[0]).parentElement.removeChild(element);
    }, false);
})();
