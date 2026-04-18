# Dragonfly Mission International — Static Website

A complete static HTML/CSS/JS replica of [dmionline.org](https://www.dmionline.org), ready to deploy for **free on GitHub Pages**.

## Pages

| File | URL |
|------|-----|
| `index.html` | Home |
| `story.html` | Our Story (slideshow) |
| `mission.html` | Mission (interactive dialogs) |
| `serve.html` | Serve (cards + financial goals modal) |
| `blog.html` | Blog listing |
| `blog/a-note-from-kathy.html` | Blog post |
| `blog/on-pause.html` | Blog post |
| `blog/lets-start-over.html` | Blog post |

---

## 🚀 Deploying to GitHub Pages (Free)

### Step 1 — Create a GitHub account
Go to [github.com](https://github.com) and sign up (free).

### Step 2 — Create a new repository
1. Click **New repository**
2. Name it `dmionline` (or anything you like)
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload the files
**Option A (Drag & Drop — easiest):**
1. In your new repo, click **uploading an existing file**
2. Drag the entire folder contents (all HTML, CSS, JS, images files) into the upload area
3. Click **Commit changes**

**Option B (GitHub Desktop app):**
1. Download [GitHub Desktop](https://desktop.github.com)
2. Clone your new repo
3. Copy all site files into the cloned folder
4. Commit and push

### Step 4 — Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose **main** branch, **/ (root)** folder
4. Click **Save**

Your site will be live at: `https://YOUR-USERNAME.github.io/dmionline/`

### Step 5 — Custom domain (optional)
To keep using `dmionline.org`:
1. In GitHub Pages settings, enter your custom domain
2. In your domain registrar (wherever dmionline.org is registered), update the DNS:
   - Add 4 A records pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Add a CNAME record: `www` → `YOUR-USERNAME.github.io`
3. Check "Enforce HTTPS" in GitHub Pages settings

---

## 🖼️ Images — Before Canceling Wix

The site currently loads images directly from Wix's CDN (`static.wixstatic.com`).
This works fine while your Wix account is active.

**Before canceling Wix**, run this one-time script to save all images locally:

```bash
python3 download_images.py --update-html
```

This will:
1. Download all 7 images into the `images/` folder
2. Update all HTML files to use local image paths instead of Wix CDN URLs

Then re-upload the updated files to GitHub.

---

## 📧 Contact / Email links

All email links use: `info@dmionline.org`

## 💰 Donate button

Links to PayPal: `https://www.paypal.com/donate/?hosted_button_id=GHY8FNFBFQS34`

## 📱 Social links

- Facebook: `http://www.facebook.com/dragonflymission`
- Instagram: `https://instagram.com/dmionline/`

---

## 🎬 "- watch" links

The original Wix site had embedded video lightboxes triggered by "- watch" buttons.
These are currently placeholder buttons. To add video:

1. Upload your video to YouTube or Vimeo
2. Replace the `<span class="watch-link">- watch</span>` elements with a link to your video, e.g.:
   ```html
   <a href="https://youtu.be/YOUR_VIDEO_ID" target="_blank" class="watch-link">- watch</a>
   ```
   Or embed a modal lightbox with the video if desired.

---

*Site replicated with Claude — April 2026*
