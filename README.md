# 🚀 Agrotoken Landing Page

Agrotoken Landing page is a [GatsbyJS](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter) Site

## Start developing

```shell
npm run develop or gatsby develop
```

Your site is now running at http://localhost:8000!

## Deployment

We added some shortcuts to easily deploy this site to our infrastructure in AWS in the ENVs=["testing", "prod"].
Take into account that currently, these envs are using the `.env.production` file.

- `npm run build`: Builds a production optimized site and saves the results in `/public`
- `npm run sync:<ENV>`: Synchronize `/public` with a AWS S3 Bucket.
- `npm run invalidate:<ENV>`: Invalidate the corresponding Cloudfront Distribution.
- `npm run deploy:<ENV>:` Executes `npm run build && npm run sync:<ENV> && npm run invalidate:<ENV>`

NOTE: You will need the `.env` files and AWS access keys to perform these actions.

## Environment Variables

```
GATSBY_CURRENCY_ENDPOINT
GATSBY_SITE_DOMAIN
MAILCHIMP_ENDPOINT
GATSBY_BASE_APP_URL
GATSBY_GET_IN_TOUCH_URL
GATSBY_MERCHANT_URL
GATSBY_DEVELOPER_URL
GATSBY_TEASER_URL
TAG_MANAGER_ID
GOOGLE_ANALYTICS_ID
GATSBY_SIGN_UP_FARMERS_URL
GATSBY_BASES_AND_CONDITIONS_PROMOTIONS
HOTJAR_ID
HOTJAR_SNIPPET_VERSION

```
