# Easyminal

#### Terminal for the average users

### --- ⚠️ Work in progress ---

## Technologies used

* [Tauri](https://tauri.app/)
* [Vue.js](https://vuejs.org/)
* [xterm.js](https://xtermjs.org/)
* [portable-pty](https://crates.io/crates/portable-pty)

## Build instructions

### Requirements

* NodeJS
* `yarn`
* Rust (`cargo` + `rustc`)

### Build

```bash
# Install required modules
pnpm install
```

```bash
# Run tauri startup script
pnpm tauri dev
```

<hr>

This project was built on top of code taken from [tauri-terminal](https://github.com/marc2332/tauri-terminal).
