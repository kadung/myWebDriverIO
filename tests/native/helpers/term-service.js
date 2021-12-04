module.exports = class TermService {
    static async accept () {
        try {
            const checkbox = await $("//*[contains(@resource-id,'checkbox')]");
            const button = await $("//*[contains(@resource-id,'terms_and_conditions_accept_button_enabled')]");
            await checkbox.waitForDisplayed({ timeout: 3000 })
            await checkbox.click();
            await button.click();
        }
        catch { };
    }
}

