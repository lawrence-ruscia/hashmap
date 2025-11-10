# HashMap & HashSet

This project contains simple implementations of two fundamental hash-based data structures: HashMap and HashSet.
Both use hashing to achieve fast insert, lookup, and delete operations.

## 📌 What Is a HashMap?

A **HashMap** stores data as **key–value** pairs.
Instead of searching through a list, it uses a hash function to convert a key into an index in an internal array (called a bucket array). This allows values to be stored and retrieved in average O(1) time.

### How it works:

1. A key is passed through a **hash function**.

2. The hash result is mapped to an index using hash % capacity.

3. The value is stored in that bucket.

4. To retrieve it, the key is hashed again and the correct bucket is accessed instantly.

### Collisions

When two keys map to the same bucket, the structure stores multiple entries in that bucket (separate chaining).

### Resizing

When the number of stored items exceeds a certain load factor, the structure:

- doubles the internal capacity,

- rehashes all stored keys,

- and redistributes them across the new buckets.

This keeps performance stable as the map grows.

## 📌 What Is a HashSet?

A **HashSet** is similar to a HashMap but stores **only unique values**—no key/value pairs.
The value itself acts as the key, which means:

- duplicates are automatically rejected,

- lookups for existence are very fast,

- storage is efficient.

A HashSet uses the same ideas as a HashMap:

- hashing the value,

- storing it in a bucket,

- handling collisions,

- resizing when necessary.

## Features Implemented

- Custom hash function using a prime multiplier

- Separate chaining to handle collisionsg

- Automatic resizing using a load factor

- `HashMap` with:

  - `set(key, value)`

  - `get(key)`

  - `remove(key)`

  - `has()`

  - `clear()`

  - `entries()`

  - `length`

- `HashSet` with:

  - `add(value)`

  - `remove(value)`

  - `values()`

- Full rehashing logic for both structures
