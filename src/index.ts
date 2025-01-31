import EmailTemplate from "./template.hbs"
import inlineCss from "inline-css"

export async function generateEmail(values) {
    const html = EmailTemplate({ ...values, baseUrl: "http://localhost:5173", contactEmail: "contact@todo-boards.com" })
    return inlineCss(html, { removeStyleTags: false, url: "./" })
}
