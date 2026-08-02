const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const input = require("input");

const apiId = ***; // your api_id
const apiHash = "***"; // your api_hash

(async () => {
  const client = new TelegramClient(new StringSession(""), apiId, apiHash, { connectionRetries: 5 });
  await client.start({
    phoneNumber: async () => await input.text("your phone number: "),
    password: async () => await input.text("two auth verify code ( if you have, else, Enter ): "),
    phoneCode: async () => await input.text("Code sent: "),
    onError: (err) => console.log(err),
  });
  console.log("\n=== SESSION STRING (KEEP SAFE THIS CODE!) ===");
  console.log(client.session.save());
  console.log("=========================================================\n");
  process.exit(0);
})();
