export default class line {
    get from() {
        return this.__from__;
    }

    get to() {
        return this.__to__;
    }

    constructor(from, to) {
        this.__from__ = from;
        this.__to__ = to;
    }
}