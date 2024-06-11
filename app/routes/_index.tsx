import { useState } from "react";

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("PAIS");

  const options = ["PAIS", "ESPAÑA", "ARGENTINA", "BRASIL"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      toggleDropdown();
    }
  };

  const handleOptionKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    option: string
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      handleOptionClick(option);
    }
  };

  const handleButtonClick = () => {
    switch (selectedOption) {
      case "ESPAÑA":
        window.location.href = "https://sentez.es";
        break;
      case "ARGENTINA":
        window.location.href = "https://sentez.com.ar";
        break;
      case "BRASIL":
        window.location.href = "https://sentez.com.br";
        break;
      default:
        alert("Please select a valid country");
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
          padding: "40px",
        }}
      >
        <div
          style={{
            backgroundColor: "black",
            padding: "20px",
            width: "30rem",
            height: "10rem",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "left",
            fontSize: "2rem",
          }}
        >
          <div
            role="button"
            tabIndex={0}
            onClick={toggleDropdown}
            onKeyDown={handleKeyDown}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              paddingBottom: "20px",
              borderBottom: "1px solid #ddd",
              position: "relative",
              color: "white",
              cursor: "pointer",
              outline: "none",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {selectedOption}
              <span style={{ marginLeft: "auto" }}>{isOpen ? "▼" : "▶"}</span>
            </div>
            {isOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  width: "100%",
                  backgroundColor: "black",
                  border: "1px solid #ddd",
                  zIndex: 1000,
                }}
              >
                {options.map((option) => (
                  <div
                    key={option}
                    role="option"
                    aria-selected
                    tabIndex={0}
                    onClick={() => handleOptionClick(option)}
                    onKeyDown={(e) => handleOptionKeyDown(e, option)}
                    style={{
                      padding: "10px",
                      cursor: "pointer",
                      backgroundColor: "black",
                      color: "white",
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
              paddingTop: "20px",
            }}
          >
            <button
              onClick={handleButtonClick}
              style={{
                backgroundColor: "black",
                color: "white",
                border: "none",
                padding: "20px 20px",
                cursor: "pointer",
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              IR!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
