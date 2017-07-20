describe('Instantiation', function() {
    describe('Drifter Class', function () {
        it('should instantiate the Drifer class', function() {
            const Drifter = require(`${__dirname}/../src/Drifter`);
            let drifter = new Drifter('./example');
        });
    });
    describe('Vagrant Classes', function () {
        it('should instantiate the Vagrant class', function() {
            const Vagrant = require(`${__dirname}/../src/libs/Vagrant`);
            let vagrant = new Vagrant('./example');
        });
        it('should instantiate the VagrantBox class', function() {
            const VagrantBox = require(`${__dirname}/../src/libs/VagrantBox`);
            let vagrantBox = new VagrantBox({
                name: 'test',
                platform: 'virtualbox',
                version: '2017.07.01',
            });
        });
        it('should instantiate the VagrantMachine class', function() {
            const VagrantMachine = require(`${__dirname}/../src/libs/VagrantMachine`);
            let vagrantMachine = new VagrantMachine({
                name: 'test',
                platform: 'virtualbox',
                state: 'poweroff',
            });
        });
    });
    describe('Selenium Classes', function () {
        it('should instantiate the SeleniumHub class', function() {
            const SeleniumHub = require(`${__dirname}/../src/libs/SeleniumHub`);
            let seleniumHub = new SeleniumHub();
        });
        it('should instantiate the SeleniumNode class', function() {
            const SeleniumNode = require(`${__dirname}/../src/libs/SeleniumNode`);
            let seleniumNode = new SeleniumNode();
        });
    });
});
