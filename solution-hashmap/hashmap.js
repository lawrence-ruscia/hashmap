export class HashMap {
  #capacity;
  #loadFactor;
  #buckets;

  constructor() {
    this.#capacity = 16;
    this.#loadFactor = 0.75;
    this.#buckets = new Array(16);
  }

  hash(key) {
    let hashcode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashcode =
        (primeNumber * hashcode + key.charCodeAt(i)) % this.#buckets.length;
    }

    return hashcode;
  }
}
