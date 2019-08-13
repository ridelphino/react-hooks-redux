import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


export default function CourseList() {

    const [inputTitleEnter, setInputTitleEnter] = useState();

    const courses = useSelector(state => state.data);
    const dispatch = useDispatch();

    function addCourse(){
        dispatch({type: 'ADD_COURSE', title: inputTitleEnter});
    }
    function handleSubmit(e){
        e.preventDefault();
        setInputTitleEnter('')
        addCourse()
    }

    function handleInputChange(e){
        setInputTitleEnter(e.target.value);
    }

    return (
        <>
            <ul>
                {courses.map(course => <li key={course}>{course}</li>)}
            </ul>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder='Type the course title here'
                    onChange={handleInputChange}
                    value={inputTitleEnter}
                />
                <button type='submit'>Add course</button>
            </form> 
        </>
    );
}
