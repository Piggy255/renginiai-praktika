import Layout from './Layout'
import Missing from './Missing'
import Login from './Login'
import SubmitEvent from './SubmitEvent'
import UpcomingEvents from './UpcomingEvents'
import EventPage from './EventPage'
import AdminPanel from './AdminPanel'
import { Route, Routes, useNavigate } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<UpcomingEvents />}/> 
        <Route path='event'>
          <Route index element={<SubmitEvent />} />
          <Route path=':id' element={<EventPage />}/>
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
