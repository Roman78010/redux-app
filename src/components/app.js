import React from "react";
import Counter from './counter';
import MyContext from "../context";


const App = () => {
  return <Counter/>
}

export default App;


// app.js
// import MyContext from "../context"; 

// function App() {
//   return (
//     <div className ="App">
//       <MyContext.Provider value={{
//         name: 'Ivan',
//         age: 22,
//       }}>
//         <Wrapper/>
//       </MyContext.Provider>
//     </div>
//   )
// }



// <App>
//   <Provider value={lang}>
//     <MainPage/>
//     <Consumer>
//       {
//         (lang) => {
//           return (
//             <Blog lang={lang}/>
//           )
//         }
//       }
//     </Consumer>
//   </Provider>
// </App>


// Name.js
// import React from "react";
// import MyContext from "../context";

// Способ для функциональных компонентов.
// const Name = () => {
//   return (
//     <MyContext.Consumer>
//       {
//         (value) => {
//           return (
//             <div className="name">
//               My Name is {value}
//             </div>
//           )
//         }
//       }
//     </MyContext.Consumer>
//   )
// }

// Способ для классовых компонентов.
// import React, {Component} from "react";
// import MyContext from "../context";

// class Name extends Component {
//   render() {
//     return (
//       <div className="name">
//         My Name is {this.context.name}, age {this.context.age}
//       </div>
//     )
//   }
// }

// Name.contextType = MyContext