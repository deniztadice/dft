import { log } from "./utils.js";
export const welcomeDialog = () => {
    const ls = localStorage
    const option = JSON.parse(ls.getItem('dftWelcome'))?.option ? true : false
    let d = new Dialog({
        title: game.i18n.localize("DFT.MAIN.NAME"),
        content: `
        <div class="dft-welcome-dialog">
        <h2>${game.i18n.localize("DFT.MAIN.WELCOME.HEADER")}</h2>
        <p>${game.i18n.localize("DFT.MAIN.WELCOME.READFIRST")} <a class="content-link" draggable="true" data-uuid="Compendium.dft.dft-information.JournalEntry.eRW62Vqw12GWlDeT" data-id="eRW62Vqw12GWlDeT" data-type="JournalEntryPage" data-pack="dft.dft-information" data-tooltip="Text Page"><i class="fas fa-file-lines"></i>${game.i18n.localize("DFT.MAIN.WELCOME.INFORMATION")}</a></p>
        <p>${game.i18n.localize("DFT.MAIN.WELCOME.MORE")}</p>
        <ul class="fa-ul">
        <li class="fa-li"><span class="fa-li"><i class="fa-brands fa-github"></i></span><a href="https://deniztadice.github.io/blog/modules/dft" target="_blank">${game.i18n.localize("DFT.SOCIAL.GITHUB")}</a> 🇺🇦🇺🇸 </li>
        <li class="fa-li"><span class="fa-li"><i class="fa-brands fa-discord"></i></span><a href="https://discord.gg/VDNvWvJMYd" target="_blank">${game.i18n.localize("DFT.SOCIAL.DISCORD")}</a> 🇺🇦</li>
        <li class="fa-li"><span class="fa-li"><i class="fa-brands fa-telegram"></i></span><a href="https://t.me/deniz_ta_dice" target="_blank">${game.i18n.localize("DFT.SOCIAL.TELEGRAM")}</a> 🇺🇦</li>
        <li class="fa-li"><span class="fa-li"><i class="fa-solid fa-globe"></i></span><a href="https://deniztadice.xyz/" target="_blank">${game.i18n.localize("DFT.SOCIAL.WEBSITE")}</a> 🇺🇦</li>
        </ul>
        <p class="support"><a href="https://buymeacoffee.com/denizkose" target="_blank">${game.i18n.localize("DFT.SOCIAL.SUPPORT_FULL")} <i class="fa-solid fa-heart fa-beat"></i></a>
        </div>
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
    return option ? log('Skip welcome') : d.render(true)
}



