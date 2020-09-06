import SHA256 from "crypto-js/sha256";

export class Block {
    constructor (data, previousHash) {
        this.timestamp = new Date().toUTCString();
        this.data = data;
        this.previousHash = previousHash;
        this.hash = SHA256(this.index + this.timestamp + JSON.stringify(this.data) + this.previousHash).toString();
    }
}