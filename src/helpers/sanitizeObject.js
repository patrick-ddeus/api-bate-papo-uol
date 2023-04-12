import { stripHtml } from "string-strip-html";

export default function sanitizeObjects(obj) {
    for (let [key, value] of Object.entries(obj)) {
        obj[key] = stripHtml(value).result.trim()
    }
    return obj
}
