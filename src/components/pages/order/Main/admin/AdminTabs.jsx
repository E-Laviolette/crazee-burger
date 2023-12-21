import styled from 'styled-components';
import Tab from '../../../../reusable-ui/Tab';
import { FiChevronDown, FiChevronUp} from "react-icons/fi";
import { AiOutlinePlus} from "react-icons/ai";
import { theme } from '../../../../../theme';

export default function AdminTabs({ isCollapse, setIsCollapse}) {

    const handleClick = () => { 
        setIsCollapse(!isCollapse);
     }

    return (
        <AdminTabsStyled>
            <Tab 
            label=""
                Icon={ isCollapse ? <FiChevronUp /> : <FiChevronDown />} 
                onClick={handleClick}
                className={isCollapse ? "is-active" : ""}
            />            
            <Tab 
            label="Ajouter un produit"
            Icon={<AiOutlinePlus />}
            onClick={handleClick}
            className={isCollapse ? "is-active" : ""}
        />
        </AdminTabsStyled>
    )
}

const AdminTabsStyled = styled.div`
    display: flex;
    padding: 0 20px;

    .is-active {
        background: ${theme.colors.background_dark};
        border-color: ${theme.colors.background_dark};
        color: white;
    }

    button {
        margin-left: 1px;
    }
`;
