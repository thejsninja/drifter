'use strict';

class VagrantBox {
    constructor(data) {
        this.name = data.name;
        this.platform = data.platform;
        this.version = data.version;
    }
}

module.exports = VagrantBox;
