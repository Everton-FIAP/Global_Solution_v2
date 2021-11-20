import styled from 'styled-components'


export const NavbarStyled = styled.div`
    background-color: #2eb895 !important;
    align-items: center;

        li{
            a{
            text-decoration: none !important;
            height: 100%;
            }
            transition: 0.5s;   
        }

        li:hover{
            background-color: #248f74;
            background-size: 100px;
            transition: 0.5s
        }

        .nav-item{
            padding: 0.5rem;
        }
`