'use strict';

const Vagrant = require('./libs/Vagrant');

class Drifter {
    constructor(path) {
        this._path = require('path').resolve(path);
        this._vagrant = new Vagrant(this._path);
    }
}

module.exports = Drifter;
