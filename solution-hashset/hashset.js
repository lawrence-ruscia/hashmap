export class HashSet {
  #capacity;
  #loadFactor;
  #size;
  #buckets;

  constructor() {
    this.#capacity = 16;
    this.#loadFactor = 0.75;
    this.#size = 0;
    this.#buckets = Array.from({ length: 16 }, () => []);
  }

  add(value) {
    const index = this.#hash(value);

    const bucket = this.#buckets[index];

    console.log('bucket', bucket);

    if (bucket.includes(value)) {
      console.log('Duplicate value: ', value);
      return;
    }

    console.log('Inserted value: ', value);
    bucket.push(value);
    this.#size += 1;

    const threshold = Math.ceil(this.#capacity * this.#loadFactor);

    if (this.#size > threshold) {
      this.#resize();
    }
  }

  remove(value) {
    const index = this.#hash(value);

    const bucket = this.#buckets[index];

    if (bucket.includes(value)) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i] === value) bucket.splice(i, 1);
      }

      return true;
    }

    return false;
  }

  values() {
    return this.#buckets.flat();
  }

  #hash(value, bucketLength = this.#buckets.length) {
    value = String(value);
    let hashcode = 0;

    const primeNumber = 31;
    for (let i = 0; i < value.length; i++) {
      hashcode = (primeNumber * hashcode + value.charCodeAt(i)) % bucketLength;
    }

    return hashcode;
  }

  #resize() {
    this.#capacity *= 2;
    const newBuckets = Array.from({ length: this.#capacity }, () => []);

    this.#rehash(newBuckets);

    this.#buckets = newBuckets;

    console.log('Map Resized: ', this.#buckets.length);
  }

  #rehash(newBuckets) {
    for (const oldBucket of this.#buckets) {
      if (oldBucket.length > 0) {
        for (const value of oldBucket) {
          const index = this.#hash(value, newBuckets.length);

          const bucket = newBuckets[index];
          bucket.push(value);
        }
      }
    }
  }
}
