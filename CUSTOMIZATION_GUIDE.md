# Qoretex Website Customization Guide

## Quick Customizations

### 1. Update Company Contact Information

**File**: `components/Contact.tsx`

Update the contact details:
```typescript
// Around line 70-90
<p className="text-gray-600">info@qoretex.com</p>
<p className="text-gray-600">+233 XX XXX XXXX</p>
<p className="text-gray-600">Accra, Ghana</p>
```

**File**: `components/Footer.tsx`

Update social media links:
```typescript
// Around line 35-50
<a href="https://facebook.com/yourpage">
<a href="https://twitter.com/yourhandle">
<a href="https://linkedin.com/company/yourcompany">
```

### 2. Add Your Logo

1. Add your logo image to `public/` folder (e.g., `public/logo.png`)
2. Update `components/Navbar.tsx`:

```typescript
import Image from 'next/image';

// Replace the text logo
<Link href="/" className="flex items-center">
  <Image src="/logo.png" alt="Qoretex" width={150} height={40} />
</Link>
```

### 3. Update Portfolio Projects

**File**: `components/portfolio/Projects.tsx`

Add or modify projects in the `projects` array:
```typescript
{
  title: 'Your Project Name',
  category: 'Service Category',
  description: 'Project description',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  year: '2024'
}
```

### 4. Customize Colors

**File**: `app/globals.css`

Change the primary color from blue to your brand color:

Replace all instances of:
- `blue-600` → `your-color-600`
- `blue-700` → `your-color-700`
- `blue-100` → `your-color-100`

Or add custom colors in Tailwind:
```css
@layer base {
  :root {
    --primary: your-hex-color;
  }
}
```

### 5. Update SEO Metadata

**File**: `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Your Company Name",
  description: "Your company description",
};
```

**File**: `app/portfolio/page.tsx`

```typescript
export const metadata = {
  title: 'Portfolio - Your Company',
  description: 'Your portfolio description',
};
```

### 6. Add Real Images

Replace placeholder content with real images:

1. Add images to `public/images/` folder
2. Import and use in components:

```typescript
import Image from 'next/image';

<Image 
  src="/images/your-image.jpg" 
  alt="Description" 
  width={800} 
  height={600}
  className="rounded-lg"
/>
```

### 7. Connect Contact Form

The contact form currently has no backend. To make it functional:

**Option 1: Use Formspree (Easy)**

1. Sign up at [Formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update `components/Contact.tsx`:

```typescript
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2: Use API Route (Next.js)**

1. Create `app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Send email using your preferred service
  // (SendGrid, Resend, Nodemailer, etc.)
  
  return NextResponse.json({ success: true });
}
```

2. Update the form to use the API.

### 8. Add Google Analytics

**File**: `app/layout.tsx`

Add in the `<head>` section:

```typescript
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### 9. Update Service Offerings

**File**: `components/Services.tsx`

Modify the `services` array to add/remove services:

```typescript
{
  icon: YourIcon,
  title: 'Service Name',
  description: 'Service description',
  items: [
    'Service item 1',
    'Service item 2',
    // ...
  ],
  color: 'blue' // or 'green', 'red', 'orange', 'purple'
}
```

### 10. Environment Variables

Create a `.env.local` file for sensitive data:

```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_GA_ID=your-ga-id
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_FROM=noreply@yoursite.com
```

Access in code:
```typescript
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
```

## Testing Checklist

- [ ] Update all contact information
- [ ] Replace placeholder text with real content
- [ ] Add company logo
- [ ] Update portfolio projects
- [ ] Customize colors to match brand
- [ ] Connect contact form
- [ ] Add Google Analytics
- [ ] Test responsiveness on mobile
- [ ] Test all navigation links
- [ ] Optimize images
- [ ] Add meta descriptions for SEO
- [ ] Test in different browsers

## Need Help?

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- Vercel Deployment: https://vercel.com/docs
