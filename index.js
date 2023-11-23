// ==UserScript==
// @name         Discord Token Login
// @namespace    https://github.com/20cmDuro
// @version      1.0.3
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
            login(document.getElementsByClassName("inputDefault__80165 input_d266e7")[0].value)
        }
        var element;
        (element = document.getElementsByClassName("marginBottom8_f4aae3 button__47891 button_afdfd9 lookFilled__19298 colorBrand_b2253e sizeLarge__9049d fullWidth__7c3e8 grow__4c8a4")[0]).addEventListener("click", buttonlogin), (element = document.getElementsByClassName("marginBottom20__64605")[0]).parentElement.removeChild(element), (element = document.getElementsByClassName("label__5447e eyebrow_b7df6b defaultColor_d757c2 defaultMarginlabel__42000")[0]).innerHTML = "Token", element.id = "Token", (element = document.getElementsByClassName("transitionGroup__9763d qrLogin_ce8b2d")[0]).parentElement.removeChild(element), (element = document.getElementsByClassName("verticalSeparator_af74b3")[0]).parentElement.removeChild(element);
    }, false);
})();
