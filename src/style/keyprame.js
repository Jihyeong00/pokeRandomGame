import { keyframes } from 'styled-components';

export const move = keyframes`
	0%{
    	top: 88px;
        opacity: 0.1;
    }

    
    100%{
    	top: 0;
        opacity: 1;
    }
`;

export const leftMove = keyframes`
	0%{
    	right: 88px;
        opacity: 0.1;
    }

    
    100%{
    	right: 0;
        opacity: 1;
    }
`;

export const RightMove = keyframes`
	
    0%{
    	left: 88px;
        opacity: 0.1;
    }

    
    100%{
    	left: 0;
        opacity: 1;
    }
`;
