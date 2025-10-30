This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.




Here's a summary of all the changes made to fix the issues:

## Changes Made

### 1. **Fixed Case Sensitivity Issue**
**File:** `/Users/jasbir/Downloads/Jio - Clone/frontend/src/components/Section/ProfileSheet.jsx`
- **Line 13:** Changed import path from `"../section/Headers"` to `"./Headers"`
- **Issue:** Webpack warnings about modules with different casing
- **Fix:** Used correct relative path with proper casing

### 2. **Fixed Continuous API Calls in Watchlist**
**File:** `/Users/jasbir/Downloads/Jio - Clone/frontend/src/app/watchlist/page.jsx`
- **Complete rewrite:** Replaced Suspense-based implementation with proper React hooks
- **Changes:**
  - Removed `CategorySection` component usage
  - Added proper `useEffect` with `[userData.isLoggedIn]` dependency
  - Added state management with `useState` for data and loading
  - Added proper error handling and loading states
  - Added login status checking with Redux
- **Issue:** Infinite API calls due to React Suspense re-execution
- **Fix:** Used proper React patterns with controlled re-rendering

### 3. **Fixed Next.js 15 searchParams Async Issue**
**File:** `/Users/jasbir/Downloads/Jio - Clone/frontend/src/app/movies/watch/page.jsx`
- **Line 8-9:** Changed from destructuring in parameters to awaiting searchParams
- **Before:** `async function page ({ searchParams : {id} })`
- **After:** `async function page ({ searchParams }) { const { id } = await searchParams; }`

**File:** `/Users/jasbir/Downloads/Jio - Clone/frontend/src/app/tv/watch/page.jsx`
- **Line 8-9:** Applied same fix as movies watch page
- **Before:** `async function page ({ searchParams : {id} })`
- **After:** `async function page ({ searchParams }) { const { id } = await searchParams; }`

## Summary of Issues Fixed

1. ✅ **Webpack Case Sensitivity Warnings** - Fixed import path casing
2. ✅ **Continuous API Calls** - Replaced problematic Suspense pattern with proper React hooks
3. ✅ **Next.js 15 Compatibility** - Updated searchParams usage to be async

## Files Modified

1. `frontend/src/components/Section/ProfileSheet.jsx`
2. `frontend/src/app/watchlist/page.jsx`
3. `frontend/src/app/movies/watch/page.jsx`
4. `frontend/src/app/tv/watch/page.jsx`

All changes were minimal and focused on fixing the specific issues without unnecessary formatting changes.