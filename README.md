# headless-wp-react-nextjs

> Headless **WordPress** with **React** and **Next.js** Frontend development

We build a super-simple decoupled headless website using WordPress and React.
We use WordPress as decoupled backend CMS and React alongside Next.js to handle the frontend app, SSR, performance, and routing.

## **Requirements** we need :

- 1.Must be **server-side rendered** so that our website is **relevant to Google**
- 2.Needs to be able to **route pages** the same way we would on any other website
- 3.Needs to be efficient and **pass Google Lighthouse testing**

## Steps :

### 1.First things

- Set up a wordpress install either online or locallly
- Create a new Folder : install everything we need in that foder

### 2.Server

- Edit package.json to run a server and **easily start our project and build** our necessary files

### 3.Folder Structure

Anything inside a **pages directory** will be treated as a **page**. Anything **inside components** will be treated as a **component** (a non-rendered element)

> The **styles folder** could be used to **add and compile any new CSS, SCSS, Sass, or LESS files** on the fly.

- Our entry point : pages/index.js
- Test with an `bash npm run dev`

```bash
├── app
│   ├── components
│   │   ├── Navigation.js
│   │   ├── ...
│   ├── node_modules
│   ├── pages
│   │   ├── index.js
│   │   ├── posts.js
│   │   ├── ...
│   ├── index.html
│   ├── styles
│   │   ├── **/*.css
│   │   ├── **/*.scss
├── .gitignoreREADME.md
├── package-lock.json
├── package.json
└── README.md
```

### 4.Routing

- Add components/**Navigation.js**
  > Inside this file, we'll **setup our routes**.
- Add pages/**posts.js**
  > Our page of Posts
- We import **Link** from next/link which is already baked into Next.js.
  > It operates in much the **same way** that **Link from react-router-dom** would.
- So, we wrap the **`bash <a href>`** in the **Link component**
- We use **Fragment** to avoid unnecessary extra markup.
  > The function only needs **a wrapping parent element**, _but a div would work just fine._

> _Still running your project via `bash npm run dev` : click “Posts” to see posts page_

> _**NB:** The URL is updated and the content is dynamically updated. This is a fairly simple use of routing._
> **To avoid having to call the Navigation component on every new page you make**, look into the **React Router Docs** to see how you might be able to extend its functionality.

### 5.Let's get our Data
