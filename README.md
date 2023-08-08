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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```json
[
    {   
        "common" : {
            "title":"The TAP Report",
            "org_logo":"/tap-logo.svg",
            "org_name":"/gohnson-pink-logo.png",
            "org_detail": [
                {
                    "detail_hd":"77K",
                    "detail_desc":"# of employees"
                },
                {
                    "detail_hd":"Healthcare",
                    "detail_desc":"Industry"
                },
                {
                    "detail_hd":"New Jersey, US" ,
                    "detail_desc":"HQ"
                },
                {
                    "detail_hd":"85%" ,
                    "detail_desc":"Employee coverage"
                },
                {
                    "detail_hd":"94.94" ,
                    "detail_desc":"Revenue (2022,B$)"
                }
            ],
            "org_strength":["Healthy hierarchical layer ratio of 2 with <strong>high promotion rates at 7%</strong>","Well equipped to scale in an efficient and sustainable manner with <strong>1.36 $M per employee</strong> which is more than double than it s nearest peer", "Sales & Marketing team is overperforming vs peers , with 0.1 employees per $M revenue which is <strong>leaner by 90% to it s nearest peer</strong>"],
            "org_recommend":["<strong>Deep dive into Engineering and Product roles</strong> to understand key driver for having underweight of around 30% than it s nearest peer", "<strong>The attrition in last 3 years is at 13%</strong>, causing the company to loose over 1000 employees to direct competitors specially Medtronics. New retention strategies could significantly help, particularly in operations, sales and engineering departments.", "Demographic profile is unbalanced, showing an over representation of <strong>white employees at 65%, while women make up less than 40% in technical functions</strong>. An active approach need to be taken to enhance diversity across roles including leadership."]
        },
        "org_peers": {
            "peers_detail":[
                {
                    "logo":"/abott-logo.png",
                    "empl_count": "77k",
                    "empl_cover": "66%",
                    "revenue": "43.65"
                },
                {
                    "logo":"/medtronic-logo.png",
                    "empl_count": "65k",
                    "empl_cover": "82%",
                    "revenue": "31.68"
                },
                {
                    "logo":"/siemens-logo.png",
                    "empl_count": "38k",
                    "empl_cover": "92%",
                    "revenue": "22.84"
                }
            ]       
        }       
    }
]

```