/* <div id="" parent>
    <div id="child">
        <h1></h1>
        <h2></h1>
        
    </div>
</div> */ /*how to create same thing in react lets do it*/ const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "Hello world from React from h1"),
        React.createElement("h2", {}, "Hello world from React from h2")
    ]),
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "Hello world from React from h1"),
        React.createElement("h2", {}, "Hello world from React from h2")
    ]),
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "Hello world from React from h1"),
        React.createElement("h2", {}, "Hello world from React from h2")
    ])
]);
/*this above code is too much ugly to handle this we use JSX */ const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=ReactJS.6bd02f5a.js.map
