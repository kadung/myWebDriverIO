module.exports = class BottomNavBar {
    static async goToTab(name) {
        await $(`//android.widget.FrameLayout[@content-desc='${name}']`).click();
    }
}