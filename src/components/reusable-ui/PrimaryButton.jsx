import styled from 'styled-components';
import { theme } from '../../theme';

export default function Button({label, Icon, ...restProps}) {
  return (
    <PrimaryButtonStyled>
        <span>{label}</span>
        {Icon && Icon}
        
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`

        width: 100%;
        border: 1px solid ${theme.colors.red};
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: relative;
        white-space: nowrap;
        text-decoration: none;
        line-height: 1;

        padding: 18px 24px;
        border-radius: ${theme.borderRadius.round};
        font-size: ${theme.fonts.SM};
        font-weight: ${theme.fonts.weights.heavy};
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};

        &:hover:not(:disabled) {
            background-color: white;
            color: ${theme.colors.primary};
            border: 1px solid ${theme.colors.primary};
            transition: all 200ms ease-out;
        }

        &:active {
            color: ${theme.colors.white};
            background-color: ${theme.colors.primary};
            border: 1px solid ${theme.colors.primary};
        }

        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    
`;
