import React, { useEffect,useState } from 'react';
import Container from './style/TodoList.module.js';

const TodoList = () => {
  const [tabData, setTabData1] = useState('');
  const [todoItems, setTodoItems] = useState([]);
  useEffect(() => {
    const storedTodoItems = localStorage.getItem('todoItems');
    if (storedTodoItems){
      setTodoItems(JSON.parse(storedTodoItems));
    }
  },[]);
  const handleChange = event => {
    setTabData1(event.target.value);
  };
  const dataHandler = e => {
    e.preventDefault();
      setTodoItems([...todoItems, tabData]);
      setTabData1('');
    localStorage.setItem('todoItems', JSON.stringify([...todoItems, tabData]));
  };
  const [value, setValue] = useState(0);
//   const [index, setindex] = useState(0);

  const plusHandler = () => {

    // alert(index);
    setValue(prevValue => prevValue + 1);
  };

  const minuHandler = () => {
    if(value >1){
        setValue(prevValue => prevValue - 1);
    }
  };
  return (
    <>
      <Container>
        <div>
          <h2>Todo List</h2>
        </div>
        <div>
          <div className='addData'>
            <input type='text' className='form-control' name='tabData' value={tabData} onChange={handleChange} />
            <button className='btn btn-success' onClick={dataHandler}>
              Add
            </button>
          </div>
          <div className='tableSection'>
            <table className='todoTable table border'>
              <thead>
                <tr>
                  <th>SNO</th>
                  <th>Name</th>
                  <th>Operations</th>
                </tr>
              </thead>
              <tbody>
                {todoItems.map((item, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{item}</td>
                    <td>
                      <button className='btn btn-success m-'>Add</button>
                      <button className='btn btn-info m-'>Edit</button>
                      <button className='btn btn-danger m-'>Delete</button>
                    </td>
                    <td><button className='btn btn-info' onClick={minuHandler}>-</button>{value}<button className='btn btn-warning'  onClick={plusHandler}>+</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TodoList;

  