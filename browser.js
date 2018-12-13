const Browser = {
    ua: navigator.userAgent.toLocaleLowerCase(),
    platform: /mobile/.test(this.ua) ? 'mobile' : 'pc',
    // 搜狗 se 2.x metasr 1.0
    matchs: ['msie', 'electron', 'thunder', 'micromessenger', '360', 'mqqbrowser', 'qqbrowser',  'ubrowser', 'metasr', 'edge', 'firefox', 'maxthon', '2345explorer', 'lbbrowser', 'android.thunder', 'ios.thunder', 'chrome'],
    mimeTypes: (option, value) => {
        const mimeTypes = navigator.mimeTypes;
        for (let mt in mimeTypes) {
            if (mimeTypes[mt][option] == value) {
                return true;
            }
        }
        return false;
    },
    type: function() {
        for (let len = this.matchs.length - 1, i = 0; i <= len; i++) {
            const u = this.matchs[i]
            if (u === '360') {
                if(this.mimeTypes('type', 'application/vnd.chromium.remoting-viewer')) return u
                else continue
            }
            if (this.ua.indexOf(u) > -1) return u
            else continue
        }
        return 'unknown'
    },
    version: function() {
        const type = this.type()
        if (type === 'unknown') return type
        const reg = new RegExp(type + '[ /]\\d.+[ ]')
        return this.ua.match(reg)[0]
    }
}