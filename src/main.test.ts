import { test, expect }  from "vitest"
import { generateConfirmationEmail } from "./email/template-confirm-email"

test("html", async () => {
    expect(await generateConfirmationEmail("user-name", "big-email@provider.whatever", "abc123xyz")).toMatchSnapshot()
})
