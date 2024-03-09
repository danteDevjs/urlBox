    import './App.css'  
    import '@fontsource/source-sans-pro';
    import { Box } from './pages/box';
    import { Routes, Route } from 'react-router-dom';
    import Login from './pages/log';
    import { Pages } from './layouts/pages';
import { Users } from './layouts/users';

    function App() {
      return (
        <>  
          <Routes>
            <Route path='/home' element={<Box/>}>
              <Route path='pages' element={<Pages/>}/>
              <Route path='inicio' element={<Users/>}/>
            </Route>
            <Route path='/' element={<Login/>}/>
          </Routes>
        </>
      )
    }

    export default App



