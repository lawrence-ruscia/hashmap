export class HashMap {
  #capacity;
  #loadFactor;
  #buckets;
  #size;

  constructor() {
    this.#capacity = 16;
    this.#loadFactor = 0.75;
    // Create 16 independent empty buckets
    this.#buckets = Array.from({ length: 16 }, () => []);
    this.#size = 0;
  }

  hash(key) {
    key = String(key);

    let hashcode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashcode =
        (primeNumber * hashcode + key.charCodeAt(i)) % this.#buckets.length;
    }

    return hashcode;
  }

  set(key, value) {
    const hashcode = this.hash(key);

    const index = this.hash(key);

    if (index < 0 || index >= this.#buckets.length) {
      throw new Error('Trying to access index out of bounds');
    }

    // Access bucket list through index
    const bucket = this.#buckets[index];

    // Update value if key already exists
    for (const pair of bucket) {
      if (pair.key === key) {
        pair.value = value;
        return;
      }
    }

    bucket.push({ key, value });
    this.#size++;
    console.log('Inserted pair: ', { key, value });

    const threshold = Math.ceil(this.#capacity * this.#loadFactor);
    if (this.#size >= threshold) {
      // TODO: Resize array
      console.log('Map is full!');
    }
  }
}
