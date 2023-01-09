import styled from "styled-components";

const LoaderStyle = styled.div`
  .loader {
    position: absolute;
    left: 44%;
    top: 50%;
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
    @media screen and (max-width: 767px) {
      left: 34%;
    }
  }

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => (
  <LoaderStyle>
    <div className="loader"></div>
  </LoaderStyle>
);

export default Loader;
