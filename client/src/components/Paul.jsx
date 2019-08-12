import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled'

const Paul = (props) => {

    const [data, setData] = useState({ name: 'Fred' });

    useEffect(() => {

        if (!props.fetched) {
            console.log('do the fetch');

            setTimeout(() => {
                getSomeData()
            }, 3000);

        }
        console.log('mount it!');
    }, [props.fetched]); // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour

    const handleClick = (e) => {
        console.log('Clicked', e);
        getSomeData();
    }

    const getSomeData = () => {
        fetch('http://localhost:3000/user')
            .then(response => response.json())
            .then(json => { console.log('Got Some Data:', json); setData(json) })
    }

    return (
        <Wrapper>
            <div>
                <label htmlFor="paul">Next Name: </label>
                <button name="paul" onClick={handleClick}>Click Me</button>
                <div>The data: <span className={'boldy'}>{data.name}</span></div>
            </div>
        </Wrapper>
    )
}

export default Paul

const Wrapper = styled.div`
    padding: 20px;
    border: 1px solid grey;
    border-radius: 6px;
    line-height: 2.5em;
    background-color: lightblue;    
`;
