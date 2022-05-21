import './App.css';
import Products from './components/Products/Products';

function App() {
  return (
    <div >
      <Products></Products>
      <div className="question">
        <div>
          <h4>How Does React works</h4>
          <p>
            Answer:  React takes a declarative approach to application development that makes it simple to reason about the program while simultaneously aiming for efficiency and flexibility. It is a component-based, open-source front-end library that is exclusively responsible for the application's view layer. It creates basic views for each state in the project, and when the data changes, React updates and renders the appropriate component quickly. The declarative approach simplifies debugging and makes the code more predictable.
          </p>
        </div>
        <div>
          <h4>How Does UseState works</h4>
          <p>
         Answer: useState hook helps us to have state variables in function components. Thus the function components are not stateless anymore. Due to this reason, React suggests calling them “function components”. useState is a function that accepts the initial state as an argument and returns a state value and a function to update this value.useState is one of the most common and most used React hooks. useState hook is used to handle the state of our components. In useState, we set the initial state of the state variable and use useState defined function to change that state of that state variable from the initial state to the current state.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
