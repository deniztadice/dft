const log = (log) => {
    console.log(modName + log, consoleStyle)
}

const modName = '%c[DFT] | '
const consoleStyle = 'color: green; font-weight:bold'
const ls = localStorage
const option = JSON.parse(ls.getItem('dftWelcome'))?.option ? true : false

Hooks.once("init", async () => {
    log("Loading")
})

Hooks.once("i18nInit", function () {
})

Hooks.once("ready", function () {

    const sidebarInfo = document.getElementById('game-details')
    const moduleDetail = `
    <hr>
    <li class="system flexrow">
        <span class="system-title">${game.i18n.localize("DFT.MAIN.NAME")}</span>
        <span class="system-info">
            5.13.6
        </span>
    </li>
    <li class="flexrow system-links">
    <a href="#" target="_blank">GitHub</a>
    <a href="https://discord.gg/VDNvWvJMYd" target="_blank">Discord</a>
    <a href="https://t.me/deniz_ta_dice" target="_blank">Telegram</a>
    <a href="https://deniztadice.xyz/" target="_blank">WebSite</a>
    </li>
    `
    sidebarInfo.innerHTML += moduleDetail

    let d = new Dialog({
        title: game.i18n.localize("DFT.MAIN.NAME"),
        content: `
        <h2>${game.i18n.localize("DFT.MAIN.WELCOME.HEADER")}</h2>
        <p>${game.i18n.localize("DFT.MAIN.WELCOME.CONTENT")}</p>
        <ul>
        <li><a href="https://github.com/deniztadice" target="_blank">GitHub</a></li>
        <li><a href="https://discord.gg/VDNvWvJMYd" target="_blank">Discord</a></li>
        <li><a href="https://t.me/deniz_ta_dice" target="_blank">Telegram</a></li>
        <li><a href="https://deniztadice.xyz/" target="_blank">WebSite</a></li>
        </ul>
        `,
        buttons: {
            one: {
                icon: '<i class="fas fa-check"></i>',
                label: game.i18n.localize("DFT.MAIN.WELCOME.BUTTON"),
            },
            two: {
                icon: '<i class="fas fa-xmark"></i>',
                label: game.i18n.localize("DFT.MAIN.WELCOME.DONTSHOWME"),
                callback: () => ls.setItem('dftWelcome', JSON.stringify({ "option": true }))
            }
        },
        default: "two",
    });

    log("Loaded")
    option ? log('Skip welcome') : d.render(true)
});