import React, { useCallback } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 7px;
    outline: none;
    border: 1px solid ${props => props.theme.colors.lightGray};
`;

const Input = ({ placeholder, onChange }) => {

    const onChangeHandler = useCallback(function (e) {
        let inputValue = e.target.value;
        if (typeof onChange === 'function') {
            return onChange(inputValue);
        }
    }, [onChange])

    return (
        <StyledInput
            placeholder={placeholder}
            onChange={onChangeHandler} />
    )
}

export default Input;