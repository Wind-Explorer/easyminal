import { invoke } from "@tauri-apps/api";

// Write string to the pty
export function writeToPty(data: string) {
  void invoke("async_write_to_pty", {
    data,
  });
}
