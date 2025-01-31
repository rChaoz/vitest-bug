import Handlebars from "handlebars"
import { generateEmail } from "."

const PUBLIC_HOST_BASE = "http://localhost:5173"

const preheader = "Click the button below to confirm your e-mail for your account on TODO Boards"

const contentTemplate = Handlebars.compile<Record<"username" | "email", string>>(`
    <p>Hi, <strong>{{username}}</strong>!</p>
    <p>
        Please use the button bellow to confirm your e-mail address: <strong>{{email}}</strong>.
    </p>
`)

const postContent = `
    <p class="info">Note that this link will expire in <strong>24 hours</strong>. You can get a new link by logging into your account.</p>
`

export async function generateConfirmationEmail(username: string, email: string, token: string) {
    const url = new URL(`/callback/confirm-email?token=${encodeURIComponent(token)}`, PUBLIC_HOST_BASE).href
    return generateEmail({
        preheader,
        content: contentTemplate({ username, email }),
        button: {
            url,
            text: "Confirm e-mail",
        },
        postContent,
    })
}
