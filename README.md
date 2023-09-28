This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setup

- Node.JS 16 and up
- NPM 8 and up

You need to clone this repo and use npm to install necessary packages:

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
- There's only phone view in the original design. I've tweaked the design a bit so it can be viewed in both tablet and desktop views
- The breakpoints for this app are: `375px`, `640px`, `768px` and `1024px`. I decided not to implement breakpoints over 1024px as the design is fairly simple and might create too much whitespace for each list item

## The data

- The product list data are from [Faker API](https://fakerapi.it), but the images are taken directly from the design file since Faker API's image data is [no longer serving images](https://placeimg.com/)
