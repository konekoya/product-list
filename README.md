This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setup

- Node.JS 16 and up
- NPM 8 and up

To set up this project, clone this repository and install the necessary packages using npm:

```bash
npm install
```

After successfully install all the packages, you can spin up the dev serve with:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## The design

- The original design is from [the Figma community](https://www.figma.com/community/file/1227086905385628859)
- The design was initially intended for phone view, but I've made adjustments to ensure it's compatible with both tablet and desktop views as well.
- This project uses breakpoints at: `375px`, `640px`, `768px` and `1024px` for response design. Breakpoints over 1024px were not implemented to maintain simplicity and prevent excessive white space for each list item.

## The data

- The product list data is retrieved from the [Faker API](https://fakerapi.it), However, the images are taken directly from the design file since Faker API's image data is [no longer serving images](https://placeimg.com/)
