import { Row , Col , Button , Form} from "react-bootstrap"
import './addTask.css';
import { useDispatch, useSelector } from "react-redux";
import { CgCalendarDates } from 'react-icons/cg'
import { addTask } from "../../featuers/TaskSlice";
import { useRef } from "react";
import { BiArchiveIn } from 'react-icons/bi';
import { AiOutlineEdit , AiOutlineDelete} from 'react-icons/ai';
const AddTask = () => {

  const Tasks = useSelector((state) => state.Tasks.Task);

  const dispatch = useDispatch();

  const inputRef = useRef(null)

  return (
    <section className='tasks w-75 p-5 pt-0 pb-0'>
      <Row className='d-flex justify-content-between pb-4 addTask'>
        <Col className='input-task'>
          <Form.Control type="search" placeholder="Add Task..." ref={inputRef}/>
          <Form.Control type="date"/>

        <CgCalendarDates />
        </Col>
          <Button onClick={() => {
            dispatch(addTask({
              title: inputRef.current.value,
              id: Tasks.length
            }))
            inputRef.current.value = ''
          }}>
            Add Task
          </Button>
      </Row>

      <Row className='tasksList '>
        { 
        Tasks.map(task => {
          return (
            <Col lg={3} className='task rounded' key={task.payload.id}>
              <Col> 
              <span> {task.payload.title} </span>
              </Col>

              <Row className='optiones'>
                <button>
                  <BiArchiveIn />
                </button>

                <button>
                  <AiOutlineEdit />
                </button>

                
                <button>
                  <AiOutlineDelete />
                </button>
                
              </Row>
            </Col>
            )
        })
      }
        
      </Row>
    </section>
  )
}

export default AddTask