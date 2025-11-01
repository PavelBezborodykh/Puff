# Kaliningrad Real Estate Support

A single-page website template to assist residents of Germany and the EU with real estate documentation and transactions in the Kaliningrad region.

## Overview

This website provides a simple, accessible interface for potential clients to learn about real estate services and request consultations. The site automatically detects the visitor's location and displays content in the appropriate language (German or English).

## Features

- **Automatic language detection**: Uses geolocation to determine if the visitor is from Germany or another EU country, and displays the appropriate language (German for Germany, English for other EU countries)
- **Manual language switching**: Users can override automatic detection and switch between German and English
- **Contact information block**: Prominently displays phone, email, and office hours
- **About us section**: Information about the company and services
- **Services overview**: Clear presentation of three core services
  - Contract preparation
  - Documentation assistance
  - Transaction support
- **Consultation request form**: Simple form with validation for users to request consultations
- **Fully responsive design**: Optimized for desktop, tablet, and mobile devices
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation, and screen reader friendly

## Structure

The project consists of three main files:

- `index.html` - Single-page website structure with semantic HTML
- `styles.css` - Responsive CSS with clean, modern design
- `script.js` - JavaScript for language detection, translation, and form handling

## Technical Details

### Language Detection

The site uses the following logic to determine the display language:

1. Attempts to detect the visitor's country using the ipapi.co service
2. If the country is Germany (DE), displays German
3. If the country is another EU member state, displays English
4. Falls back to browser language preference if geolocation fails
5. Defaults to German if all detection methods fail
6. Users can manually override by clicking language buttons

### Form Handling

The consultation request form includes:
- Client-side validation for all required fields
- Real-time error highlighting
- Success/error messages in the active language
- Accessible error reporting

### Responsive Design

- Mobile-first approach with breakpoints at 768px
- Flexible grid layouts that adapt to screen size
- Touch-friendly interface elements
- Optimized font sizes and spacing for all devices

## Browser Support

The site works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Getting Started

Simply open `index.html` in a web browser. No build process or dependencies required.

For production deployment, upload all three files (`index.html`, `styles.css`, `script.js`) to your web server.

## Future Enhancements

This is a template/prototype. Future development may include:
- Backend integration for form submission
- Additional language options
- Content management system integration
- Enhanced analytics and tracking
- Additional service pages
