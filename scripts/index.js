import { MODULE_ID, log, addSidebarInfo, addSettingsSection } from "./utils.js";
import { welcomeDialog } from "./welcome.js";
import { registerBabele } from "./babele-register.js";

Hooks.once("init", async () => {
    log("Loading module")
    // registerBabele(MODULE_ID)
})

Hooks.once("ready", function () {
    addSidebarInfo()
    addSettingsSection()
    welcomeDialog()
    log("Loaded")
});