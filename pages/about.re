module AboutComponent = {
  let component = ReasonReact.statelessComponent("About");
  let make = _children => {
    ...component,
    render: _self =>
      <div>
        <Header />
        <p> (ReasonReact.stringToElement("ABOUT PAGE is here!")) </p>
        <Counter />
      </div>,
  };
};

let default = () => <AboutComponent />;