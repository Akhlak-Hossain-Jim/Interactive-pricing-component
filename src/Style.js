import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  min-height: 800px;
  margin: 0 auto;
  background-image: url(/bg-pattern.svg);
  background-repeat: no-repeat;
  background-position: top left;
  background-size: 1440px auto;
  padding: 0 24px 88px;
  padding-top: 66px;
  display: flex;
  flex-direction: column;
  @media (max-width: 548px) {
    padding-top: 57px;
  }
  header {
    text-align: center;
    margin: auto;
    background-image: url(/pattern-circles.svg);
    background-repeat: no-repeat;
    background-position: center;
    padding: 38px 46px 40px;
    h1 {
      font-weight: 800;
      font-size: 28px;
      line-height: 38px;
      color: #33395b;
      padding-bottom: 16px;
      @media (max-width: 548px) {
        font-size: 20px;
        line-height: 27px;
        padding-bottom: 10px;
      }
    }
    p {
      font-weight: 600;
      font-size: 15px;
      line-height: 20px;
      color: #8f96a8;
      @media (max-width: 548px) {
        font-weight: 600;
        font-size: 13px;
        line-height: 180%;
        max-width: 172px;
        margin: 0 auto;
      }
    }
  }
  .card {
    margin: auto;
    margin-top: 55px;
    background: #ffffff;
    border-radius: 11px;
    width: min(540px, 100%);
    box-shadow: 0 10px 10px 0px hsl(208deg 16% 85%);
    @media (max-width: 548px) {
      margin-top: 33px;
    }
    &_top {
      padding: 40px 45.5px 41px;
      border-bottom: 1px solid #e5e5e5;
      @media (max-width: 548px) {
        padding: 34px 24px 31px;
      }
      &__line {
        &_1 {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 26px;
          @media (max-width: 548px) {
            justify-content: center;
          }
          &__views {
            font-weight: 800;
            font-size: 14px;
            line-height: 19px;
            letter-spacing: 0.12em;
            color: #7a8194;
            @media (max-width: 548px) {
              font-size: 12px;
              line-height: 16px;
              letter-spacing: 0.12em;
            }
          }
          &__price {
            display: flex;
            align-items: center;
            gap: 8px;
            @media (max-width: 548px) {
              display: none;
            }
            h2 {
              font-weight: 800;
              font-size: 40px;
              line-height: 55px;
              letter-spacing: -0.08em;
              color: #33395b;
            }
            p {
              font-weight: 800;
              font-size: 16.5px;
              line-height: 23px;
              letter-spacing: 0.02em;
              color: #7a8194;
            }
          }
        }
        &_2 {
          input {
            /* width: 100%;
            -webkit-appearance: none;
            width: 100%;
            background: #ecf0f8;*/
            -webkit-appearance: none;
            appearance: none;
            background-color: #ebf0f8;
            height: 8px;
            width: 100%;
            color: #ef233c;
            border-color: #80fff3;
            accent-color: #80fff3;
            position: relative;
            border-radius: 4px;
            &::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              background-image: url(/icon-slider.svg);
              background-repeat: no-repeat;
              background-position: center;
              background-origin: center;
              background-size: 22px 13px;
              background-color: #14d9c7;
              cursor: pointer;
              &:hover {
                box-shadow: 0 0 5px 10px #80fff37d;
              }
            }
            &::-webkit-slider-container {
              /* background-color: red; */
              border-radius: 4px;
            }
          }
        }
        &_extra__price {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding-top: 24px;
          @media (min-width: 549px) {
            display: none;
          }
          h2 {
            font-weight: 800;
            font-size: 32px;
            line-height: 44px;
            letter-spacing: -0.07em;
            color: #33395b;
          }
          p {
            font-weight: 600;
            font-size: 14px;
            line-height: 19px;
            letter-spacing: 0.02em;
            color: #7a8194;
          }
        }
        &_3 {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 16px;
          padding-top: 40px;
          &__element {
            font-weight: 600;
            font-size: 12px;
            line-height: 16px;
            color: #858fad;
            &:nth-child(2) {
              width: 43px;
              height: 22px;
              background: #cdd7ee;
              border-radius: 11px;
              display: flex;
              align-items: center;
              padding: 4px;
              justify-content: flex-start;
              &.active {
                justify-content: flex-end;
              }
              & > div {
                width: 14px;
                height: 14px;
                background: #fffeff;
                border-radius: 50%;
              }
            }
            &:nth-child(4) {
              margin-left: -7px;
              background: #feece7;
              border-radius: 9px;
              padding: 2px 7px 3px 6px;
              font-weight: 800;
              font-size: 10px;
              line-height: 14px;
              color: #ff8c66;
              &::before {
                @media (max-width: 548px) {
                  content: "- ";
                }
              }
              &::after {
                @media (min-width: 549px) {
                  content: " discount";
                }
              }
            }
          }
        }
      }
    }
    &_bottom {
      padding: 31px 45.5px 33px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media (max-width: 548px) {
        flex-direction: column;
      }
      &__element {
        &:nth-child(1) {
          display: flex;
          flex-direction: column;
          gap: 11px;
          @media (max-width: 548px) {
            align-items: center;
            justify-content: center;
            padding-bottom: 33px;
          }
        }
        &_benefits {
          display: flex;
          align-items: center;
          gap: 15px;
          img {
            width: 9px;
            height: 8px;
          }
          p {
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 16px;
            color: #858fad;
          }
        }
        &_button {
          background: #293356;
          border-radius: 20.5px;
          padding: 12px 46px 13px;
          font-weight: 800;
          font-size: 12px;
          line-height: 16px;
          color: #bdccff;
        }
      }
    }
  }
`;
