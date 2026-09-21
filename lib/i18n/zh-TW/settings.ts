// Settings: Instagram connection, provider, workspace, members.
export const settings: Record<string, string> = {
  // app/(dashboard)/settings/page.tsx
  "Disconnect Instagram? Campaigns for this account will stop sending DMs.":
    "確定要解除連結 Instagram 嗎？此帳號的自動回覆將停止傳送私訊。",
  "Could not invite member": "無法邀請成員",
  "Instagram Connection": "Instagram 連結",
  Status: "狀態",
  "Comment webhooks and private replies depend on this connection.":
    "留言 Webhook 與私訊回覆都需要這個連結才能運作。",
  Connected: "已連結",
  "Not connected": "尚未連結",
  Accounts: "帳號",
  "{count} connected Instagram profile{suffix}":
    "已連結 {count} 個 Instagram 帳號",
  "{count} connected": "已連結 {count} 個",
  None: "無",
  "Connect an Instagram professional account to launch campaigns.":
    "連結 Instagram 專業帳號，即可建立自動回覆。",
  "Connected via Zernio": "透過 Zernio 連結",
  "Token expires": "存取權杖到期",
  "not available": "無法取得",
  "Webhook ready": "Webhook 已就緒",
  "Webhook pending": "Webhook 尚未就緒",
  "Disconnecting...": "解除連結中…",
  Disconnect: "解除連結",
  "Connect using your own Meta app": "使用你自己的 Meta 應用程式連結",
  Team: "團隊成員",
  "Unknown member": "未知成員",
  OWNER: "擁有者",
  ADMIN: "管理員",
  MEMBER: "成員",
  "Pending invites": "待處理邀請",
  Copy: "複製",
  Revoke: "撤銷邀請",
  Member: "成員",
  Admin: "管理員",
  "Inviting...": "邀請中…",
  Invite: "邀請",
  Usage: "用量",
  "DMs sent this month": "本月已傳送私訊數量",
  "Self-hosted — no plan limits.": "自行架設，無方案限制。",

  // components/zernio-connection.tsx
  "Could not load connection.": "無法載入連結資訊。",
  "Could not update connection.": "無法更新連結資訊。",
  "Easier Instagram setup": "更輕鬆設定 Instagram",
  "Optional connection provider": "選用的連結供應商",
  "Zernio, OpenReply sponsor": "Zernio，OpenReply 贊助商",
  "Connect Instagram without creating your own Meta developer app. Zernio is a paid service and an OpenReply sponsor. Your campaigns and hosting stay in OpenReply.":
    "不必自行建立 Meta 開發者應用程式，也能連結 Instagram。Zernio 是付費服務，也是 OpenReply 的贊助商。你的自動回覆與主機仍留在 OpenReply。",
  "Get a Zernio API key": "取得 Zernio API 金鑰",
  "View pricing": "查看價格",
  "Ask your workspace owner or admin to configure Zernio.":
    "請洽你的工作區擁有者或管理員設定 Zernio。",
  "Zernio API key": "Zernio API 金鑰",
  "Use an unrestricted, read-write key with Inbox access. OpenReply registers a webhook for this workspace. The key is encrypted and never shown again.":
    "請使用具備收件匣存取權限、不受限制的讀寫金鑰。OpenReply 會替這個工作區註冊 Webhook。金鑰會加密儲存，且不會再次顯示。",
  "Saving…": "儲存中…",
  "Save API key": "儲存 API 金鑰",
  "API key saved securely.": "API 金鑰已安全儲存。",
  "Zernio profile": "Zernio 設定檔",
  "Select a profile": "選擇設定檔",
  "Create a profile in Zernio, then refresh this page.":
    "請先在 Zernio 建立設定檔，再重新整理這個頁面。",
  "Configuring…": "設定中…",
  "Repair webhook connection": "修復 Webhook 連線",
  "Save profile and configure webhook": "儲存設定檔並設定 Webhook",
  "Webhook configured. Choose an Instagram account for OpenReply:":
    "Webhook 已設定完成，請選擇要用於 OpenReply 的 Instagram 帳號：",
  "Use in OpenReply": "在 OpenReply 中使用",
  "Connect another Instagram account": "連結其他 Instagram 帳號",
  "After connecting Instagram, return here and select it for OpenReply. Keep Zernio automations off for these campaigns to avoid sending twice.":
    "連結 Instagram 之後，請回到這裡選擇要用於 OpenReply 的帳號。請關閉 Zernio 針對這些自動回覆的自動化功能，避免重複傳送。",
  "Remove the Zernio key and this OpenReply webhook? Disconnect its Instagram accounts from OpenReply first.":
    "確定要移除 Zernio 金鑰和這個 OpenReply 的 Webhook 嗎？請先在 OpenReply 解除連結相關的 Instagram 帳號。",
  "Remove Zernio connection": "移除 Zernio 連結",
};
