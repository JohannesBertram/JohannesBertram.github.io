# Johannes Bertram - Personal Website

A modern, responsive personal website for machine learning research and PhD applications.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **SEO Optimized**: Meta tags, structured data, sitemap, and robots.txt
- **Performance Focused**: Fast loading, lazy loading, and optimized assets
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Interactive Elements**: Smooth scrolling, filtering, animations, and form handling

## 📂 Project Structure

```
├── index.html              # Main homepage
├── styles.css             # Main stylesheet
├── script.js              # JavaScript functionality
├── robots.txt             # Search engine instructions
├── sitemap.xml            # Site structure for SEO
├── assets/
│   ├── images/            # All image assets
│   │   └── README.md      # Image guidelines
│   └── documents/         # PDFs and downloadable files
│       └── README.md      # Document guidelines
└── blog/
    └── index.html         # Blog listing page
```

## 🛠️ Setup Instructions

### 1. Add Your Content

**Personal Information:**
- Replace placeholder text with your actual information
- Update social media links and contact details
- Customize the hero section with your research focus

**Images:**
- Add your professional headshot as `assets/images/profile.jpg`
- Add project screenshots and blog images (see `assets/images/README.md`)
- Create favicons for the website

**Documents:**
- Add your CV as `assets/documents/Johannes_Bertram_CV.pdf`
- Include research papers and other downloadable content

### 2. Customize Content

**Education Section:**
- Update with your actual degrees and institutions
- Modify dates, GPAs, and coursework

**Research & Publications:**
- Replace with your actual papers and research
- Update publication venues and co-authors
- Add real citation counts and download links

**Projects:**
- Showcase your best ML projects
- Include GitHub links and live demos
- Update technology stacks and achievements

**Experience:**
- Add your work experience and internships
- Include specific achievements and technologies used

### 3. Technical Customization

**Colors & Branding:**
- Modify CSS variables in `styles.css` to match your preferred color scheme
- Update fonts and spacing as needed

**Analytics:**
- Add Google Analytics tracking code
- Configure event tracking for user interactions

**Contact Form:**
- Set up form backend (Netlify Forms, Formspree, or custom solution)
- Update form submission handling in `script.js`

### 4. Deployment

**GitHub Pages:**
1. Push all files to your `username.github.io` repository
2. Enable GitHub Pages in repository settings
3. Your site will be available at `https://username.github.io`

**Custom Domain (Optional):**
1. Add `CNAME` file with your domain name
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## 🎨 Customization Guide

### Color Scheme
The website uses CSS custom properties for easy theming:
```css
:root {
    --primary-color: #2563eb;    /* Main brand color */
    --secondary-color: #64748b;  /* Secondary elements */
    --accent-color: #0ea5e9;     /* Highlights and accents */
}
```

### Typography
Primary font: Inter (Google Fonts)
Monospace font: JetBrains Mono (for code)

### Sections
Each section can be easily modified:
- **Hero**: Personal branding and introduction
- **About**: Research interests and background
- **Education**: Academic history
- **Research**: Publications and ongoing work
- **Projects**: Technical portfolio
- **Skills**: Technical competencies
- **Experience**: Professional background
- **Blog**: Thought leadership content
- **Contact**: Contact information and form

## 📱 Mobile Responsiveness

The website is fully responsive with:
- Mobile-first design approach
- Collapsible navigation menu
- Optimized touch targets
- Readable typography on all screen sizes
- Proper image scaling and lazy loading

## ⚡ Performance Features

- **Lazy Loading**: Images load as they come into view
- **Compressed Assets**: Optimized CSS and JavaScript
- **Caching Headers**: Proper browser caching
- **Fast Fonts**: Optimized Google Fonts loading
- **Minimal Dependencies**: Lightweight external libraries

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta descriptions and keywords
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Structured Data**: JSON-LD markup for search engines
- **Sitemap**: XML sitemap for better indexing
- **Robots.txt**: Search engine crawling instructions

## 🎯 Best Practices

**Content:**
- Keep content updated and relevant
- Use action-oriented language
- Quantify achievements where possible
- Include keywords relevant to your field

**Images:**
- Use high-quality, professional images
- Optimize file sizes for web
- Include descriptive alt text
- Maintain consistent visual style

**Performance:**
- Test loading speed regularly
- Optimize images before uploading
- Monitor Core Web Vitals
- Use browser developer tools for debugging

## 🔧 Development

**Local Development:**
```bash
# Serve locally (Python)
python -m http.server 8000

# Or with Node.js
npx http-server

# Or with PHP
php -S localhost:8000
```

**Testing:**
- Test on multiple browsers and devices
- Validate HTML and CSS
- Check accessibility with screen readers
- Test form submissions and links

## 📊 Analytics & Monitoring

Consider adding:
- Google Analytics 4
- Google Search Console
- Hotjar for user behavior insights
- Performance monitoring tools

## 🤝 Contributing

This is a personal website template. Feel free to:
- Fork and adapt for your own use
- Submit bug reports or suggestions
- Share improvements or additional features

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Created by:** Johannes Bertram  
**Last Updated:** September 2024  
**Purpose:** Academic and professional portfolio for ML research positions
