import styled from "styled-components";

export const FooterStyled = styled.div`
    background-color: #2eb895;
    display: flex;
    
    .btn-circle{
        border-radius: 50%;
        padding: 0.5rem 0.6rem;
        transition: 0.5s
        width: inherit !important;
    }

    .btn{
        width: inherit !important;
    }
    
    .row{
        align-items: center !important;
    }

    .icon{
        background-color: #FFFFFF;
        border: none;
        color: #2eb895;
        transition: 0.5s
    }

    .icon:hover{
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        transition: 0.5s
    }
    
    #icon-github:hover{
        background-color: #6F2DA8;
        color: #FFFFFF;
        transition: 0.4s;
    }

    #icon-tumblr:hover{
        background-color: #35465C;
        color: #FFFFFF;
        transition: 0.4s;
    }

    #icon-twitter:hover{
        background-color: #00acee;
        color: #FFFFFF;
        transition: 0.4s;
    }

    #icon-instagram:hover{
        background: radial-gradient(circle at 31% 108%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
        color: #FFFFFF;
        transition: 0.4s;
    }

    #icon-facebook:hover{
        background-color: #1778F2;
        color: #FFFFFF;
        transition: 0.4s;
    }

    .texto{
        text-transform: uppercase;
        margin: 1.5rem;
        color: #FFFFFF;
        font-weight: bolder;
    }

    .bold{
        font-weight: 500;
    }
`
