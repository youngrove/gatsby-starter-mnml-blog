<p align="center">
    <a>
        <img alt='mnml_blog' src='./static/logo/logo_sm.png' width=100 height=100>
    </a>
</p>
<h1 align='center'>
 Gatsby Mnml Blog Starter
</h1>
<div align="center">
<a href="https://www.styled-components.com/"><img src="https://badgen.net/badge/Built%20With/styled%20components/db7093" alt="Built with Styled Components" />
</a>
<a href='https://www.typescriptlang.org/'>
<img src="https://badgen.net/badge/Built With/TypeScript/blue" alt="Powered by TypeScript" />
</a>
<a href="https://github.com/youngban/gatsby-starter-mnml-blog/blob/main/LICENSE">
<img src="https://img.shields.io/badge/license-0BSD-blue.svg" alt="gatsby-starter-mnml-blog
Public is released under the 0BSD license." />
</a>
</div>
<br />

A Starter template to build The Most Minimal Blog with TypeScript & Styled Components.

## 🏄 Getting Started

I tend to pursue minimalism in my daily life. It is one of my philosophy of life to minimize the number of cases and focus on essential parts.

While making this starter, I tried to minimize the design and functionality.
For example, Instead of using the About page, I wanted to focus more on managing my Github profile. therefore I have placed a button in the navigation that takes to Github profile.
Also, rather than manually dividing categories, it is designed to automatically categorize items containing a lot of tags.

In addition, I considered component reusability and tried to keep the logic concise.

## 🐾 Features

- Typography driven design
- Gatsby v4 Supports
- Utterances Supports
- Tags Supports
- Pagination
- SEO
- MDX

## 📁 Folder Structure

```
.
├── content
│   ├── assets # Images or some stuff for Posting
│   └── blog # Postings (Each Folder name will be url path)
├── src
│   ├── components
│   ├── layouts
│   ├── hooks # Custom hooks for useStaticQuery (page query in templates)
│   ├── images
│   ├── pages # default 404 pages (it will updates soon)
│   ├── styles
│   │   └── media.ts # media query variables(mobile, tablet, laptop) pass to GlobalStyle
│   ├── templates
│   ├── types
│   └── utils
├── static
├── .eslintrc.json
├── .gitignore
├── gatsby-config.js
├── gatsby-node.js # config for pagination & tags
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

## ⚙️ Configuration

Edit the file at `src/config.ts` to change the configuration of tags and pagination.

```
export const POST_PER_PAGE = 1;
export const TAG_SMALL = 1;
export const TAG_MEDIUM = 3;
export const TAG_LARGE = 5;
```

If you change `POST_PER_PAGE` it will changes perPage in pagination.

The tag sizes is classified into three categories, and each standard can be set.
