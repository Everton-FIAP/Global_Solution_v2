import styled from "styled-components";

export const ProdutoStyled = styled.div`
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: #FDFDFD;
    transition: 0.3s !important;
    width: 20em;
    height: fit-content !important;
    margin: 1em;
  }

  .btn-post{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: #DAE2E5;
    border-color: transparent;
    transition: 0.3s ease-out;

    border-radius: 50%;
    padding: 0.5rem 0.6rem;
    margin: 0rem 1rem !important;
    

    svg{
        transition: 0.3s ease-out;
        width: 2.5rem;
        height: 2.5rem;
        color: #C9D1D5;
    }
  }

  .btn-post:hover{
      transition: 0.5s ease-in;
      background-color: #66D8FD;
      svg{
            width: 3.25rem;
            height: 3.25rem;
          color: #FFFFFF;
      }
  }

  .card-img {
    object-fit: cover;
    width: 100%;
    height: 300px;
  }

  .card:hover {
    transition: 0.2s !important;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .card-informacao {
    padding: 1rem 2rem;
    ul{
        list-style-type: none;
    }
    p{
        margin: 0.2rem 0rem;
    }
  }

  .icone{
      svg{
        color: #C9D1D5;
        width: 2.5rem;
        height: 2.5rem;
        transition: 0.2s ease-out;
      }
      #icon-delete:hover{
        color: #FF4F4F;
        transition: 0.2s ease-in;
        width: 3rem;
        height: 3rem;
      }
      #icon-edit:hover{
        color: #52BE80;
        transition: 0.2s ease-in;
        width: 2.8rem;
        height: 2.8rem;
      }
  }

  .margem{
      margin-top: 15rem !important;
      margin-bottom: 15rem !important;
  }

  .titulo{
        color: #2eb895;
        text-transform: uppercase;
    }

    .btn-voltar{
        background-color: #ECECEC;
        transition: 0.3s ease-in-out;
    }

    .btn-voltar:hover{
        background-color: #D3D3D3;
        transition: 0.3s ease-in-out;
    }

    .form-group{
        label{
            font-size: 0.8rem;
            margin: 0.2nprem 0rem !important;
        }
        input{
            height: 2rem !important;
        }
    }
`