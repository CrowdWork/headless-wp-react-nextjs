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
- Test with an `npm run dev`

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
- So, we wrap the **`<a href>`** in the **Link component**
- We use **Fragment** to avoid unnecessary extra markup.
  > The function only needs **a wrapping parent element**, _but a div would work just fine._

> _Still running your project via `npm run dev` : click “Posts” to see posts page_

> _**NB:** The URL is updated and the content is dynamically updated. This is a fairly simple use of routing._ > **To avoid having to call the Navigation component on every new page you make**, look into the **React Router Docs** to see how you might be able to extend its functionality.

### 5.Let's get our Data

_We need to get our data from our WordPress install we set up at the top._

- Use **Axios** package **to make API requests** inside the posts.js file we created.

  > _**React docs recommend using fetch**, but there are some compatibility issues and some extra steps involved in those requests. Axios has fallbacks for older browsers and takes the guesswork out of making an API request._

- Import axios and react
- Build a **class that extends React.component** so that we can **set our initial props**(our API data) and **render our component**.
- Make an **async request**, and **resolve the promise via axios** and then **assign that data value to a prop** that we can access inside our render function.
- **Access that data inside our render function** as this.props.posts. And use **JSX** to output each post title into a list.

> _For now, we’ll just output a simple list of rendered titles._

### 6.Add links to our posts

- Our main update, like in Navigation.js, will be to **import our Link component and wrap each of our post titles**.
  > _Yes, we have links !!! But, they won't go anywhere !_

😥 In fact, if we try, we get the **default 404 error from express**. 😥

### 7.Dynamic routing

> **Next.js handles direct routing**, but dynamic routing is a little bit more complicated.

We need a **custom express server** to serve the routes and handle all of that.

> _Why? Because, we don’t want to have a component for each of those posts._

_**NB :**_ We use **next-routes alongside a custon server** (_to make things a bit easier_) but we could manage this with **React Router**.

- So, let's install **express next-routes**
- Create new files at the root of the project : **routes.js** & **sever.js**
- In routes.js :
  - Import `next-routes` and **add our routes** _(index, posts page, dynamic route for single post)_
- In server.js :
  - Import **express** _(server environment)_ and next _important)_
  - Import new **route file** _(middleware)_
  - Set up app, set environment, and handle requests—both boilerplate
  - Add handler which utilizes routes middleware imported above
  - Everything starting at `app.prepare()` will be also pretty boilerplate :
    - Set up the **server** with `const server = express()`;
    - Utilize our **handler** with `server.use( handler )`;
    - Add the **default route** _important for the server to work_
    - Get current **port** _(not required)_, so we don’t have to set a port in our package.json file
    - Add our **listener to output errors** so we still get errors in our logs
    - Finally, a little message when we start the server to let you know where we should be opening the browser to

> This is a pretty light server setup. Check out the [express docs](http://expressjs.com/fr/starter/basic-routing.html) to have furthur more infos.

- Update de & start scripts in **package.json**
  - run directly our server
  - for start cmd, run in prod mode

### 8.Single Post Template

- Inside Pages drectory : add `single.js`

  > _This will just need to match whatever we named our route in the routes.js file `.add( 'single', '/posts/:slug' ).add( 'single', '/posts/:slug' )`_

- We need to get our current route slug and display the data from a new API request :

  - Make an additional API request here, just like in /posts page, but get only the post data we need.

  > **\_NB :** Typically on a React-based website, we do more to store and check for already-existing data..\_

  > From our existing API we know we can get a post, “Hello World” for example, using the slug from our URL: https://wordpress.test/wp-json/wp/v2/posts?slug=hello-world.

  - **Make this request** for our single post
  - Simply **save that to props using the same getInitialProps** function.
    > Inside that function, we have access to **context** which we will use to **get the current queried slug** to make our API request.

- In the render function, let's output our elements directly or using [dangerouslySetInnerHTML](https://zhenyong.github.io/react/tips/dangerously-set-inner-html.html) function :
  > Output the rendered content from our data.

### 9.Metadata

> The one thing missing that will make a website is **metadata in our `<head>`**.

Next.js has an option for this [<Head>](https://github.com/zeit/next.js/#populating-head).

_**NB. :** This same work can be replicated in posts.js and single.js respectively._

- `Import Head from Next.js` => Gives access to a new component in which we can add meta information.
- Add all necessaries infos inside.

> Using `next/head` this will now **render both client- and server-side**, so our status as a **fully-functioning SSR** is intact.

_**NB. :** We can go one step further and add support for Twitter or Facebook/Open Graph meta also._
