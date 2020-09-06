import {Block} from './Block.js'

export class BlockChain {
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
        newBlock.hash = Block.computeHash();
        this.chain.push(newBlock);
    }
}