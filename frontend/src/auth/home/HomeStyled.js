import styled from "styled-components";

export const HomeStyled = styled.div`
    .box{
        width: auto !important;
        height: fit-content !important;
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important;
        padding: 2rem !important;
        margin: 2rem !important;
        flex: 0 0 auto;
        border-radius: .4rem !important;
        flex-direction: row;

        background-color: #F6F6F6;
        border-color: transparent !important; 
    }

    .btn{
        width: 50% !important;
    }

    .btn-arrow{
        background-color: #CDCDCD;
        bottom: 2rem;
        border-color: inherit !important;
    }

    .btn-arrow:hover{
        padding: 0.9rem;
        background-color: #A5A5A5;
        transition: 0.2s;
        font-weight: bold;
        border-color: inherit !important;
    }   

    .btn-circle{
        border-radius: 50%;
        padding: 0.7rem;
        transition: 0.5s
        width: inherit !important;
    }

    .icon{
        color: #FFFFFF;
    }

    .fotoCarroussel{
        width: 65rem;
        height: 20rem;
    }

    .titulo{
        color: #2eb895;
        text-transform: uppercase;
    }

    .fotoSize{
        width: 30rem;
        height: 25rem;
        object-fit: fill;
    }
`