import { useState, useEffect } from "react";
import { Button, Box, Container, Paper } from "@mantine/core";

export default function Index() {
    const [selectedOption, setSelectedOption] = useState("PAÍS");
    const [containerWidth, setContainerWidth] = useState("30rem");
    const [isOpen, setIsOpen] = useState(false);

    const options = ["ESPAÑA", "ARGENTINA", "BRASIL"];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setContainerWidth("20rem");
            } else {
                setContainerWidth("30rem");
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
        <Container
            fluid
            h={"100vh"}
            style={{
                padding: "40px",
                backgroundImage: "url('/bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Container
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "80vh",
                    padding: "40px",
                }}

            >
                <Paper
                    style={{
                        backgroundColor: "black",
                        padding: "20px",
                        width: containerWidth,
                        height: "10rem",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        textAlign: "left",
                        fontSize: "2rem",
                        color: "white",

                    }}

                >
                    <div
                        role="button"
                        tabIndex={0}
                        onClick={() => setIsOpen(!isOpen)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                setIsOpen(!isOpen);
                            }
                        }}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            paddingBottom: "5px",
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
                                        onClick={() => {
                                            setSelectedOption(option);
                                            setIsOpen(false);
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === " ") {
                                                setSelectedOption(option);
                                                setIsOpen(false);
                                            }
                                        }}
                                        style={{
                                            padding: "10px",
                                            cursor: "pointer",
                                            backgroundColor: "black",
                                            color: "white",
                                            fontSize: "2rem",
                                            "&:hover": {
                                                backgroundColor: "black",
                                            },
                                        }}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <Box
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            paddingTop: "20px",


                        }}
                    >
                        <Button onClick={handleButtonClick} color={"black"} size={"30px"}  mt={20} pr={0}  >
IR
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </Container>
    );
}
