import React from 'react';
import styled from 'styled-components';

const StyledPageWrapper = styled.div`
    width: ${props => props.theme.dimensions.page.width};
`;

const Page = ({ children }) => {
    return (
        <StyledPageWrapper>
            {children}
        </StyledPageWrapper>
    )
}

export default Page;