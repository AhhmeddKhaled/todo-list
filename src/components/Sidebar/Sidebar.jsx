import './sidebar.css';
import { ListGroup } from 'react-bootstrap';
import { GoTasklist } from 'react-icons/go';
import { GrTask } from 'react-icons/gr';
import { FaTasks } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';
import { ImProfile } from 'react-icons/im'
const Sidebar = () => {
    return (
        <aside className='w-25 h-100'>
            <ListGroup>
                <ListGroup.Item>
                    <span>
                        <FaTasks />
                    </span>
                    <span>
                        All Tasks
                    </span>
                </ListGroup.Item>

                <ListGroup.Item>
                    <span>
                        <GrTask />
                    </span>
                    <span>
                        Current Tasks
                    </span>
                </ListGroup.Item>

                <ListGroup.Item>
                    <span>
                        <GoTasklist />
                    </span>
                    <span>
                        Completed Tasks
                    </span>
                </ListGroup.Item>
                <ListGroup.Item>
                    <span>
                        <SlCalender />
                    </span>
                    <span>
                        Calender
                    </span>
                </ListGroup.Item>
                <ListGroup.Item>
                    <span>
                        <ImProfile />
                    </span>
                    <span>
                        Porofile
                    </span>
                </ListGroup.Item>
            </ListGroup>
        </aside>
    )
}

export default Sidebar