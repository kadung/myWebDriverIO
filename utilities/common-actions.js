//************************************************************************************
//   Common and reusable actions 
//************************************************************************************
module.exports = {

    getUrlAndTitle: function (customVar) {
        return {
            url: this.getUrl(),
            title: this.getTitle(),
            customVar: customVar
        };
    },

    /**
     * Return true/false for element existence
     */
    isElementExisted: function (element, timeout) {
        try {
            element.waitForDisplayed(timeout);
            return true;
        }
        catch (err) { return false; }
    },
}

