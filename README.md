# persevere.js
Minimal interface for localStorage with userData polyfill

## API

### persevere.supported

Boolean flag, indicating whether localStorage or userData storage is available

### persevere.load(key [,onfail])

Get value of `key`. Provide optional `onfail` callback.

### persevere.save(key, value, [,onfail])

Set value of `key`. Provide optional `onfail` callback.


### persevere.empty([onfail])

Empty storage. Provide optional `onfail` callback.
