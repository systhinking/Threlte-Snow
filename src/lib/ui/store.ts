import { writable } from "svelte/store";

export function uiControl(values: any) {
    return writable(values)
}