import AddTask from "./components/AddTask/AddTask"
import NavBar from "./components/NavBar"
import { Row } from 'react-bootstrap';
import Sidebar from "./components/Sidebar/Sidebar";

function App() {

  return (
      <div className='h-100'>
        <NavBar />
        <Row className='mt-5 d-flex h-100'>
        <Sidebar />
        <AddTask />
        </Row>
      </div>
  )
}

export default App
