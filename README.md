# ⏱️ Telegram Profile Time Updater

> Automatically update your Telegram profile name with the current time — live, automatically, and without requiring your own server.

[فارسی](#فارسی) • [English](#-english)

---

## ✨ Features

* 🕐 **Live Time-Based Name** — Automatically appends the current time to your Telegram profile name.
* 🤖 **Fully Automated** — Runs automatically through GitHub Actions.
* ☁️ **No VPS Required** — No need to keep your computer or a server online.
* 🔐 **Secure Credentials** — Telegram credentials are stored using GitHub Actions Secrets.
* 🌍 **Tehran Timezone** — Uses `Asia/Tehran` as the default timezone.
* ⚡ **Node.js + Telegram MTProto** — Built with Node.js and the Telegram User API.
* 🆓 **Free & Open Source** — Released under the MIT License.

### Example

Your profile name can automatically become:

```text
Suda | 10:42
Suda | 10:43
Suda | 10:44
```

---

# 🇬🇧 English

## 📖 About

**Telegram Profile Time Updater** is a lightweight Node.js automation project that automatically updates your Telegram profile name with the current time.

The project uses Telegram's **User API / MTProto** rather than the Bot API, allowing it to modify the profile of your personal Telegram account.

The automation can run through **GitHub Actions**, meaning you don't need to rent or maintain a VPS.

> Made for fun, experimentation, and learning about Telegram automation.

---

## 🏗️ How It Works

The project has two main stages:

```text
┌─────────────────────┐
│      login.js       │
│                     │
│  Telegram Login     │
│         ↓           │
│   Session String    │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│      GitHub         │
│       Secrets       │
│                     │
│ TG_API_ID           │
│ TG_API_HASH         │
│ TG_SESSION          │
│ TG_BASE_NAME        │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│     update.js       │
│                     │
│ Get Current Time    │
│         ↓           │
│ Update Profile Name │
└──────────┬──────────┘
           │
           ▼
      Telegram Profile
```

---

## 📦 Project Structure

```text
tg-name-updater/
│
├── .github/
│   └── workflows/
│       └── ...
│
├── .env.example
├── login.js
├── update.js
├── package.json
├── package-lock.json
└── README.md
```

### `login.js`

Used only during the initial authentication process to generate your Telegram **Session String**.

### `update.js`

The main updater script. It connects to Telegram using the stored session and updates the profile name with the current time.

### `.env.example`

Example environment configuration showing which credentials are required.

### `.github/workflows/`

Contains the GitHub Actions workflow responsible for automatically running the updater.

---

# 🚀 Installation

## 1. Get Telegram API Credentials

Go to:

**https://my.telegram.org**

Open:

```text
API development tools
```

Create an application and obtain:

```text
api_id
api_hash
```

⚠️ Never publish these credentials publicly.

---

## 2. Fork the Repository

Fork this repository to your own GitHub account.

Then clone your fork:

```bash
git clone https://github.com/YOUR_USERNAME/tg-name-updater.git
cd tg-name-updater
```

---

## 3. Install Dependencies

Install the Node.js dependencies:

```bash
npm install
```

If you only need the login dependencies:

```bash
npm install telegram input
```

---

## 4. Generate Your Telegram Session

Run:

```bash
node login.js
```

Follow the prompts.

You will normally need:

1. Your Telegram phone number
2. The login code sent by Telegram
3. Your 2FA password, if enabled

After successful authentication, the script will provide a **Session String**.

### ⚠️ VERY IMPORTANT

Your Session String is extremely sensitive.

Treat it like a password.

**Never:**

* Commit it to Git
* Put it inside `.env` that gets uploaded
* Share it with anyone
* Post it in screenshots
* Put it in public issues or discussions

---

# 🔐 GitHub Actions Configuration

Open your repository:

```text
Settings
    ↓
Secrets and variables
    ↓
Actions
    ↓
New repository secret
```

Add the following secrets:

| Secret         | Description                         |
| -------------- | ----------------------------------- |
| `TG_API_ID`    | Telegram API ID                     |
| `TG_API_HASH`  | Telegram API Hash                   |
| `TG_SESSION`   | Telegram Session String             |
| `TG_BASE_NAME` | Base name displayed before the time |

### Example

```text
TG_BASE_NAME = Suda
```

The resulting profile name could be:

```text
Suda | 10:42
```

---

# ⚙️ Running the Workflow

Go to:

```text
Actions
```

Select the project's workflow and click:

```text
Run workflow
```

GitHub Actions will execute the updater according to the configured schedule.

The current repository configuration uses a scheduled workflow, with the default interval documented as approximately **5 minutes**.

---

# ⏱️ More Frequent Updates

GitHub Actions scheduled workflows are not designed to provide precise real-time execution.

If you want more frequent updates, you can trigger the workflow through the GitHub API using an external scheduler such as:

```text
cron-job.org
```

For example:

```text
cron-job.org
      │
      │ scheduled request
      ▼
GitHub API
      │
      ▼
GitHub Actions
      │
      ▼
update.js
      │
      ▼
Telegram
```

This can be useful when you want updates closer to every minute.

---

# ⚠️ Security & Safety

This project uses the **Telegram User API**, meaning it operates on your personal Telegram account rather than a separate bot account.

### 🔴 Protect your Session String

The `TG_SESSION` value can provide authenticated access to your Telegram account.

If someone obtains it, they may potentially act as your authenticated Telegram client.

Therefore:

> **Never expose your Session String.**

If you believe your session has been compromised, revoke the affected Telegram session from:

```text
Telegram
→ Settings
→ Devices
```

---

## 🚨 FloodWait

Telegram may impose temporary rate limits if your account performs too many API requests.

Avoid running the updater unnecessarily frequently.

A reasonable schedule is preferable to aggressive polling.

---

## ⚖️ Disclaimer

This project is provided for **educational, experimental, and personal automation purposes**.

You are responsible for how you use it.

Make sure your usage complies with:

* Telegram's Terms of Service
* GitHub's Terms of Service
* Applicable laws and regulations

The author is not responsible for account restrictions, API limitations, or other consequences resulting from misuse.

---

# 🧑‍💻 Development

Clone the repository:

```bash
git clone https://github.com/Sodaive/tg-name-updater.git
cd tg-name-updater
```

Install dependencies:

```bash
npm install
```

Create your local environment configuration:

```bash
cp .env.example .env
```

Then configure the required variables.

Run the updater locally:

```bash
node update.js
```

---

# 🛠️ Tech Stack

| Technology                 | Purpose                 |
| -------------------------- | ----------------------- |
| 🟢 Node.js                 | Runtime                 |
| 📡 Telegram MTProto        | Telegram User API       |
| 📦 Telegram client library | Telegram communication  |
| ⚙️ GitHub Actions          | Automation / scheduling |
| 🔐 GitHub Secrets          | Credential management   |
| 🟨 JavaScript              | Application logic       |

---

# ⭐ Support

If you find this project useful:

⭐ **Star the repository**

🍴 **Fork it**

🐛 **Open an issue**

💡 **Suggest an improvement**

Every star and contribution helps the project grow.

---

# 📄 License

This project is licensed under the **MIT License**.

You are free to:

* Use it
* Modify it
* Distribute it
* Build upon it

See the `LICENSE` file for details.

---

# فارسی

## 📖 درباره پروژه

پروژه **Telegram Profile Time Updater** یک پروژه سبک و متن‌باز با Node.js است که نام پروفایل شخصی تلگرام شما را به‌صورت خودکار با **ساعت فعلی** به‌روزرسانی می‌کند.

این پروژه به‌جای Bot API از **Telegram User API / MTProto** استفاده می‌کند؛ بنابراین مستقیماً روی اکانت شخصی شما کار می‌کند.

همچنین می‌توان آن را از طریق **GitHub Actions** اجرا کرد؛ بنابراین برای اجرای پروژه نیازی به VPS یا سرور شخصی ندارید.

> این پروژه بیشتر با هدف سرگرمی، آزمایش و یادگیری Telegram Automation ساخته شده است.

---

## ✨ امکانات

* 🕐 نمایش ساعت فعلی در نام پروفایل
* 🤖 اجرای کاملاً خودکار
* ☁️ بدون نیاز به VPS
* 🔐 استفاده از GitHub Secrets برای اطلاعات حساس
* ⏱️ پشتیبانی از ساعت تهران
* ⚡ نوشته‌شده با Node.js
* 📡 استفاده از Telegram User API
* 👌 کاملا رایگان و Open Source
* 📜 دارای MIT License

### نمونه

برای مثال اگر نام اصلی شما:

```text
Suda
```

باشد، پروفایل می‌تواند به شکل زیر نمایش داده شود:

```text
Suda 10:42
Suda 10:43
Suda 10:44
```

---

# 🚀 نصب و راه‌اندازی

## ۱. دریافت API ID و API Hash

به سایت زیر بروید:

```text
https://my.telegram.org
```

سپس وارد:

```text
API development tools
```

شوید و یک Application بسازید.

در نهایت دو مقدار دریافت خواهید کرد:

```text
api_id
api_hash
```

⚠️ این اطلاعات را عمومی نکنید.

---

## ۲. فورک کردن پروژه

ابتدا پروژه را Fork کنید و سپس آن را Clone کنید:

```bash
git clone https://github.com/Sodaive/tg-name-updater.git
cd tg-name-updater
```

---

## ۳. نصب Dependencies

```bash
npm install
```

---

## ۴. ساخت Session

برای ورود اولیه:

```bash
node login.js
```

اسکریپت از شما اطلاعات لازم برای ورود به تلگرام را می‌گیرد.

معمولاً شامل:

```text
Phone Number
      ↓
Login Code
      ↓
2FA Password (if enabled)
      ↓
Session String
```

در پایان یک **Session String** دریافت خواهید کرد.

---

# 🔐 تنظیم GitHub Secrets

در Repository خودتان وارد:

```text
Settings
→ Secrets and variables
→ Actions
```

شوید.

سپس این چهار Secret را ایجاد کنید:

```text
TG_API_ID
TG_API_HASH
TG_SESSION
TG_BASE_NAME
```

مثلاً:

```text
TG_BASE_NAME = Suda
```

و خروجی می‌تواند چیزی شبیه این باشد:

```text
Suda | 10:42
```

---

# ⚙️ اجرای GitHub Actions

به تب:

```text
Actions
```

بروید.

سپس Workflow پروژه را انتخاب کرده و:

```text
Run workflow
```

را بزنید.

پس از آن GitHub Actions اجرای اسکریپت را طبق Schedule تنظیم‌شده انجام خواهد داد.

در نسخه فعلی، Workflow به‌صورت زمان‌بندی‌شده اجرا می‌شود و README اصلی پروژه بازه پیش‌فرض حدود **۵ دقیقه** را ذکر کرده است.

---

# ⏱️ آپدیت سریع‌تر

بخش GitHub Actions برای اجرای دقیق و لحظه‌ای طراحی نشده است.

اگر می‌خواهید Workflow تقریباً هر یک دقیقه اجرا شود، می‌توانید از سرویس‌هایی مانند:

```text
cron-job.org
```

برای Trigger کردن GitHub API استفاده کنید.

ساختار کلی:

```text
cron-job.org
      ↓
GitHub API
      ↓
GitHub Actions
      ↓
update.js
      ↓
Telegram
```

---

# ⚠️ نکات امنیتی مهم

این پروژه با **اکانت شخصی تلگرام** کار می‌کند، نه Bot.

مهم‌ترین اطلاعات پروژه:

```text
TG_SESSION
```

است.

### 🔴 خروجی Session String را جدی بگیرید.

آن را:

❌ داخل Git Commit نگذارید

❌ در GitHub عمومی نکنید

❌ برای دیگران ارسال نکنید

❌ داخل Screenshot قرار ندهید

❌ در Issue یا Discussion منتشر نکنید

اگر Session شما لو رفت، از بخش:

```text
Telegram
→ Settings
→ Devices
```

اکانت مشکوک را حذف کنید.

---

# 🚨 FloodWait

اگر پروژه را بیش از حد و با فاصله‌های بسیار کوتاه اجرا کنید، Telegram ممکن است درخواست‌های شما را Rate Limit کند و خطای:

```text
FloodWait
```

برگرداند.

بنابراین اجرای منطقی و با فاصله مناسب توصیه می‌شود.

---

# 🤝 مشارکت

اگر ایده‌ای برای بهتر شدن پروژه دارید:

1. پروژه را Fork کنید.
2. تغییرات خودتون را اعمال کنید.
3. یک Pull Request ارسال کنید.

باگ یا پیشنهاد جدیدی دارید؟

یک Issue باز کنید.

---

# ⭐ حمایت

اگر پروژه برایتان جالب یا مفید بود:

**⭐ یک Star بدهید.**

همین Star کوچک کمک می‌کند پروژه بیشتر دیده شود و توسعه آن ادامه پیدا کند.

---

# 📄 License

این پروژه تحت **MIT License** منتشر شده است.

یعنی می‌توانید آزادانه:

* استفاده کنید
* تغییر دهید
* فورک کنید
* منتشر کنید
* بر اساس آن پروژه جدید بسازید

برای جزئیات بیشتر فایل `LICENSE` را ببینید.

---

<div align="center">

### ⏱️ Keep your Telegram profile alive.

**Made with ❤️ and JavaScript by [Sodaive](https://github.com/Sodaive)**

⭐ If you like it, consider giving the repository a star!

</div>
