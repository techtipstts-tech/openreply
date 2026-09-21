// Login, magic-link sent page, invite acceptance.
export const auth: Record<string, string> = {
  // app/login/page.tsx
  "Login - OpenReply": "登入 - OpenReply",
  "Sign in to manage Instagram comment-to-DM campaigns.":
    "登入以管理 Instagram 留言轉私訊自動回覆。",
  "Sign-in is off on this demo": "此展示環境已關閉登入功能",
  "This is the public demo — it doesn't create real accounts or send DMs. To use OpenReply for real, clone it and run your own instance with your own Meta app and domain.":
    "這是公開展示環境，不會建立真實帳號或發送私訊。若要正式使用 OpenReply，請自行複製部署，並使用你自己的 Meta 應用程式與網域。",
  "Clone it yourself": "自行複製部署",
  "Sign in to use the {template} template.": "登入以使用「{template}」範本。",
  "Sign in by email, then connect your Instagram professional account.":
    "先用電子郵件登入，再連結你的 Instagram 專業帳號。",
  "Template selected": "已選擇範本",
  "Check your email": "請查看你的電子郵件",
  "We sent you a secure sign-in link. Open it on this device to continue.":
    "我們已寄出安全登入連結，請在這台裝置上開啟以繼續。",
  "Work email": "工作電子郵件",
  "Email me a magic link": "寄送登入連結給我",

  // app/verify-request/page.tsx
  "Check your email - OpenReply": "請查看你的電子郵件 - OpenReply",
  "A sign-in link was sent to your email.": "登入連結已寄送至你的電子郵件。",
  "Back to sign in": "返回登入",

  // app/invite/[token]/page.tsx
  "Accept Workspace Invitation - OpenReply": "接受工作區邀請 - OpenReply",
  "Workspace invitation": "工作區邀請",
  "Join {workspace}": "加入{workspace}",
  "You were invited as {role} for {email}.":
    "你受邀以「{role}」身分加入，邀請信箱為 {email}。",
  owner: "擁有者",
  admin: "管理員",
  member: "成員",
  "This invitation has expired. Ask the workspace owner to resend it.":
    "此邀請已過期，請聯絡工作區擁有者重新發送邀請。",

  // components/invitation-accept-card.tsx
  "Sign in to accept": "登入以接受邀請",
  "Accepting...": "處理中…",
  "Accept invitation": "接受邀請",
  "Could not accept invitation": "無法接受邀請",
  "Use the magic link account for {email}.": "請使用 {email} 的登入連結帳號。",
};
