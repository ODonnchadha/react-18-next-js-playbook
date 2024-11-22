// Used to override internal Next.js file, by way of the underscore naming convention. 
// The internal Next.js file looks exactly like this anyway.
// Use this file for adding global *.css styles.
function App({ Component, props}) {
    return <Component {...props} />
}
export default App;