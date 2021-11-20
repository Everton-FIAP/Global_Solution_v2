import styled from "styled-components";

export const MercadoStyled = styled.div`
    .box{
        width: fit-content !important;
        height: fit-content !important;
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important;
        padding: 2rem !important;
        margin: 2rem 2rem 4rem 2rem !important;
        flex: 0 0 auto;
        border-radius: .4rem !important;
        flex-direction: row;

        background-color: #F6F6F6;
        border-color: transparent !important; 
    }

    .titulo{
        color: #2eb895;
        text-transform: uppercase;
    }

    .fotoMercados{
        width: 100% !important;
        max-height: 33.5vh !important;
        object-fit: cover;
    }

    .btn{
        width: fit-content !important;
    }

    .btn-voltar{
        background-color: #ECECEC;
        transition: 0.3s ease-in-out;
        border-color: transparent !important;
        color: #000000;
    }

    .btn-voltar:hover{
        background-color: #D3D3D3;
        transition: 0.3s ease-in-out;
        border-color: transparent !important;
        color: #000000;
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

        
    #icon-delete{
        color: #C9D1D5;
        transition: 0.4s;

    }

    #icon-delete:hover{
        color: #FF4F4F;
        width: 4rem;
        height: 4rem;
        margin: 0;
        transition: 0.4s;
        margin: 0 !important;
    }

    #icon-edit{
        color: #C9D1D5;
        transition: 0.4s;
    }

    #icon-edit:hover{
        color: #52BE80;
        width: 3.5rem;
        height: 3.5rem;
        margin: 0;
        transition: 0.4s;
    }

    .muted{
        font-size: 16px;
    }

    .form-group{
        label{
            font-size: 0.8rem;
        }
        input{
            height: 2rem !important;
        }
    }
`;

export const PostMercadoStyled = styled.div`
    .background{
        background-color: #2eb895 !important;
    }
`;