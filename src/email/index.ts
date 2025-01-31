import Handlebars from "handlebars"
import template from "./template.hbs?raw"
import inlineCss from "inline-css"

const PUBLIC_HOST_BASE = "http://localhost:5173"
const EMAIL_CONTACT = "contact@todo-boards.com"
const EmailTemplate = Handlebars.compile(template)

export async function generateEmail(values: any) {
    const html = EmailTemplate({ ...values, baseUrl: PUBLIC_HOST_BASE, contactEmail: EMAIL_CONTACT })
    return inlineCss(html, { removeStyleTags: false, url: "./" })
}
