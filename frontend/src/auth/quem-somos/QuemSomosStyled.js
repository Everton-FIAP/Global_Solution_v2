import styled from "styled-components";

export const QuemSomosStyled = styled.div`
    .fotoSize{
        width: 30rem;
        height: 25rem;
        object-fit: cover;
    }

    .titulo{
        font-weight: 900;
        color: #2eb895;
    }

    .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: #FDFDFD;
    transition: 0.3s;
    width: 13.5em;
    margin: 1em;
  }

  .card-img {
    object-fit: cover;
    width: 100%;
    height: 300px;
  }

  .card:hover {
    width: 16rem;
    transition: 0.2s;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .card-informacao {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    padding-bottom: 25px;
  }

  .margem{
      margin-top: 10rem;
      margin-bottom: 10rem;
  }

`