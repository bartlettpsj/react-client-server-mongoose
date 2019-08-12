import React, { useState } from 'react';
import styled from '@emotion/styled'

const People = (props) => {
    const [name, setName] = useState("Fred Bloggs");

    const user = {
        name,
        age: 99
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name: ${name}`)

        fetch("http://localhost:3000/user", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        }).then(async res => {
            console.log(res)
            const text = await res.text();
            console.log(text);
            alert(`Done Name: ${name} - ${text}`);
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <Wrapper>
                <div>
                    <h2>Enter a person to save</h2>
                    <InputBox>
                        Name: <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
                        <input type="submit" value="Submit" />
                    </InputBox>
                </div>
                <SmallSpan>{name}</SmallSpan>
            </Wrapper>
        </form>
    )
}

export default People;

const Wrapper = styled.div`
    padding: 20px;
    border: 1px solid grey;
    border-radius: 6px;
    line-height: 2.5em;
    background-color: ghostwhite;    
`;

const InputBox = styled.div`
    border: 1px solid lightgrey;
    border-radius: 6px;
    padding-left: 20px;
    padding-right: 20px;
`;

const SmallSpan = styled.span`
    font-size: x-small;
`;