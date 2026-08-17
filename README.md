# Micah Portfolio Website

This is the source code for Micah's personal portfolio website, showcasing UX/UI design work and projects.

## File Structure

```
/
├── assets/                # Contains all images, fonts, and other static files
│   ├── css/               # CSS stylesheets
│   ├── images/            # Image files
│   └── js/                # JavaScript files
├── index.html             # Main website page
├── contact.php            # PHP script for contact form handling
├── sitemap.xml            # XML sitemap for search engines
└── favicon.ico            # Website favicon
```

## Setup & Upload Instructions

### Prerequisites
- Web hosting with PHP support (for contact form functionality)
- FTP client (FileZilla, Cyberduck, etc.) or hosting control panel file manager

### Uploading Steps

1. **Prepare Your Files**
   - Ensure all file paths are correct (relative paths are recommended)
   - Update the email address in `contact.php` (line 34) with your actual email

2. **Upload to Web Server**
   - Connect to your web hosting using FTP credentials provided by your host
   - Upload all files to the root directory of your hosting (often called `public_html`, `www`, or `htdocs`)
   - Maintain the same folder structure as in the source code

3. **Test the Website**
   - Visit your domain to make sure the website loads correctly
   - Test the contact form by submitting a test message
   - Check that all links work properly
   - Verify that images and other assets load correctly

4. **Common Issues**
   - If the contact form doesn't work, check if your hosting supports PHP
   - If images don't appear, check the file paths and case sensitivity
   - If the site loads without styling, verify CSS file paths

### PHP Mail Configuration

Some hosting providers require specific mail configuration. If the contact form isn't sending emails, you may need to use an SMTP library like PHPMailer. Contact your hosting provider for specific mail server settings.

### SEO & Analytics

- The website includes basic SEO optimization with meta tags and schema.org structured data
- To add Google Analytics, insert your tracking code before the closing `</head>` tag in `index.html`

## Maintenance

To make future updates to your website:
1. Edit the files locally
2. Test changes on your local environment if possible
3. Upload the modified files to replace the existing ones on the server

Remember to keep a backup of your website files before making significant changes. 