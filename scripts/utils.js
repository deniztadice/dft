export const MODULE_ID = 'dft';
export const MODULE_VERSION = '1.0.0';
export const log = (log) => {
    const modName = '%cDFT | '
    const consoleStyle = 'color: green; font-weight:bold'
    console.log(modName + log, consoleStyle)
}

export const addSidebarInfo = () => {
    const sidebarInfo = document.getElementById('game-details')
    const moduleDetail = `
    <hr>
    <li class="system flexrow">
        <span class="system-title">${game.i18n.localize("DFT.MAIN.NAME")}</span>
        <span class="system-info">
            ${MODULE_VERSION}
        </span>
    </li>
    <li class="flexrow system-links dft-sidebar">
    <a href="https://deniztadice.github.io/dft" target="_blank">${game.i18n.localize("DFT.SOCIAL.GITHUB")}</a>
        <a href="https://discord.gg/VDNvWvJMYd" target="_blank">${game.i18n.localize("DFT.SOCIAL.DISCORD")}</a>
        <a href="https://t.me/deniz_ta_dice" target="_blank">${game.i18n.localize("DFT.SOCIAL.TELEGRAM")}</a>
        <a href="https://deniztadice.xyz/" target="_blank">${game.i18n.localize("DFT.SOCIAL.WEBSITE")}</a>
    </li>
    <li class="flexrow system-links dft-sidebar">
        <a href="https://buymeacoffee.com/denizkose" target="_blank">${game.i18n.localize("DFT.SOCIAL.SUPPORT")} <i class="fa-solid fa-heart fa-beat"></i></a>
    </li>
    <div id='dft-sidebar'></div>
    `
    sidebarInfo.innerHTML += moduleDetail
}

export const addSettingsSection = () => {
    const settings = document.getElementById('settings')
    const child = settings.children[1]
    const header = document.createElement('h2')
    header.innerText = game.i18n.localize("DFT.MAIN.NAME_SHORT")
    const div = document.createElement('div')
    div.classList = ['dft-sidebar']
    const helpButton = document.createElement('button')
    helpButton.innerHTML = '<i class="fa-solid fa-circle-info"></i></i>' + game.i18n.localize("DFT.SIDEBAR.SETTINGS.BUTTON.README")
    helpButton.addEventListener('click', async () => {
        const pack = game.packs.get("dft.dft-information")
        const entry = await pack.getDocument(pack.index.get("eRW62Vqw12GWlDeT")._id)
        entry.sheet.render(true)
    })
    div.appendChild(helpButton)
    child.after(header)
    header.after(div)
}