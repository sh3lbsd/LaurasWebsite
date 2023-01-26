This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3333) with your browser to see the result.

# Strapi
### Creating Content Types
1. Go to Plugins > Content-Type Builder using the left side bar.
2. Create new single type.
3. Add fields corresponding to the content that is on the page
4. Save the Content Type you just created

### Editing Content Information
5. Go to Content Manager using the left side bar.
6. Click the name of the Content Type you just created
7. Add information from lauras website to that content type. 
8. Save your changes and Publish

### Exposing new content with API
9. Go to Settings > Roles > Public
10. Find the content in the Permissions section and Click the drop down
11. Select the `find` checkbox. Take note of the route url in the section on the right next to `GET` 

# Displaying content from strapi in next.js application
