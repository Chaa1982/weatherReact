import styled from "styled-components";

interface FlexPropsInterface {
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
    justifyContent?: string;
    alignItems?: string;
    borderRadius?: string;
    background?: string;
    color?: string;
}

export const Flex = styled.div<FlexPropsInterface>`
    display: flex;
    width: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};
    margin: ${(props) => props.margin || '0'};
    padding: ${(props) => props.padding || '0'};
    justify-content: ${(props) => props.justifyContent || 'start'};
    align-items: ${(props) => props.alignItems || 'start'};
    border-radius: ${(props) => props.borderRadius || '0'};
    background-color: ${(props) => props.background || 'none'};
    color: ${(props) => props.color || 'black'};
`;
export const FlexRow = styled(Flex)`
    flex-direction: row;
`
export const FlexColumn = styled(Flex)`
    flex-direction: column;
`