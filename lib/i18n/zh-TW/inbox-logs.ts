// Inbox and DM logs.
export const inboxLogs: Record<string, string> = {
  // Inbox page
  Inbox: "收件匣",
  Conversations: "對話",
  "Loading…": "載入中…",
  "No conversations yet.": "目前沒有對話。",
  "Details unavailable": "無法取得詳細資料",
  unknown: "未知",
  "Instagram could not load this conversation.": "Instagram 無法載入這則對話。",
  "You: ": "你：",
  "(no text)": "（無內容）",
  "Select a conversation to read and reply.": "選擇一則對話來查看並回覆。",
  "Back to conversations": "返回對話列表",
  Back: "返回",
  "Instagram could not load the details of this conversation. Other conversations are still available. You can check this chat in Instagram.":
    "Instagram 無法載入這則對話的詳細資料，其他對話仍可正常瀏覽，你可以到 Instagram 查看這則對話。",
  "No messages.": "目前沒有訊息。",
  "Write a reply…  (Enter to send, Shift+Enter for a new line)":
    "輸入回覆…（按 Enter 送出，Shift+Enter 換行）",
  "Sending…": "傳送中…",
  Send: "送出",
  "Failed to load conversations": "載入對話失敗",
  "Failed to send message": "傳送訊息失敗",

  // Logs page
  // Status filter chips: "All" plus each STATUS_FILTERS value with its
  // SKIPPED_ prefix stripped and underscores turned into spaces (logic
  // unchanged in the page; only the resulting label text is translated here).
  All: "全部",
  SENT: "已送出",
  FAILED: "失敗",
  PENDING: "等待中",
  "RATE LIMIT": "頻率限制",
  "PLAN LIMIT": "方案限制",
  DEDUP: "重複略過",
  Commenter: "留言者",
  Comment: "留言",
  Campaign: "自動回覆",
  Account: "帳號",
  Status: "狀態",
  Time: "時間",
  "No logs found": "找不到紀錄",
  "Showing {from}–{to} of {total}": "顯示第 {from}–{to} 筆，共 {total} 筆",
  Previous: "上一頁",
  Next: "下一頁",
};
