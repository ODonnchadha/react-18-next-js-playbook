## React 18 with Next.js Playbook by Jim Cooper

- OVERVIEW:
    - In this course, you'll efficiently learn how to build React apps with Next.js - one of the most popular React Frameworks. 
    - This course will teach you the core Next.js and React concepts you need to know to build Next.js applications from scratch.

- INTRODUCTION:
    - React 18. Next.js 12. HTML. CSS. JavaScript. Webpack (Optional.)
    - Two playgrounds are provided. [This one.](https://stackblitz.com/edit/nextjs-playgrounds?file=index.html) [And this one.](https://stackblitz.com/github/jmcooper/nextjs-playground?file=pages%2Findex.js)
    - React primer:
        - JSX syntax: 
            - Mixture of JavaScript and HTML. And a function that returns HTML. 
            - Inside braces, entire JavaScript language is available.
        - Components and props:
            - At its simpliest: A file with a function. 
            - A component can only return a single top-level element. - Use the React fragmnent element. <> and </>.
            - Properties. The first parameter within a componet's function.
        - Handling events:
        - State management:
            - "React" needs to know about side-effects.
            - useState. Current state property and a function to change the current state property.

- GETTING STARTED:
    - Next.js: React at its core. Quite unopinionated.
    - Creating a application Manually:
        ```javascript
            npm install next
            npm install react
            npm install react-dom
        ```
    - Create folder "pages" off of the root.
    - Create file index.js within "pages" and export your function. e.g.:
        ```javascript
            function Index() {
                return <div>Welcome to Jim's Robot Shoppe</div>
            }
            export default Index;
        ```
    - Add the following scripts to package.json:
        ```javascript
            "scripts": {
                "dev": "next dev",
                "build": "next build",
                "start": "next start"
            }
        ```
    - Create a "public" folder at the root and copy over a favicon.
    - And launch the application:
        ```javascript
            npm run dev
        ```
    - Creating a application with `create-next-app`
        ```javascript
            npx create-next-app
        ```
    - _app.js is used to override internal Next.js file, by way of the underscore naming convention. 
        - The internal Next.js file looks exactly like this anyway.
        - Use this file for adding global *.css styles.

- STYLING COMPONENTS AND DISPLAYING IMAGES:
    - CSS within JS:
        ```javascript
            function Index() {
                const css = { 
                    display: 'flex',
                    justifyContent: 'space-around' 
                };
                return (
                <div style={css}>
        ```
    - using CSS files and classes:
        - All CSS classes are global. One file per component?
            - Next.js does not allow for global in just *any* component.
            - Call-to-action styles.
    - CSS modules:
        - *.module.css.
        - NOTE: Class names cannot have hyphens in them as we are accessing them as JavaScript properties. 
            - Use camelCase instead.
    - Images? Interesting.

- PAGE-BASED ROUTING:

- SERVER-SIDE RENDERING:

- DEPLOYING NEXT.JS APPLICATIONS:
