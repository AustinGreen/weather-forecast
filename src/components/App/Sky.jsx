import React from 'react';
import styled, { keyframes } from 'styled-components';

export const SkyLandscape = styled.div`
  background-color: #65bffd;
  @media (max-width: 1000px) {
    height: 100vh;
  }
`;

const SkyParent = styled.div`
  @media (max-width: 1000px) {
      display: none;
  }
`;

const Cloud = styled.div`
    background: #fff;
    border-radius: 100px;
    height: 120px;
    position: relative;
    width: 350px;

&:after,
&:before {
    background: #fff;
    content: '';
    position: absolute;
}

&:after {
    border-radius: 100px;
    height: 100px;
    left: 50px;
    top: -50px;
    width: 100px;
}

&:before {
    border-radius: 200px;
    width: 180px;
    height: 180px;
    right: 50px;
    top: -90px;
}
`;

const animateCloud = keyframes`
  from {
    margin-left: 0%;
  }

  to {
    margin-left: 100%;
  }
`;

const animateCloud2 = keyframes`
  from {
    margin-left: -50%;
  }

  to {
    margin-left: 100%;
  }
`;

const Cloud1 = styled.div`
  animation: ${animateCloud2} 105s linear infinite;
  transform: scale(0.4);
  position: absolute;
  opacity: .3;
  top: 4em;
`;

const Cloud2 = styled.div`
  animation: ${animateCloud} 20s linear infinite;
  transform: scale(0.3);
  position: absolute;
  opacity: .3;
  top: 9em;
`;

const Cloud3 = styled.div`
  animation: ${animateCloud} 50s linear infinite;
  transform: scale(0.2);
  position: absolute;
  transform: scale(0.2);
  opacity: .3;
  top: 8em;
`;

const Cloud4 = styled.div`
  animation: ${animateCloud2} 48s linear infinite;
  transform: scale(0.15);
  position: absolute;
  top: 12em;
  margin-left: 80%;
`;

const Cloud5 = styled.div`
  animation: ${animateCloud2} 70s linear infinite;
  transform: scale(0.1);
  position: absolute;
  top: 11em;
`;

const Cloud6 = styled.div`
  animation: ${animateCloud} 50s linear infinite;
  transform: scale(0.05);
  position: absolute;
  top: 2em;
`;

const Sun = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  background: yellow;
  border-radius: 50%;
  top: 50px;
  right: 50px;
  box-shadow: 0px 0px 113px 23px yellow;
  opacity: 0.8;
`;

const Sky = () => (
  <SkyParent>
    <Sun />
    <Cloud1><Cloud /></Cloud1>
    <Cloud2><Cloud /></Cloud2>
    <Cloud3><Cloud /></Cloud3>
    <Cloud4><Cloud /></Cloud4>
    <Cloud5><Cloud /></Cloud5>
    <Cloud6><Cloud /></Cloud6>
  </SkyParent>
);

export default Sky;
