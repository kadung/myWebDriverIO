module.exports = {
    getUrlAndTitle: function (customVar) {
        return {
            url: this.getUrl(),
            title: this.getTitle(),
            customVar: customVar
        };
    },

    otherCommand: function () {
        // do something else
    },
}

