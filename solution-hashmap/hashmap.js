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

  get length() {
    return this.#size;
  }

  set(key, value) {
    const index = this.#hash(key);

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
    console.log('Current size: ', this.#size);

    const threshold = Math.ceil(this.#capacity * this.#loadFactor);

    if (this.#size >= threshold) {
      this.#resize();
    }
  }

  get(key) {
    const index = this.hash(key);

    const bucket = this.#buckets[index];

    for (const pair of bucket) {
      if (pair.key === key) {
        return pair.value;
      }
    }

    return null;
  }

  has(key) {
    const index = this.#hash(key);

    const bucket = this.#buckets[index];

    for (const pair of bucket) {
      if (pair.key === key) {
        return true;
      }
    }

    return false;
  }

  remove(key) {
    const index = this.#hash(key);

    const bucket = this.#buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      const pair = bucket[i];
      if (pair.key === key) {
        bucket.splice(i, 1);
        this.#size -= 1;
        return true;
      }
    }

    return false;
  }

  clear() {
    this.#buckets = Array.from({ length: this.#capacity }, () => []);
    this.#size = 0;
  }

  keys() {
    const keysArr = [];
    for (const bucket of this.#buckets) {
      for (const pair of bucket) {
        keysArr.push(pair.key);
      }
    }

    return keysArr;
  }

  entries() {
    const valuesArr = [];
    for (const bucket of this.#buckets) {
      for (const pair of bucket) {
        valuesArr.push(pair.value);
      }
    }

    return valuesArr;
  }

  entries() {
    const entries = [];
    for (const bucket of this.#buckets) {
      for (const pair of bucket) {
        entries.push(pair);
      }
    }

    return entries;
  }

  #hash(key, bucketLength = this.#buckets.length) {
    key = String(key);

    let hashcode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashcode = (primeNumber * hashcode + key.charCodeAt(i)) % bucketLength;
    }

    return hashcode;
  }

  #resize() {
    // Double capacity
    this.#capacity *= 2;

    // Allocate bigger bucket array
    const newBuckets = Array.from({ length: this.#capacity }, () => []);

    // Rehash every key using new buckets
    this.#rehash(newBuckets);

    // Replace old bucket with the new one
    this.#buckets = newBuckets;

    console.log('Map Resized: ', this.#buckets.length);
  }

  #rehash(newBuckets) {
    for (const oldBucket of this.#buckets) {
      if (oldBucket.length > 0) {
        // Insert each key-value pair into its new bucket
        for (const pair of oldBucket) {
          const index = this.#hash(pair.key, newBuckets.length);

          const bucket = newBuckets[index];

          bucket.push({ key: pair.key, value: pair.value });
        }
      }
    }
  }
}
