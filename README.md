# persevere.js
Minimal JavaScript interface for localStorage. With userData polyfill for old IE.

## API

#### persevere.supported

Boolean flag, indicating whether localStorage or userData storage is available

#### persevere.load(key [,onfail])

Get value of `key`. Provide optional `onfail` callback.

#### persevere.save(key, value, [,onfail])

Set value of `key`. Provide optional `onfail` callback.


#### persevere.clear([onfail])

Empty storage. Provide optional `onfail` callback.
