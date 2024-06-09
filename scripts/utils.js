export const MODULE_ID = 'dft';
export const MODULE_VERSION = '1.0.2';
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
    <a href="https://deniztadice.github.io/blog/modules/dft" target="_blank">${game.i18n.localize("DFT.SOCIAL.GITHUB")}</a>
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
    const journalComponent = document.createElement('button')
    journalComponent.innerHTML = '<i class="fa-solid fa-circle-info"></i></i>' + game.i18n.localize("DFT.SIDEBAR.SETTINGS.BUTTON.JOURNAL_COMPONENT")
    journalComponent.addEventListener('click', async () => {
        const lang = game.i18n.lang
        const pack = game.packs.get("dft.dft-journal")
        const entry = await pack.getDocument(pack.index.get(lang==='uk'? "6X18bTQODOupr2Jp": "5DR7lZZUgrQVTCf2")._id)
        entry.sheet.render(true)
    })
    div.appendChild(journalComponent)
    child.after(header)
    header.after(div)
}