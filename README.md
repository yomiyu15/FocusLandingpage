# FOCUS - Fellowship of Christian University Students

A modern, responsive website for FOCUS (Fellowship of Christian University Students) built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Features

- **Landing Page** - Hero section with FOCUS mission/vision, impact statistics, and call-to-action buttons
- **About Us Page** - Comprehensive information about FOCUS, core values, timeline, and global impact metrics
- **Donation Page** - Two-panel donation system supporting International (USD) and Local/Ethiopia (ETB) donations with frequency options
- **Partner Form** - Professional, multi-section partnership application with organized information flow
- **Navigation with Dropdowns** - Header with dropdown menu for About Us and other navigation items
- **Responsive Design** - Mobile-first design optimized for all devices
- **FOCUS Brand Colors** - Uses official FOCUS colors: Yellow (#FFDD00), Blue (#0052CC), Navy (#001E6B)
- **Clean Code** - Well-organized, type-safe TypeScript components with clear documentation

## Project Structure

```
app/
├── layout.tsx              # Root layout with metadata
├── globals.css             # Global styles and FOCUS brand colors
├── page.tsx                # Landing page
├── about/
│   └── page.tsx            # About Us page with mission, vision, values, timeline
├── partner/
│   └── page.tsx            # Partner application form (fancy multi-section design)
├── donate/
│   └── page.tsx            # Donation form (international & local options)
└── api/
    ├── partners/
    │   └── route.ts        # Partner form API endpoint
    └── donations/
        └── route.ts        # Donation form API endpoint

components/
├── header.tsx              # Navigation with dropdown menu
└── footer.tsx              # Footer with contact info and newsletter signup
```

## FOCUS Brand Colors

All colors derived from the official FOCUS logo for consistent branding:

- **Focus Blue**: #0052CC - Primary buttons, links, form focuses
- **Focus Navy**: #001E6B - Headlines, dark text
- **Focus Yellow**: #FFDD00 - Accents, highlights, call-to-action emphasis
- **Light Background**: #F8FAFC - Section backgrounds
- **White**: #FFFFFF - Cards, primary backgrounds

Color utilities are defined in `/app/globals.css`:
- `.focus-blue`, `.bg-focus-blue`, `.border-focus-blue`
- `.focus-yellow`, `.bg-focus-yellow`, `.border-focus-yellow`
- `.focus-navy`, `.bg-focus-navy`, `.border-focus-navy`
- `.bg-focus-light`

## Getting Started

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
pnpm install
```

### Development

```bash
# Start the development server
pnpm dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
# Create a production build
pnpm build

# Start the production server
pnpm start
```

## Backend Integration

The frontend includes two API endpoints that your backend team can implement:

### 1. Partner Application Endpoint
**POST** `/api/partners`

Request body:
```typescript
{
  firstName: string           // Required
  lastName: string            // Required
  email: string               // Required
  phone?: string
  organizationName?: string
  organizationType?: string   // 'nonprofit' | 'church' | 'business' | 'educational' | 'other'
  website?: string
  description?: string
  partnershipType: string     // Required - 'financial' | 'service' | 'advocacy'
  country: string             // Required
  message?: string
}
```

Response:
```typescript
{
  success: boolean
  message: string
  partnerId?: string
  partnershipType: string
  organizationName?: string
}
```

**Partnership Types**:
- **Financial Support**: Provide funds to support FOCUS programs
- **Service Support**: Contribute skills, expertise, or resources
- **Advocacy & Awareness**: Help spread FOCUS message and mission

### 2. Donation Endpoint
**POST** `/api/donations`

Request body:
```typescript
{
  firstName: string           // Required
  email: string               // Required
  amount: string              // Required (numeric)
  customAmount: string        // Optional if amount is set
  frequency: string           // 'one-time' | 'monthly' | 'quarterly' | 'annually'
  comment?: string
  donorType: string           // 'individual' | 'organization'
  organizationName?: string   // If donorType is 'organization'
  donationType: string        // 'international' | 'local' (ETB)
}
```

Response:
```typescript
{
  success: boolean
  message: string
  donationId?: string
  redirectUrl?: string        // For Chapa payment processing
  amount: number
  currency: string            // 'USD' or 'ETB'
  donationType: string
}
```

**Note**: The form supports two currencies:
- International: USD ($)
- Local/Ethiopia: ETB (Ethiopian Birr)

## Deployment to Render

### Step 1: Prepare for Render

Ensure you have a `.gitignore` file with:
```
node_modules/
.next/
.env.local
```

### Step 2: Connect GitHub Repository

1. Push your code to a GitHub repository
2. Go to [render.com](https://render.com)
3. Click "New +" and select "Web Service"
4. Connect your GitHub repository

### Step 3: Configure Render

- **Environment**: Node
- **Build Command**: `pnpm install && pnpm build`
- **Start Command**: `pnpm start`
- **Instance Type**: Free (or Starter for better performance)

### Step 4: Environment Variables

If using environment variables, add them in the Render dashboard:
- Settings → Environment Variables

### Step 5: Deploy

Click "Deploy" and Render will build and host your website. It will be available at a URL like `https://focus-ministry.onrender.com`

## Frontend Features

### Responsive Navigation
- Desktop: Full navigation bar
- Mobile: Hamburger menu with slide-out navigation

### Form Validation
- Required field validation
- Email format validation
- Amount validation for donations
- Real-time form state management

### User Feedback
- Success messages with confirmation icons
- Loading states on form submission
- Auto-hide success messages after 5 seconds

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators on interactive elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- **Framework**: Next.js 15+ (App Router)
- **React**: 19.2
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Fonts**: Geist (Google Fonts via Next.js)
- **Image Optimization**: Next.js Image component
- **Package Manager**: pnpm (or npm/yarn)

## Performance

- Server-side rendering for better SEO
- Static site generation where possible
- Image optimization
- CSS code splitting
- Optimized bundle size

## Key Notes for Backend Integration

1. **Form Endpoints**: Replace the TODO comments in `/app/api/partners/route.ts` and `/app/api/donations/route.ts` with your backend API calls

2. **Payment Processing**: For donations, integrate your payment processor (Stripe, PayPal, etc.) in the donations endpoint

3. **Error Handling**: Forms include try-catch blocks and error logging for debugging

4. **CORS**: If your backend is on a different domain, configure CORS appropriately

5. **Data Validation**: The frontend provides client-side validation; ensure server-side validation on your backend as well

## Support

For issues or questions about the frontend implementation, refer to:
- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com
- React Documentation: https://react.dev

## License

Focus Ministry Website - 2026
