'use strict';


class VagrantMachine {
    constructor(data) {
        this.name = data.name;
        this.platform = data.platform;
        this.state = this._vagrantStateMapper(data.state);
    }
    _vagrantStateMapper(vagrantState) {
        let stateMap = {
            'running': 'on',
            'not created': 'off',
            'saved': 'off',
            'suspended': 'off',
            'not running': 'off',
            'poweroff': 'off'
        };

        return stateMap[vagrantState];
    }
}

module.exports = VagrantMachine;
