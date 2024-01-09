module.exports = class FileNotExists extends Error {
    constructor(path) {
        super(`The file specified does not exist: ${path}`);
        this.message = 'The file specified does not exists.';
        this.path = path;
        this.critical = true;
    }
}