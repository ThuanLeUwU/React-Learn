//import logo from './logo.svg';
import './App.css';
// import Thuan from './components/Welcome';
// import Stock from './components/Stock';

//import Warning from './components/Warning';
//  import Form from './components/Form';
//import 
// const name = "Onii-chan";
// const user={id:"1",Name:"Senpai"};
// const element = (<h1>Ohayo~~, {name}</h1>)
// const element2 =(<h1>Konichiwa, {user.id}  {user.Name}</h1>)

// import Layout from './components/Layout';
// import Contact from './components/Contact';
// import NoPage from './components/NoPage';
// import Home from './components/Home';
//import ContainerComponent from './components/ContainerComponent';
// import { BrowserRouter,Route, Switch } from 'react-router-dom';
// import Profile from './components/Profile';

// import Blogs from './components/Blogs';
// import MyForm from './components/MyForm';
//  import MyUncontrolledForm from './components/MyUncontrolledForm';
// const car = [
//     {id: 1, brand: 'Ford'},
//     {id: 2, brand: 'BMW'}
// ];
// const names= car.map((car)=>{return <li key={car.id}>{car.brand}</li>});
import { Provider } from 'react-redux';
import { ConfigureStore } from './myRedux/ConfigureStore';
import Counter from './myRedux/Counter';
//import ContactPage from './reduxForm/ContactPage';
 //import { ConfigureStore2 } from './reduxForm/ConfigureStore2';
 //import { configureStore3 } from './Vidu1/ConfigureStore3';
 //import TextComponent from './Vidu1/TextComponent';
//import { configureStore4 } from './reduxThunk/ConfigureStore4';
//import TestReduxThunk from './reduxThunk/TestReduxThunk';


const store=ConfigureStore();
function App() {
  return (
    // <div>
      // <ul>
        /* <ContainerComponent/> */
        /* {names} */
      // </ul>

    //  <BrowserRouter>
    //   <div>
    //     <Switch>
    //     <Route exact path="/" component={Layout}/>
    //     <Route path="/Home" component={Home}/>
    //     <Route path="/Blogs" component={Blogs}/>
    //     <Route path="/Contact" component={Contact}/>
    //     <Route path="/Profile/:isLogin/:name" component={Profile} />
    //     <Route path="*" component={NoPage}/>
    //     </Switch>
    //   </div>
    // //  </BrowserRouter>
    // <div>
    // <MyUncontrolledForm/>
    //  </div>
    <Provider store={store}>
      <Counter/>
    </Provider> 
  );
}

export default App;
