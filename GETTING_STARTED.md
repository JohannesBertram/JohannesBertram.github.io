# Getting Started with Your ML Personal Website

Welcome to your new personal website! This guide will help you get started quickly.

## 🚀 Quick Start (5 minutes)

### 1. **Immediate Changes**
Replace these placeholder items first:

**In `index.html`:**
- Line 7: Update the title and meta description
- Line 48-50: Add your real name and tagline
- Line 52-56: Write your actual bio
- Line 62-66: Update your CV link and contact link
- Line 68-75: Update all social media links

**In `styles.css`:**
- Lines 4-12: Customize your color scheme if desired

### 2. **Add Your Images**
**Priority images to add to `assets/images/`:**
- `profile.jpg` - Your professional headshot (400x400px)
- `favicon-32x32.png` & `favicon-16x16.png` - Website icons

**Temporary solution:** Use these placeholder URLs in your HTML:
```html
<img src="https://picsum.photos/400/400?random=1" alt="Your Name">
```

### 3. **Update Your Information**

**Education Section (lines 180-220):**
- Replace with your actual degrees
- Update institutions, dates, and GPAs
- Modify coursework and achievements

**Research Section (lines 250-350):**
- Add your real publications
- Update co-authors and venues
- Include actual citation counts

**Projects Section (lines 380-480):**
- Showcase your best work
- Add real GitHub links
- Update technology stacks

## 📝 Content Customization Priority

### High Priority (Do First):
1. **Personal Info**: Name, bio, contact details
2. **Education**: Degrees and institutions
3. **Research**: Publications and ongoing work
4. **Projects**: Your best 3-4 technical projects

### Medium Priority (Do Next):
1. **Experience**: Work history and internships
2. **Skills**: Technical competencies
3. **Images**: Professional photos and project screenshots
4. **Documents**: CV and paper PDFs

### Low Priority (Polish):
1. **Blog**: Thought leadership content
2. **Colors**: Custom branding and themes
3. **Analytics**: Tracking and optimization
4. **Advanced Features**: Contact forms, etc.

## 🎨 Customization Tips

### Colors
Change the main colors by updating CSS variables:
```css
:root {
    --primary-color: #your-color;
    --accent-color: #your-accent;
}
```

### Content Sections
Each section can be:
- Reordered by moving HTML blocks
- Hidden by adding `style="display: none;"`
- Customized by editing text and links

### Navigation
Update the navigation menu in lines 38-48 of `index.html`

## 📱 Testing Your Changes

1. **Local Testing:**
   ```bash
   # Open index.html in your browser
   # Or serve locally:
   python3 -m http.server 8000
   ```

2. **Mobile Testing:**
   - Use browser dev tools
   - Test on actual mobile devices
   - Check all sections are readable

3. **Link Testing:**
   - Verify all internal links work
   - Test external links open correctly
   - Ensure forms submit properly

## 🚀 Deployment

### GitHub Pages (Recommended):
1. Push all files to your repository
2. Go to Settings > Pages
3. Select "Deploy from branch" > "main"
4. Your site will be live at `https://yourusername.github.io`

### Custom Domain (Optional):
1. Add a `CNAME` file with your domain
2. Configure DNS with your domain provider
3. Enable HTTPS in GitHub Pages settings

## ⚠️ Common Issues

**Images not showing:**
- Check file paths are correct
- Ensure images are in `assets/images/`
- Use placeholder URLs temporarily

**Mobile menu not working:**
- Ensure `script.js` is loaded
- Check browser console for errors

**Sections not aligned:**
- Validate HTML syntax
- Check CSS class names match

**Slow loading:**
- Optimize image file sizes
- Use compressed images (<200KB each)

## 📊 Next Steps

### Week 1: Basic Setup
- [ ] Update all personal information
- [ ] Add profile photo and basic images
- [ ] Upload your CV
- [ ] Test all sections on mobile

### Week 2: Content Polish
- [ ] Add real project screenshots
- [ ] Write compelling project descriptions
- [ ] Add blog posts or remove section
- [ ] Get feedback from colleagues

### Week 3: Advanced Features
- [ ] Set up contact form backend
- [ ] Add Google Analytics
- [ ] Optimize for search engines
- [ ] Create custom domain (optional)

## 🤝 Getting Help

**Common Resources:**
- [HTML/CSS Reference](https://developer.mozilla.org/en-US/docs/Web)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Responsive Design Guide](https://web.dev/responsive-web-design-basics/)

**Troubleshooting:**
- Check browser console for errors
- Validate HTML at [validator.w3.org](https://validator.w3.org/)
- Test on multiple browsers and devices

---

**Remember:** Start simple and iterate. Your website will evolve as you add content and gain experience!

**Good luck with your ML career applications! 🚀**
