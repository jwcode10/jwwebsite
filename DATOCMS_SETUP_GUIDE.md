# DatoCMS Integration Guide - Step by Step

This guide will walk you through connecting your DatoCMS project to your Next.js site.

## Quick Start Summary

**What you need to do:**
1. ✅ Get your DatoCMS API token (from DatoCMS dashboard)
2. ✅ Create `.env.local` file with `DATOCMS_API_TOKEN=your_token`
3. ✅ Set up the Blog model in DatoCMS with required fields
4. ✅ Create some blog posts in DatoCMS
5. ✅ Test by visiting `/blog` on your site

**Time required:** ~15-20 minutes

---

## Prerequisites
- A DatoCMS account (sign up at https://www.datocms.com if you don't have one)
- Your Next.js project (already set up ✅)

---

## Step 1: Get Your DatoCMS API Token

1. **Log in to DatoCMS**
   - Go to https://www.datocms.com and sign in
   - If you don't have an account, create one (free tier available)

2. **Create or Select a Project**
   - Create a new project or select an existing one
   - Give it a name (e.g., "JourneyWell Blog")

3. **Get Your API Token**
   - In your DatoCMS project, go to **Settings** → **API tokens**
   - You'll see different types of tokens:
     - **Read-only token** (for production) - Use this for your site
     - **Full-access token** (for development) - Use this if you need to write data
   - Click **"Generate new token"** or copy an existing one
   - **Copy the token** - you'll need it in the next step

---

## Step 2: Set Up Environment Variables

1. **Create `.env.local` file** in your project root (if it doesn't exist)
   - This file is already in `.gitignore`, so your tokens won't be committed
   - **Location**: Create it in the root directory (same level as `package.json`)

2. **Add your API token**:
   ```env
   DATOCMS_API_TOKEN=your_actual_token_here
   ```

   Replace `your_actual_token_here` with the token you copied from Step 1.

3. **Example `.env.local` file**:
   ```env
   DATOCMS_API_TOKEN=abc123def456ghi789jkl012mno345pqr678stu901vwx234yz
   ```

4. **Important**: After creating/updating `.env.local`, you **must restart your development server** for the changes to take effect.

---

## Step 3: Set Up Your Content Models in DatoCMS

Your site expects a **Blog** model. Here's how to create it:

### Create the Blog Model:

1. In DatoCMS, go to **Models** → **Add new model**
2. Name it: `Blog`
3. Add the following fields:

   | Field Name | Field Type | Required | Notes |
   |------------|------------|----------|-------|
   | `title` | Single-line string | ✅ Yes | Blog post title |
   | `seoSlug` | Slug | ✅ Yes | URL-friendly slug (auto-generate from title) |
   | `publishDate` | Date | ✅ Yes | When the post was published |
   | `summary` | Text | ❌ No | Short excerpt/summary |
   | `body` | Markdown or Structured text | ✅ Yes | Main content |
   | `featuredImage` | Image | ❌ No | Hero image for the post |
   | `author` | Single-line string | ❌ No | Author name |
   | `categories` | Single-line string | ❌ No | Comma-separated categories |
   | `_status` | Meta field | Auto | Publication status (draft/published) |

4. **Configure the Slug field**:
   - Set it to auto-generate from the `title` field
   - This ensures SEO-friendly URLs

5. **Save the model**

---

## Step 4: Create Your First Blog Post

1. Go to **Content** → **Blog** in DatoCMS
2. Click **"Add new record"**
3. Fill in:
   - **Title**: "Welcome to JourneyWell Blog"
   - **SEO Slug**: Will auto-generate (e.g., "welcome-to-journeywell-blog")
   - **Publish Date**: Today's date
   - **Summary**: "A brief introduction to our blog..."
   - **Body**: Write your blog post content (supports Markdown)
   - **Author**: Your name
   - **Categories**: "Announcements, Company"
   - **Featured Image**: Upload an image (optional)
4. Click **"Save"** and then **"Publish"**

---

## Step 5: Test the Connection

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Visit your blog page**:
   - Go to `http://localhost:3000/blog`
   - You should see your blog post(s) displayed

3. **Check the console**:
   - If you see warnings about `DATOCMS_API_TOKEN`, double-check your `.env.local` file
   - Make sure you've restarted your dev server after adding the token

---

## Step 6: Set Up Webhook for Immediate Updates (REQUIRED for Live Updates)

**⚠️ IMPORTANT**: Without this webhook, blog posts will not appear immediately when you publish or edit them. The site is now configured for on-demand revalidation, so you MUST set up this webhook.

This allows your site to automatically update immediately when you publish, edit, or update content in DatoCMS.

1. **Get your revalidation secret**:
   - Create a strong random string (you can use: `openssl rand -base64 32`)
   - Add it to `.env.local`:
     ```env
     DATOCMS_API_TOKEN=your_token_here
     REVALIDATE_SECRET=your_random_secret_here
     ```
   - **Note**: The environment variable name is `REVALIDATE_SECRET` (not `REVALIDATION_SECRET`)
   - **Restart your dev server** after adding this

2. **Set up the webhook in DatoCMS**:
   - Go to **Settings** → **Webhooks** in your DatoCMS project
   - Click **"Add webhook"**
   - **Name**: "Next.js Revalidation"
   - **URL**: 
     - **For production**: `https://yourdomain.com/api/revalidate?secret=your_random_secret_here`
     - **For local testing**: Use a service like [ngrok](https://ngrok.com) to expose your localhost, then use: `https://your-ngrok-url.ngrok.io/api/revalidate?secret=your_random_secret_here`
   - **Events**: Select ALL of these events for immediate updates:
     - ✅ **Item create** (for new blog posts)
     - ✅ **Item update** (for editing existing posts)
     - ✅ **Item publish** (when publishing)
     - ✅ **Item unpublish** (when unpublishing)
   - **HTTP method**: POST
   - **HTTP headers**: Add a header:
     - **Name**: `x-webhook-secret`
     - **Value**: `your_random_secret_here` (same as in your .env.local)
   - **Save the webhook**

3. **How it works**:
   - When you create, update, publish, or unpublish a blog post in DatoCMS, the webhook automatically calls your `/api/revalidate` endpoint
   - The endpoint immediately clears the cache for:
     - The blog index page (`/blog`)
     - The specific blog post page (`/blog/[slug]`)
   - Your changes appear live immediately without waiting for cache expiration

4. **Test the webhook**:
   - Create or edit a blog post in DatoCMS
   - Publish it
   - Check your site - the changes should appear immediately
   - Check your server logs for revalidation messages

---

## Step 7: Deploy to Production

When deploying (Vercel, Netlify, etc.):

1. **Add environment variables** in your hosting platform:
   - `DATOCMS_API_TOKEN`: Your read-only API token
   - `REVALIDATE_SECRET`: Your webhook secret (if using webhooks)

2. **Update webhook URL** in DatoCMS to point to your production domain

---

## Troubleshooting

### Issue: "DATOCMS_API_TOKEN is not set"
- ✅ Make sure `.env.local` exists in the project root
- ✅ Make sure the token is correct (no extra spaces)
- ✅ Restart your dev server after adding the token

### Issue: "DatoCMS request failed: 401"
- ✅ Your API token might be incorrect
- ✅ Make sure you're using a valid token from DatoCMS
- ✅ Check that the token has the right permissions (read-only for production)

### Issue: "DatoCMS returned errors"
- ✅ Check your GraphQL query matches your DatoCMS model structure
- ✅ Make sure all required fields are filled in your content
- ✅ Verify the model name matches (should be `Blog` with capital B)

### Issue: Blog posts not showing
- ✅ Make sure posts are **published** (not just saved as draft)
- ✅ Check the `_status` field is set to "published"
- ✅ Verify your GraphQL query is correct

### Issue: Images not loading
- ✅ The `next.config.js` already has DatoCMS image domains configured
- ✅ Make sure images are uploaded in DatoCMS
- ✅ Check that the image field name matches (`featuredImage`)

---

## Next Steps

- **Customize your content models**: Add more fields as needed
- **Create more content types**: Pages, Authors, Categories, etc.
- **Set up preview mode**: For draft content preview (see DatoCMS docs)
- **Add more queries**: Fetch specific posts, filter by category, etc.

---

## Useful Resources

- [DatoCMS Documentation](https://www.datocms.com/docs)
- [DatoCMS GraphQL API](https://www.datocms.com/docs/content-delivery-api)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)

---

## Your Current Setup

✅ **Already configured:**
- DatoCMS fetch utility (`src/lib/datocms.ts`)
- Blog pages (`src/app/blog/page.tsx` and `src/app/blog/[slug]/page.tsx`)
- Next.js image configuration for DatoCMS
- Revalidation API route (`src/app/api/revalidate/route.ts`)

🔧 **What you need to do:**
1. Get your DatoCMS API token
2. Create `.env.local` with the token
3. Set up the Blog model in DatoCMS
4. Create some content
5. Test the connection

---

**Need help?** Check the DatoCMS documentation or review the error messages in your browser console and terminal.

