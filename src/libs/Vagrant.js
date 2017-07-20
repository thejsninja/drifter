'use strict';

const VagrantBox = require('./VagrantBox');
const VagrantMachine = require('./VagrantMachine');

const _ = require('lodash');
const child_process = require('child_process');

class Vagrant {
    constructor(path) {
        this._path = path;
        this._boxes = [];
        this._machines = [];
    }
    status(callback) {
        this._reloadMachines(callback);
    }
    boxes(callback) {
        this._reloadBoxes(callback);
    }
    _reloadBoxes(callback) {
        let command = `vagrant box list`;
        let output = child_process.exec(
            command,
            {
                cwd: this._path,
            },
            (error, stdout, stderr) => {
                this._boxes = [];

                _.each(stdout.toString().split("\n"), (box) => {
                    let data = box.match(/^([^\s]+)[\s]+\(([^\,]+),\s([^\)]+)/);

                    if (data) {
                        this._boxes.push(new VagrantBox({
                            name: data[1],
                            platform: data[2],
                            version: data[3]
                        }))
                    }
                });

                callback(null, this._boxes);
            }
        );
    }
    _reloadMachines(callback) {
        let command = `vagrant status`;

        child_process.exec(
            command,
            {
                cwd: this._path,
            },
            (error, stdout, stderr) => {
                this._machines = [];
                let regex = /^([^\s]+)\s+(not created|running|saved|suspended|not running|poweroff)\s\(([A-Za-z0-9]+)\)$/;

                _.each(stdout.toString().split("\n"), (line) => {
                    let data = line.match(regex);

                    if (data) {
                        this._machines.push(new VagrantMachine({
                            name: data[1],
                            state: data[2],
                            platform: data[3]
                        }))
                    }
                });

                callback(null, this._machines);
            }
        );

    }
}

module.exports = Vagrant;
