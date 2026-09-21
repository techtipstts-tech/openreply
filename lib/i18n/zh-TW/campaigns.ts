// Campaign list, builder, preview, detail, import, automations.
//
// A few strings the builder/preview use live in a neighbouring file because
// another screen owns them and a key may only be defined once:
//   "And this comment has", "i'm following", the follow-prompt default
//     -> campaign-pages.ts (the read-only campaign detail page)
//   "Comments", "No posts found"
//     -> overview.ts
export const campaigns: Record<string, string> = {
  /* ---------------------------------------------------------------------
   * Builder chrome: top bar, save/publish buttons, name field, CSV import.
   * ------------------------------------------------------------------- */
  "New campaign": "新的自動回覆",
  "Untitled campaign": "未命名的自動回覆",
  LIVE: "進行中",
  PAUSED: "已暫停",
  "Go Live": "上線",
  Stop: "暫停",
  "Saving…": "儲存中…",
  "Save changes": "儲存變更",
  Skip: "略過",
  "Skip & finish": "略過並結束",
  Preview: "預覽",
  "Campaign name": "自動回覆名稱",
  "(optional)": "（選填）",
  "e.g. YC referral": "例如：新課預購",
  "Instagram account": "Instagram 帳號",
  "Campaign not found.": "找不到這條自動回覆。",
  "Back to campaigns": "回到自動回覆列表",
  "Campaign for @{username}": "@{username} 的自動回覆",
  "Importing {current} of {total}.": "正在匯入第 {current} 筆，共 {total} 筆。",
  "Fields are prefilled from your CSV. Pick the reel, edit anything, and save to load the next one — or Skip if you don’t want this one.":
    "欄位已經照你的 CSV 填好了。選一則 Reels，想改就改，存檔後會自動帶出下一筆；不想要這一筆就按「略過」。",

  /* ------------------------------ validation ------------------------- */
  "Connect an Instagram account first.": "請先連結一個 Instagram 帳號。",
  "Pick a post or reel to trigger the campaign.":
    "請選一則要觸發自動回覆的貼文或 Reels。",
  "Add at least one keyword, or switch to any word.":
    "請至少填一個關鍵字，或改選「任何字」。",
  "Add the DM with the link.": "請填要送出的私訊內容。",
  "Your opening DM needs a message and a button label.":
    "開場私訊需要訊息內容和按鈕文字。",
  "Failed to save campaign": "自動回覆儲存失敗",

  /* --------------------- sentence 1: the trigger --------------------- */
  "When someone comments on": "當有人留言在",
  "a specific post or reel": "某一則貼文或 Reels",
  "any post or reel": "任何貼文或 Reels",
  "next post or reel": "下一則貼文或 Reels",

  /* --------------------- sentence 2: the keyword --------------------- */
  "a specific word or words": "特定的字",
  "any word": "任何字",
  "Enter a word or multiple": "輸入一個或多個關鍵字",
  "Use commas to separate words": "多個關鍵字請用逗號隔開",
  "also reply when someone DMs anything": "有人私訊任何內容時也一樣回覆",
  "also reply when someone DMs these words": "有人私訊這些關鍵字時也一樣回覆",
  "Every DM to this account gets the reply below — use with care.":
    "這個帳號收到的每一則私訊都會得到下面的回覆，請小心使用。",
  "A DM containing any of these words gets the same reply, no comment needed.":
    "私訊裡只要出現其中一個關鍵字，就會收到同樣的回覆，不用留言也可以。",
  "reply to their comments under the post": "在貼文底下公開回覆對方的留言",
  "Sent you a DM! 📩": "私訊你囉！📩",
  "Remove reply": "刪掉這則回覆",
  "+ Add another reply": "+ 再加一則回覆",
  "One is picked at random each time, so replies don’t look identical.":
    "每次會隨機挑一則，回覆才不會每則都長一樣。",

  /* ------------------ sentence 3: what they get first ---------------- */
  "They will get": "對方會先收到",
  "an opening DM": "一則開場私訊",
  "Hey there! I'm so happy you're here 😊": "嗨！很開心你來找我 😊",
  "Send me the link": "把連結給我",
  "Send link": "傳連結給我",
  "a follow requirement first": "先追蹤才給連結的要求",
  "We send the link only after they tap the button and Instagram confirms the follow. If it can’t be verified, we send it anyway.":
    "對方按下按鈕、而且 Instagram 也確認有追蹤之後，我們才會把連結送出去。如果沒辦法確認，還是會照樣送出。",

  /* ------------------ sentence 4: what they get next ----------------- */
  "And then, they will get": "接著會收到",
  "a DM with a link": "一則附上連結的私訊",
  "Write a message": "寫一則訊息",
  "Open link": "開啟連結",
  "Button label (e.g. Open link)": "按鈕文字（例如：開啟連結）",
  "Second button label": "第二顆按鈕的文字",
  "+ Add A Second Link": "+ 加第二個連結",
  "+ Add A Link": "+ 加一個連結",
  "{link} inserts the tracked link; {username} personalizes.":
    "{link} 會換成追蹤連結，{username} 會換成對方的名字。",
  "a follow-up thank-you message": "一則後續的感謝訊息",
  "Btw just wanted to say thanks for following me, I appreciate the support 🙌":
    "對了，謝謝你追蹤我，真的很感謝你的支持 🙌",
  "Send it": "在",
  "minutes after the link": "分鐘後送出",
  "Sent {minutes} min after they tap through.":
    "對方點開連結後 {minutes} 分鐘送出。",
  "Sent right after they tap through.": "對方點開連結後馬上送出。",
  "{username} personalizes it. Max 24 hours, to stay inside Instagram’s messaging window.":
    "{username} 會換成對方的名字。最多 24 小時，才不會超過 Instagram 的訊息時限。",

  /* ------------------------ phone preview ---------------------------- */
  yourbrand: "你的帳號",
  username: "小美",
  "your link": "你的連結",
  Posts: "貼文",
  "Applications close rly soon!!": "快要截止報名了！！",
  "View all comments": "查看全部留言",
  Now: "剛剛",
  yc: "我要",
  Reply: "回覆",
  "Add a comment for {username}…": "留言給 {username}…",
  "their message": "對方傳來的訊息",
  "Your opening message…": "你的開場訊息…",
  "Button label": "按鈕文字",
  "{minutes} min later": "{minutes} 分鐘後",
  "Message…": "訊息…",
  Post: "貼文",
  DM: "私訊",
  "DM trigger": "私訊觸發",

  /* -------------------------- post picker ---------------------------- */
  "Failed to load posts": "貼文載入失敗",
  "Connect your Instagram account first": "請先連結你的 Instagram 帳號",
  "Search your posts by caption…": "用貼文內容搜尋…",
  "No posts match “{query}”": "找不到符合「{query}」的貼文",
  "Already used": "已被使用",
  "Already used by “{name}”": "已經用在「{name}」",
  "Instagram post": "Instagram 貼文",
  "No image": "沒有圖片",
  Selected: "已選擇",
  "Show {count} more": "再顯示 {count} 則",

  /* -------- worker fallbacks the recipient reads in their DM --------- */
  "Here's your link:": "連結在這裡：",
};
