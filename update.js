const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const { Api } = require("telegram/tl");

const apiId = parseInt(process.env.TG_API_ID);
const apiHash = process.env.TG_API_HASH;
const sessionString = process.env.TG_SESSION;
const baseName = process.env.TG_BASE_NAME || "Amir";

async function main() {
  const client = new TelegramClient(new StringSession(sessionString), apiId, apiHash, { connectionRetries: 5 });
  await client.connect();

const now = new Date();
const time = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Tehran",
  hourCycle: "h23",
  hour: "2-digit",
  minute: "2-digit",
}).format(now);

  await client.invoke(
    new Api.account.UpdateProfile({
      firstName: `${baseName} ${time}`,
    })
  );

  console.log("Updated first name to:", `${baseName} ${time}`);
  await client.disconnect();
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
