import React from 'react';
import styles from './Test_RTK.module.css';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, incrementByAmount} from "../../redux/counter";

const TestRtk = () => {

    const {count} = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div className={styles.TestRtk}>
            TestRtk Component
            <h1> The count is: {count}</h1>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <button onClick={() => dispatch(incrementByAmount(33))}>
                Increment by 33
            </button>
        </div>
    )
};

TestRtk.propTypes = {};

TestRtk.defaultProps = {};

export default TestRtk;
