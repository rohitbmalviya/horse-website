# Apex Thoroughbred Racing Syndicate — Modern Web Presence

A sleek, modern luxury digital presence designed specifically for a thoroughbred horse racing syndicate. Built to deliver an authoritative, high-prestige feel with minimal copy and imagery while driving every visitor toward one clear action: **Enquiring to join the syndicate**.

---

## 🌟 Key Features

1. **Anti-"Tweed & Turf" Modern Aesthetic:**
   * High-performance luxury styling inspired by modern motorsport and horology (Deep Obsidian, Brushed Champagne Gold, Crisp White).
   * Generous white space, refined typography, and high-impact card structures.
2. **Three Fully Responsive Pages:**
   * **`index.html` (Landing Page):** High-impact hero, trust metrics, ownership value pillars, featured horse spotlight with live share meter, and prominent "Enquire to Join" CTAs.
   * **`about.html` (About & Stable Page):** Syndicate story, mission, the 3-step ownership journey, and an upcoming horse roster showcase.
   * **`contact.html` (Lead Capture Engine):** Streamlined intake form capturing Name, Email, Phone, Horse of Interest, and Share Allocation preference, paired with direct manager contacts and an FAQ accordion.
3. **Optimized for Minimal Content:**
   * Designed with editorial layouts that look intentional, mature, and exclusive even with only a few photos and paragraphs.
4. **Interactive Lead Capture:**
   * Instant validation, interactive submission animations, and toast notifications.
   * Auto-selects horse of interest when a user clicks "Enquire for Prospectus" on any horse card.
5. **Universal Portability:**
   * Clean, dependency-free HTML5, CSS3, and JavaScript.
   * Directly usable as a static website, or easily ported to **WordPress** (Elementor / Gutenberg) or **Webflow**.

---

## 📁 File Structure

```text
ModernHorseSyndicateWebsite/
├── index.html            # Landing / Home Page
├── about.html            # About & Syndicate Mission Page
├── horses.html           # Dedicated Horses & Bloodstock Stable Page
├── contact.html          # Contact & Private Lead Capture Page
├── showcase.html         # Interactive contest presentation deck & device switcher
├── contact-handler.php   # Secure PHP mail router script
├── css/
│   └── style.css         # Complete design system & responsive styling
├── js/
│   └── main.js           # Header scroll effects, mobile drawer, form interactions
├── contest_submission_board.jpg    # Contest Entry 1 (Hero & Devices)
├── contest_submission_board_2.jpg  # Contest Entry 2 (Multi-Page Architecture)
└── README.md             # Documentation & Setup Guide
```

---

## 🖼️ How to Swap Images

All images use standard aspect ratios and are loaded via high-resolution responsive tags. To replace any photo with your own assets:

| Image Placement | File Location | Recommended Dimensions | Recommended Subject |
| :--- | :--- | :--- | :--- |
| **Hero Background** | `index.html` (Line 70) | 1920 × 1080 px (16:9) | Dramatic galloping thoroughbred or misty morning trackwork. |
| **Featured Horse** | `index.html` (Line 185) | 1200 × 800 px (3:2) | Clean side-profile or active gallop of the primary syndicate prospect. |
| **Story / Mission** | `about.html` (Line 108) | 1200 × 900 px (4:3) | Stable visit, trainer & horse interaction, or parade ring. |
| **Stable Roster Cards** | `about.html` (Lines 163, 203, 243) | 800 × 500 px (16:10) | Individual horse headshots or track gallop photos. |

> **Pro Tip:** Place your images into an `images/` folder and change the `src` attribute from the CDN link to `images/your-photo.jpg`.

---

## 🎨 How to Customize Brand Colors

All colors are controlled in one central place at the top of `css/style.css`:

```css
:root {
  --color-obsidian: #0A0D12;       /* Background dark */
  --color-champagne: #C5A880;      /* Luxury gold accent */
  --color-champagne-light: #E0CDB6;/* Light gold hover */
  --color-canvas-light: #F8F9FA;   /* Light section background */
  --font-primary: 'Plus Jakarta Sans', sans-serif;
  --font-editorial: 'Cormorant Garamond', serif;
}
```
Swap `--color-champagne` with your exact hex code to instantly recolor all buttons, badges, borders, and accents across all pages.

---

## 📬 Form Setup & Routing to Your Inbox

The lead form captures **Name, Email, Phone, Interest, Share Size, and Message**. You have three seamless options to route entries straight to your inbox:

### Option 1: Using the Included PHP Script (Self-Hosted / WordPress / cPanel)
1. Open `contact-handler.php`.
2. Change line 7:
   ```php
   $recipient_email = "your-actual-email@domain.com";
   ```
3. In `contact.html`, add `action="contact-handler.php" method="POST"` to `<form id="syndicateEnquiryForm">`.

### Option 2: Using Formspree (Zero-Code, Free, 2-Minute Setup)
1. Go to [Formspree.io](https://formspree.io) and create a free form.
2. In `contact.html`, set the form action to your unique endpoint:
   ```html
   <form id="syndicateEnquiryForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
3. Whenever a visitor submits their details, Formspree instantly delivers an email notification to your inbox.

### Option 3: In WordPress / Webflow
* **WordPress:** Copy the fields into Contact Form 7, WPForms, or Gravity Forms with an email notification directed to the Syndicate Manager.
* **Webflow:** Paste the HTML into Webflow custom code embeds or recreate the elements using the Webflow Form Block with native Webflow form notifications.

---

## 🚀 SEO & Fast-Loading Optimizations

* **Preconnected Google Fonts:** Minimal webfont weight loads with zero render-blocking delay.
* **Semantic HTML5:** Full accessibility labels, `<header>`, `<nav>`, `<section>`, `<aside>`, and `<footer>` semantics.
* **Open Graph & Meta Tags:** Prepared meta descriptions and title tags ready for social sharing and search indexing.
