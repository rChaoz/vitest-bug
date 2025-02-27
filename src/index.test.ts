import { describe, expect, it, type MockInstance, test, vi } from "vitest"
import { mailService, initEmail, generateEmail } from "./index"

test(generateEmail, async () => {
    await expect(
        generateEmail({
            button: {
                url: "https://example.com",
                text: "Button test text",
            },
            preheader: "pre-header string with <s>HTML</s>",
            content: "content string with <strong>HTML</strong>",
            postContent: "post-content string with <em>HTML</em>",
            unsubscribeUrl: "https://example.com/unsubscribe",
        }),
    ).resolves.toMatchInlineSnapshot(`
      "<!--suppress HtmlDeprecatedAttribute --><html lang="en"><!--suppress HtmlRequiredTitleElement --><head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <!--suppress CssUnusedSymbol -->
          <style media="all">
            /* Global styles & resets */
            body {
              font-family: Helvetica, sans-serif;
              -webkit-font-smoothing: antialiased;
              font-size: 16px;
              line-height: 1.3;
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
            }

            table {
              border-collapse: separate;
              mso-table-lspace: 0;
              mso-table-rspace: 0;
              width: 100%;
            }

            table td {
              font-family: Helvetica, sans-serif;
              font-size: 16px;
              vertical-align: top;
            }

            p {
              font-family: Helvetica, sans-serif;
              font-size: 16px;
              font-weight: normal;
              margin: 0 0 16px 0;
            }

            a {
              color: #0867ec;
              text-decoration: underline;
            }

            /* Body & container */

            body {
              background-color: #f4f5f6;
              margin: 0;
              padding: 0;
            }

            .body {
              background-color: #f4f5f6;
              width: 100%;
            }

            .container {
              margin: 0 auto !important;
              max-width: 720px;
              padding: 24px 0 0 0;
              width: 600px;
            }

            .content {
              box-sizing: border-box;
              display: block;
              margin: 0 auto;
              max-width: 600px;
              padding: 0;
            }

            /* Header, footer, main */

            .preheader {
              color: transparent;
              display: none;
              height: 0;
              max-height: 0;
              max-width: 0;
              opacity: 0;
              overflow: hidden;
              mso-hide: all;
              visibility: hidden;
              width: 0;
            }

            .main {
              background: #ffffff;
              border: 1px solid #eaebed;
              border-radius: 16px;
              width: 100%;
            }

            .wrapper {
              box-sizing: border-box;
              padding: 24px;
            }

            .footer {
              clear: both;
              padding-block: 16px;
              text-align: center;
              width: 100%;
            }

            .footer td,
            .footer p,
            .footer span,
            .footer a {
              color: #9a9ea6;
              font-size: 16px;
              text-align: center;
            }

            /* Buttons */
            .btn {
              box-sizing: border-box;
              min-width: 100% !important;
              width: 100%;
            }

            .btn > tbody > tr > td {
              padding-bottom: 16px;
            }

            .btn table {
              width: auto;
            }

            .btn table td {
              background-color: #ffffff;
              border-radius: 4px;
              text-align: center;
            }

            .btn a {
              background-color: #ffffff;
              border: solid 2px #0867ec;
              border-radius: 4px;
              box-sizing: border-box;
              color: #0867ec;
              cursor: pointer;
              display: inline-block;
              font-size: 16px;
              font-weight: bold;
              margin: 0;
              padding: 12px 24px;
              text-decoration: none;
              text-transform: capitalize;
            }

            .btn-primary table td {
              background-color: #0867ec;
            }

            .btn-primary a {
              background-color: #0867ec;
              border-color: #0867ec;
              color: #ffffff;
            }

            @media all {
              .btn-primary table td:hover {
                background-color: #217fff !important;
              }
              .btn-primary a:hover {
                background-color: #217fff !important;
                border-color: #217fff !important;
              }
            }

            /* Responsive styles */

            @media only screen and (max-width: 720px) {
              .main p,
              .main td,
              .main span {
                font-size: 16px !important;
              }
              .wrapper {
                padding: 8px !important;
              }
              .content {
                padding: 0 !important;
              }
              .container {
                padding: 0 !important;
                padding-top: 8px !important;
                width: 100% !important;
              }
              .main {
                border-left-width: 0 !important;
                border-radius: 0 !important;
                border-right-width: 0 !important;
              }
              .btn table {
                max-width: 100% !important;
                width: 100% !important;
              }
              .btn a {
                font-size: 16px !important;
                max-width: 100% !important;
                width: 100% !important;
              }
            }

            /* Don't inline these styles, fixes for various e-mail viewers */
            @media all {
              .ExternalClass {
                width: 100%;
              }
              .ExternalClass,
              .ExternalClass p,
              .ExternalClass span,
              .ExternalClass font,
              .ExternalClass td,
              .ExternalClass div {
                line-height: 100%;
              }
              #MessageViewBody a {
                color: inherit;
                text-decoration: none;
                font-size: inherit;
                font-family: inherit;
                font-weight: inherit;
                line-height: inherit;
              }
            }
          </style>
        </head>
        <body style="-ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; background-color: #f4f5f6; font-family: Helvetica, sans-serif; font-size: 16px; line-height: 1.3; margin: 0; padding: 0;">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="background-color: #f4f5f6; border-collapse: separate; mso-table-lspace: 0; mso-table-rspace: 0; width: 100%;">
            <tbody><tr>
              <td style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top;">&nbsp;</td>
              <td class="container" style="font-family: Helvetica, sans-serif; font-size: 16px; margin: 0 auto !important; max-width: 720px; padding: 24px 0 0 0; vertical-align: top; width: 600px;">
                <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 600px; padding: 0;">
                    <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; mso-hide: all; opacity: 0; overflow: hidden; visibility: hidden; width: 0;">pre-header string with <s>HTML</s></span>

                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="main" style="background: #ffffff; border: 1px solid #eaebed; border-collapse: separate; border-radius: 16px; mso-table-lspace: 0; mso-table-rspace: 0; width: 100%;">
                    <tbody><tr>
                      <td class="wrapper" style="box-sizing: border-box; font-family: Helvetica, sans-serif; font-size: 16px; padding: 24px; vertical-align: top;">
                        content string with <strong>HTML</strong>
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn-primary btn" style="border-collapse: separate; box-sizing: border-box; min-width: 100% !important; mso-table-lspace: 0; mso-table-rspace: 0; width: 100%;">
                            <tbody>
                              <tr>
                                <td align="left" style="font-family: Helvetica, sans-serif; font-size: 16px; padding-bottom: 16px; vertical-align: top;">
                                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0; mso-table-rspace: 0; width: auto;">
                                    <tbody>
                                      <tr>
                                        <td style="background-color: #0867ec; border-radius: 4px; font-family: Helvetica, sans-serif; font-size: 16px; text-align: center; vertical-align: top;"><a href="https://example.com" target="_blank" style="background-color: #0867ec; border: solid 2px #0867ec; border-color: #0867ec; border-radius: 4px; box-sizing: border-box; color: #ffffff; cursor: pointer; display: inline-block; font-size: 16px; font-weight: bold; margin: 0; padding: 12px 24px; text-decoration: none; text-transform: capitalize;">Button test text</a></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        post-content string with <em>HTML</em>
                      </td>
                    </tr>
                  </tbody></table>

                  <div class="footer" style="clear: both; padding-block: 16px; text-align: center; width: 100%;">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0; mso-table-rspace: 0; width: 100%;">
                      <tbody><tr>
                        <td class="content-block" style="color: #9a9ea6; font-family: Helvetica, sans-serif; font-size: 16px; text-align: center; vertical-align: top;">
                          TODO Boards by Matei Trandafir. All rights reserved.
                            <a href="http://localhost:5173" style="color: #9a9ea6; font-size: 16px; text-align: center; text-decoration: underline;">http://localhost:5173</a>
                            <br>
                            Don't like receiving these e-mails?
                            <a href="https://example.com/unsubscribe" target="_blank" style="color: #9a9ea6; font-size: 16px; text-align: center; text-decoration: underline;">Change notification preferences</a>.
                            <br>
                            Contact us at
                            <a href="mailto:contact@todo-boards.com" style="color: #9a9ea6; font-size: 16px; text-align: center; text-decoration: underline;">contact@todo-boards.com</a>
                        </td>
                      </tr>
                    </tbody></table>
                  </div>
                </div>
              </td>
              <td style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top;">&nbsp;</td>
            </tr>
          </tbody></table>
        
      </body></html>"
    `)
})
