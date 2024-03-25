// Define a function that alerts the message
function showAlert() {
    (() => {
    const cheat = (async () => {
        let i = document.createElement('iframe');
        document.body.append(i);
        window.alert = i.contentWindow.alert.bind(window);
        i.remove();
        let { stateNode: { props, state } } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        let count = 0;
        props.liveGameController.getDatabaseVal("c", async (players) => {
            if (players) for (const player of Object.keys(players)) {
                props.liveGameController.setVal({
                    path: "c/".concat(props.client.name),
                    val: {
                        b: props.client.blook,
                        g: state.gold,
                        tat: `${player}:swap:0`
                    }
                });
                count++;
                await new Promise(r => setTimeout(r, 400));
            }
          
        })
        
    });
    let img = new Image;
    img.src = "https://raw.githubusercontent.com/Sh1N02/Blooket-Cheats/main/autoupdate/timestamps/gold/resetAllGold.png?" + Date.now();
    img.crossOrigin = "Anonymous";
    img.onload = function() {
        const c = document.createElement("canvas");
        const ctx = c.getContext("2d");
        ctx.drawImage(img, 0, 0, this.width, this.height);
        let { data } = ctx.getImageData(0, 0, this.width, this.height), decode = "", last;
        for (let i = 0; i < data.length; i += 4) {
            let char = String.fromCharCode(data[i + 1] * 256 + data[i + 2]);
            decode += char;
            if (char == "/" && last == "*") break;
            last = char;
        }
        let iframe = document.querySelector("iframe");
        const [_, time, error] = decode.match(/LastUpdated: (.+?); ErrorMessage: "([\s\S]+?)"/);
        if (parseInt(time) <= 1708817191568 || iframe.contentWindow.confirm(error)) cheat();
    }
    img.onerror = img.onabort = () => {
        img.onerror = img.onabort = null;
        cheat();
        let iframe = document.querySelector("iframe");
        iframe.contentWindow.alert("It seems the GitHub is either blocked or down.\n\nIf it's NOT blocked, join the Discord server for updates\nhttps://discord.gg/jHjGrrdXP6")
    }
})();
}

// Set up the interval to call the showAlert function every 500 milliseconds
setInterval(showAlert, 500);
