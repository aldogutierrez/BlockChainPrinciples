const SHA256 = require("crypto-js/sha256");

class Block {
    constructor (data, previousHash) {
        this.timestamp = new Date().toUTCString();
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.computeHash();
    }

    computeHash() {
        return SHA256(this.index + this.timestamp + JSON.stringify(this.data) + this.previousHash).toString();
    }
}

class BlockChain {
    constructor() {
        this.chain = [this.genesisBlock()];
    }

    genesisBlock() {
        return new Block({ message: 'Hello'}, null);
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.computeHash();
        this.chain.push(newBlock);
    }
}

var example = new BlockChain();

example.addBlock(new Block({message: 'there'}));
example.addBlock(new Block({message: 'we\'re part'}));
example.addBlock(new Block({message: 'of a block chain'}));

console.log(JSON.stringify(example, null, 4));