module.exports = class NonAuthorizedPath extends Error{
    getMessage;
    critical;
    constructor() {
        super('This path is not allowed du to security.')
        this.getMessage= ()=>{return 'This path is not allowed du to security.'}
        this.critical = true;
    }
}