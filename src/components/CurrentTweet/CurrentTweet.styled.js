import styled from "styled-components";

import picture2 from "../../images/picture2.png";
import logo from "../../images/logo.png";

export const Wraper = styled.div`
  border-radius: ${(p) => p.theme.radii.small};
  background: ${(p) => p.theme.colors.mainBg};
  box-shadow: ${(p) => p.theme.colors.shadowBg};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: "center";
  width: 380px;
  height: 460px;
  font-size: 14px;
  padding: 0.5em;
  color: ${(p) => p.theme.colors.pink};
  font-size: ${(p) => p.theme.fontSize[2]}px;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: ${(p) => p.theme.lineHeight[0]};
  text-align: center;
  text-transform: uppercase;
  &:after {
    content: " ";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    background: url(${picture2}) 50% 6% no-repeat, url(${logo}) 5% 4% no-repeat;
  }
  &:before {
    content: "";
    position: absolute;
    top: 224px;
    left: 0;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
    height: 8px;
    z-index: 0;
    width: 380px;
  }
`;

export const ImgWraper = styled.div`
  margin-top: 178px;
  z-index: 99;
`;

export const Frame = styled.img`
  border-radius: ${(p) => p.theme.radii.round};
  background: ${(p) => p.theme.colors.mainBg};
  border: 8px solid #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  width: 80px;
  height: 80px;
  margin: 0 auto;
`;

export const Button = styled.button`
  width: 196px;
  height: 50px;
  margin: 26px auto 0;
  background-color: rgba(92, 211, 168, 1);
  border-radius: ${(p) => p.theme.radii.light};
  color: ${(p) => p.theme.colors.grey};
  font-size: ${(p) => p.theme.fontSize[1]}px;
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  line-height: ${(p) => p.theme.lineHeight[1]};
  text-align: center;
  text-transform: uppercase;
  z-index: 1999;
  &:hover {
    background-color: ${(p) => p.theme.colors.green};
  }
  &:active {
    background-color: ${(p) => p.theme.colors.green};
  }
`;

export const ButtonN = styled(Button)`
  background: rgba(235, 216, 255, 1);
`;
