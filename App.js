const root = ReactDOM.createRoot(document.getElementById('root'));

const heading = React.createElement('h1', { id: "heading" }, 'Hello World');
//the above is equal to this <h1 id="heading">Hello World</h1>

root.render(heading);
