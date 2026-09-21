// Shared chrome: navigation, generic buttons, empty states, toasts.
export const common: Record<string, string> = {
  // components/sidebar.tsx
  Dashboard: "儀表板",
  Overview: "總覽",
  Inbox: "收件匣",
  Campaigns: "自動回覆",
  "DM Logs": "私訊紀錄",
  Settings: "設定",
  Diagnostics: "診斷",
  "Self-hosted": "自架版",
  "Supported by": "贊助夥伴",

  // components/top-bar.tsx
  "New Campaign": "新增自動回覆",
  "Toggle sidebar": "切換側邊欄",
  Menu: "選單",
  "{count} accounts": "{count} 個帳號",
  Connect: "連結",
  "Connect Instagram": "連結 Instagram 帳號",

  // components/account-select.tsx
  "Instagram account": "Instagram 帳號",
  "All accounts": "所有帳號",

  // components/status-badge.tsx
  Sent: "已送出",
  Failed: "失敗",
  Pending: "等待中",
  Dedup: "重複",
  "Rate limited": "速率限制",
  Skipped: "已略過",
  "No match": "未符合",

  // components/stat-card.tsx
  Up: "上升",
  Down: "下降",

  // components/demo-notice.tsx
  "is a demo. OpenReply is self-hosted — signing in here will not send DMs for your account.":
    "是展示環境。OpenReply 為自架服務，在這裡登入不會替你的帳號發送私訊。",
  "Deploy your own copy": "自行部署一份",
  ".": "。",
  "{host} is a demo instance.": "{host} 是展示環境。",
  "Signing in here will not send DMs for your Instagram account. OpenReply is self-hosted, so it only works on a deployment you run yourself, with your own Meta app and your own domain.":
    "在這裡登入不會替你的 Instagram 帳號發送私訊。OpenReply 為自架服務，只能在你自己架設的環境運作，並使用你自己的 Meta 應用程式與網域。",
  "Read the setup guide": "閱讀設定指南",
  "Dismiss demo notice": "關閉展示提示",

  // components/instagram-connect-notice.tsx
  "Instagram connection cancelled": "Instagram 連結已取消",
  "You declined the permission prompt on Instagram. Start again and accept all requested permissions.":
    "你拒絕了 Instagram 的權限請求，請重新開始並同意所有必要的權限。",
  "Instagram connection expired": "Instagram 連結已過期",
  "The login link was missing or older than 10 minutes. Click Connect Instagram to start a fresh attempt.":
    "登入連結遺失或已超過 10 分鐘，請點選「連結 Instagram 帳號」重新嘗試。",
  "Not permitted": "沒有權限",
  "Only workspace owners and admins can connect an Instagram account.":
    "只有工作區擁有者與管理員可以連結 Instagram 帳號。",
  "Account already connected": "帳號已被連結",
  "That Instagram account is connected to another workspace. Disconnect it there first, or connect a different account.":
    "該 Instagram 帳號已連結至其他工作區，請先在該處解除連結，或改用其他帳號。",
  "Instagram app not configured": "Instagram 應用程式尚未設定",
  "Set these environment variables and restart the server:":
    "請設定這些環境變數並重新啟動伺服器：",
  "Set the required environment variables and restart the server:":
    "請設定必要的環境變數並重新啟動伺服器：",
  See: "請參閱",
  "for how to obtain each value. Note that": "以了解如何取得各項數值。另外，",
  "must be a 64-character hex string.": "必須是 64 字元的十六進位字串。",
  "Instagram connection failed": "Instagram 連結失敗",
  "Instagram accepted the login but the connection could not be completed. This is usually a mismatched redirect URI or an app that is missing the required permissions.":
    "Instagram 已接受登入，但連結未能完成。這通常是重新導向網址不符，或應用程式缺少必要權限所致。",

  // components/keyword-input.tsx
  "Remove {keyword}": "移除 {keyword}",
  Remove: "移除",
  "Type keyword and press Enter...": "輸入關鍵字後按 Enter…",
  "{count}/{max} keywords · Press Enter or comma to add":
    "{count}/{max} 個關鍵字 · 按 Enter 或逗號新增",
};
