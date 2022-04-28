import styled from "styled-components";

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  background-color: beige;
  width: 100vw;
  height: 100vh;

  .imgTitle-div {
    display: flex;
    align-items: center;

    img {
      width: 150px;
      height: 150px;
    }

    h2 {
      color: pink;
    }
  }

  input {
    width: 180px;
    padding: 5px;
    border-radius: 4px;
    border-style: none;
    outline: none;
    border: 1px solid pink;
    transition-duration: 1s;
  }

  input::placeholder {
    color: pink;
  }

  input:hover {
    border: 1px solid darksalmon;
    background-color: pink;
  }

  button {
    border-style: none;
    width: 100px;
    height: 30px;
    border-radius: 4px;
    background-color: pink;
    color: white;
    cursor: pointer;
    transition-duration: 1s;
  }

  button:hover {
    color: darksalmon;
    border: 1px solid darksalmon;
  }

  .comments-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: salmon;
    width: 80%;
    border-radius: 8px;
    border: 2px solid pink;
    max-height: 600px;
    overflow-y: scroll;
    margin-bottom: 15px;

    ::-webkit-scrollbar {
      background: pink;
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: white;
      border-radius: 50px;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px salmon;
      border-radius: 10px;
    }

    p {
      display: inline-block;
      text-align: center;
      background-color: pink;
      width: 70%;
      color: white;
      border-radius: 4px;
      padding: 5px;
    }

    p:first-letter {
      text-transform: capitalize;
    }
  }

  @media(min-width: 768px){
    .comments-div{
        width: 50%;
    }
  }
`;
