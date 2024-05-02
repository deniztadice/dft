import { MODULE_ID, log } from "./utils.js";

function autoRegisterBabel() {
    if (typeof Babele !== 'undefined') {
        log("Start Babele")
        Babele.get().register({
            module: MODULE_ID,
            lang: 'en',
            dir: 'lang/compendium/en',
        });
    }
}

export const registerBabele = () => {
    game.settings.register(MODULE_ID, 'autoRegisterBabel', {
        name: game.i18n.localize("DFT.SETTINGS.BABELE_TITLE"),
        hint: game.i18n.localize("DFT.SETTINGS.BABELE_DESC"),
        scope: 'world',
        config: true,
        default: true,
        type: Boolean,
        onChange: value => {
            if (value) {
                autoRegisterBabel();
            }

            window.location.reload();
        },
    });

    if (game.settings.get(MODULE_ID, 'autoRegisterBabel')) {
        autoRegisterBabel();
    }
}




