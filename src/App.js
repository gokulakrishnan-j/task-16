import './App.css';
import Sidebar from './task/Sidebar';
import Dashboard from './task/Dashboard';
import Component from './task/Component';
import Utilities from './task/Utilities';
import Pages from './task/Pages';
import Charts from './task/Charts';
import Tables from './task/Tables';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'

function App() {
  return <>
  <div id="wrapper">
    <BrowserRouter>
<Sidebar/>
<Routes>
<Route path='dashboard'element={<Dashboard />}/>
<Route path='component'element={<Component />}/>
<Route path='utilities'element={<Utilities />}/>
<Route path='page'element={<Pages />}/>
<Route path='charts'element={<Charts />}/>
<Route path='tables'element={<Tables />}/>
<Route path='*'element={<Navigate to='dashboard' />}/>
</Routes>
</BrowserRouter>
</div>
   
  </>
}

export default App;
