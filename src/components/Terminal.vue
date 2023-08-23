<script setup lang="ts">
// Scripts for the component
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";
import { invoke } from "@tauri-apps/api";
import { Event, listen } from "@tauri-apps/api/event";
import { onMounted } from "vue";
import { writeToPty } from "../composables/terminal"
import { write } from "fs";

const fitAddon = new FitAddon();
const term = new Terminal({
  fontFamily: "monospace",
  theme: {
    background: "rgba(0,0,0,0)",
  }
});
term.loadAddon(fitAddon);

// Make the terminal fit all the window size
function fitTerminal() {
  fitAddon.fit();
  void invoke<string>("async_resize_pty", {
    rows: term.rows,
    cols: term.cols,
  });
}

// Write data from pty into the terminal
function writeToTerminal(ev: Event<string>) {
  term.write(ev.payload)
}

term.onData(writeToPty);
window.addEventListener("resize", fitTerminal);
listen("data", writeToTerminal)
fitTerminal();

onMounted(() => {
  const terminalElement = document.getElementById("terminal") as HTMLElement;
  term.open(terminalElement);
  writeToPty("# welcome to easyminal :D\n");
})
</script>

<template>
  <div id="terminal"></div>
</template>

<style scoped>
/* CSS styles for the component */
</style>