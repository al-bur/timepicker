// import { useState } from "react";
import clockImg from "./assets/clock.svg";
import upArrowImg from "./assets/upArrow.svg";

function App() {
  return (
    <>
      <main
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#080808d2",
            padding: "4% 6%",
            display: "flex",
            alignItems: "center",
            // TODO: 여기서 Main의 width는 어떻게 결정이 되는 지 알아가야함
            width: "50%",
            gap: "10%",
          }}
        >
          <div
            style={{
              width: "40%",
              position: "relative",
            }}
          >
            <hr
              style={{
                position: "absolute",
                top: "48%",
                border: "0.2rem solid #74b074",
                width: "35%",
                left: "14%",
                transformOrigin: "right",
                transform: "rotate(0deg)",
                rotate: "90deg",
                margin: 0,
              }}
            />
            <img
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "50%",
                width: "100%",
              }}
              src={clockImg}
            />
          </div>
          <div
            style={{
              width: "60%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "30%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              <img
                style={{
                  width: "20%",
                  cursor: "pointer",
                }}
                src={upArrowImg}
              />
              <div
                style={{
                  color: "#FFFFFF",
                  fontSize: "6rem",
                }}
              >
                00
              </div>
              <img
                style={{
                  width: "20%",
                  rotate: "180deg",
                  cursor: "pointer",
                }}
                src={upArrowImg}
              />
            </div>
            <span
              style={{
                width: "10%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                color: "#FFFFFF",
                fontSize: "6rem",
              }}
            >
              :
            </span>
            <div
              style={{
                width: "30%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              <img
                style={{
                  width: "20%",
                  color: "#FFFFFF",
                  cursor: "pointer",
                }}
                src={upArrowImg}
              />
              <div
                style={{
                  color: "#FFFFFF",
                  fontSize: "6rem",
                }}
              >
                00
              </div>
              <img
                style={{
                  width: "20%",
                  rotate: "180deg",
                  color: "#FFFFFF",
                  cursor: "pointer",
                }}
                src={upArrowImg}
              />
            </div>
            <span
              style={{
                width: "30%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                color: "#FFFFFF",
                fontSize: "6rem",
                marginLeft: "10%",
              }}
            >
              AM
            </span>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
