import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";

export const CurvedSeparator = styled.div`
  position: relative;
  background: ${(props) => props.color};
  height: 100px;
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
`;

export const SpikeSeparator = styled.div`
         position: relative;
         background: ${(props) => props.color};
         height: 50px;

         &::after {
           content: "";
           position: absolute;
           right: 0;
           left: -0%;
           top: 100%;
           z-index: 10;
           display: block;
           height: 50px;
           background-size: 50px 100%;
           background-image: linear-gradient(
               135deg,
               ${(props) => props.color} 25%,
               transparent 25%
             ),
             linear-gradient(
               225deg,
               ${(props) => props.color} 25%,
               transparent 25%
             );
           background-position: 0 0;
         }
       `;

export const SectionNegativeMargin = styled.div`
  background-color: ${(props) => props.color};
  height: 300px;
  margin-top: -50px;
`;
