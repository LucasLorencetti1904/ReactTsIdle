/** @jsxImportSource @emotion/react */
import * as React from "react";
import { GlobalStyles } from "@mui/material";
import BestiaryCard from "./components/CustomCard";

const MyGlobalStyles = () => {
    return (
        <GlobalStyles
            styles={{
                "*": {
                    margin: 0,
                    padding: 0
                },
                body: {
                    height: "100%"
                },
                "body, #root": {
                    backgroundColor: "#000",
                    height: "100dvh",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }
            }}
        />
    );
}

const App = () => {
    return (
        <>
        <MyGlobalStyles />
        <BestiaryCard
            name="goblin"
            description={
                `Usually fount at night
                in jungles and swamps.`
            }
        />
        </>
    )
}

export default App;
