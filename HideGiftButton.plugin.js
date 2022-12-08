/**
 * @name HideGiftIcon
 * @author Cats
 * @version 0.0.1
 * @description Hides that annoying Gift Icon
 * 
 * @source https://github.com/Cats1337/BetterDiscord/blob/master/HideGiftButton.plugin.js
 * @updateUrl https://raw.githubusercontent.com/Cats1337/BetterDiscord/master/HideGiftButton.plugin.js
 */

 const config = {
    info: {
        name: "HideGiftIcon",
        authors: [
            {
                name: "Cats",
                github_username: "Cats1337",
            }
        ],
        version: "0.0.1",
        description: "Hides that annoying Gift Icon",
        github: "https://github.com/Cats1337/BetterDiscord/blob/master/HideGiftButton.plugin.js",
        github_raw: "https://raw.githubusercontent.com/Cats1337/BetterDiscord/master/HideGiftButton.plugin.js"
    },
    changelog: [
        {
            title: "Creation",
            type: "cration",
            items: [
                "Let there be plugin.\n Gift may still appear momentarily, but will disappear instantly, probably."
            ]
        }
    ],
    main: "index.js"
};



module.exports = class MyPlugin {
    getName() { return config.info.name; }
    getAuthor() { return config.info.authors.map(a => a.name).join(", "); }
    getVersion() { return config.info.version; }
    getDescription() { return config.info.description; }

    // Hides the gift button
    start() {
        if(document.querySelector(".buttons-uaqb-5").children[0].className == "button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F"){
            document.querySelector(".buttons-uaqb-5").children[0].style.display = "none";
        }
    }

    // Lets the gift reappear when you stop the plugin, maybe I don't really care about this I hate that stupid gift button
    stop() { 
        if(document.querySelector(".buttons-uaqb-5").children[0].className == "button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F"){
            document.querySelector(".buttons-uaqb-5").children[0].style.display = "flex";
        }
    }
}

    // hide the gift icon on load if it's there
    if(document.querySelector(".buttons-uaqb-5").children[0].className == "button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F"){
        document.querySelector(".buttons-uaqb-5").children[0].style.display = "none";
    }

    // make sure the gift icon doesn't reappear when you switch channels
    document.addEventListener("click", () => {
        if(document.querySelector(".buttons-uaqb-5").children[0].className == "button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F"){
            document.querySelector(".buttons-uaqb-5").children[0].style.display = "none";
        }
    });

// Literally all useless can just be done in Custom CSS using
// .buttons-uaqb-5 > button:nth-child(1) {
//     display: none;
// }
