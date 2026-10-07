# DevOps Portfolio - Separated Files

This portfolio has been separated into **3 independent files** that work together seamlessly.

## 📁 File Structure

```
portfolio/
├── index.html        (HTML Structure)
├── styles.css        (All Styling)
├── script.js         (All JavaScript)
├── image-prof.png    (Your profile photo)
└── resume.pdf        (Optional: Your resume)
```

---

## 🔗 How Files Link Together

### **1. index.html** (Main File)
The HTML file contains:
- All the semantic HTML structure
- Links to the external CSS and JavaScript files
- Content and markup

**Key Links in HTML:**
```html
<!-- CSS Link in <head> -->
<link rel="stylesheet" href="styles.css" />

<!-- JavaScript Link before </body> -->
<script src="script.js"></script>
```

### **2. styles.css** (Styling)
The CSS file contains:
- All color variables (dark & light mode)
- Component styling (navbar, hero, cards, etc.)
- Responsive design with media queries
- Animations and transitions

**Linked in HTML:**
```html
<link rel="stylesheet" href="styles.css" />
```

### **3. script.js** (Functionality)
The JavaScript file contains:
- Dark/Light mode toggle with localStorage
- Scroll reveal animations using Intersection Observer
- Active navigation highlighting
- Contact form handling

**Linked in HTML:**
```html
<script src="script.js"></script>
```

---

## 🚀 How to Use

### **Step 1: Setup Files**
1. Download all 3 files: `index.html`, `styles.css`, `script.js`
2. Place them in the same folder
3. Add your profile photo as `image-prof.png` (same folder)
4. (Optional) Add your resume as `resume.pdf` (same folder)

### **Step 2: File Paths**
All files must be in the **same directory** for the links to work:

```
/your-portfolio-folder/
  ├── index.html
  ├── styles.css
  ├── script.js
  ├── image-prof.png
  └── resume.pdf
```

### **Step 3: Open in Browser**
- Open `index.html` in your browser
- All CSS and JavaScript will load automatically

---

## ✨ Features Included

### **JavaScript Functionality:**
- ✅ **Dark/Light Mode Toggle** - Persists choice in localStorage
- ✅ **Scroll Reveal Animations** - Elements fade in as you scroll
- ✅ **Active Navigation** - Highlights current section in navbar
- ✅ **Contact Form** - Handles form submission with feedback

### **CSS Features:**
- ✅ **Responsive Design** - Works on mobile, tablet, desktop
- ✅ **Dark Mode Support** - Full light mode theme included
- ✅ **Smooth Animations** - Transitions and reveals
- ✅ **Modern Colors** - Gradient accents and proper contrast

---

## 📝 Customization Guide

### **Update Navigation Links**
Edit in `index.html`:
```html
<a href="#contact">Contact</a>
```

### **Change Colors**
Edit in `styles.css` under `:root`:
```css
:root {
  --accent-blue: #22d3ee;
  --accent-purple: #a855f7;
  --accent-green: #22c55e;
}
```

### **Update Contact Info**
Edit in `index.html` (Contact Section):
```html
<a href="mailto:your-email@example.com">your-email@example.com</a>
<a href="https://linkedin.com/in/your-profile">LinkedIn</a>
<a href="https://github.com/your-profile">GitHub</a>
```

### **Update Profile Photo**
1. Save your photo as `image-prof.png` (same folder as HTML)
2. HTML already references it:
```html
<img src="./image-prof.png" alt="Your name" />
```

---

## 🔄 How Features Work

### **Dark/Light Mode**
1. User clicks theme toggle (☀️ / 🌙)
2. JavaScript toggles `light-mode` class on `<body>`
3. CSS variables change colors automatically
4. Preference saved to browser's localStorage
5. Choice persists on page reload

**JavaScript:**
```javascript
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
});
```

### **Scroll Reveal**
1. Elements have `.reveal` class in HTML
2. JavaScript uses Intersection Observer API
3. When element enters viewport, `visible` class is added
4. CSS transitions fade element in smoothly

**CSS:**
```css
.reveal {
  opacity: 0;
  transform: translateY(25px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### **Active Navigation**
1. JavaScript observes all sections
2. When section enters viewport, finds matching nav link
3. Adds `active` class to current section's link
4. CSS underline animates via `::after` pseudo-element

---

## 📋 File Checklist

- [ ] `index.html` - Downloaded and in folder
- [ ] `styles.css` - Downloaded and in folder
- [ ] `script.js` - Downloaded and in folder
- [ ] All 3 files in the **same directory**
- [ ] `image-prof.png` added (your profile photo)
- [ ] `resume.pdf` added (optional)
- [ ] Links updated (email, LinkedIn, GitHub, etc.)
- [ ] Tested in browser (Chrome, Firefox, Safari, Edge)

---

## 🛠 Troubleshooting

### **CSS Not Loading?**
- Check file name: should be `styles.css` (exact spelling)
- Check it's in the same folder as `index.html`
- Open browser DevTools (F12) → Console tab → look for errors

### **JavaScript Not Working?**
- Check file name: should be `script.js` (exact spelling)
- Make sure it's in the same folder
- Check browser console for errors
- Ensure script tag is before `</body>`

### **Images Not Showing?**
- Photo should be named exactly `image-prof.png`
- Place it in the **same folder** as HTML file
- Check the file extension (.png, .jpg, etc.)
- Ensure file permissions allow reading

### **Links Don't Work?**
- Navigation links use anchor tags: `<a href="#section-id">`
- Section must have matching `id="section-id"`
- External links need full URL: `https://example.com`
- Email links use: `mailto:email@example.com`

---

## 🎯 Next Steps

1. **Customize Content** - Update your info in index.html
2. **Add Resume** - Link your PDF resume
3. **Update Projects** - Add your actual projects
4. **Deploy** - Upload to GitHub Pages, Netlify, or Vercel
5. **Domain** - Point custom domain to your portfolio

---

## 📱 Responsive Breakpoints

The portfolio is optimized for:
- 📱 Mobile: 320px and up
- 📱 Tablet: 760px and up  
- 💻 Desktop: 900px and up
- 🖥 Large Screen: 1120px max-width container

---

## 📄 License

This portfolio template is open source and free to use. Customize it for your own portfolio!

---

## ✅ All Set!

Your portfolio is now ready to use with 3 separated, organized files. 🚀

**Questions?** Check the browser console (F12) for any error messages.