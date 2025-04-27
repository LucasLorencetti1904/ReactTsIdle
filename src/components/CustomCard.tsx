import {
    Box,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Typography,
    Button
} from "@mui/material";

import DiamondIcon from "@mui/icons-material/Diamond";

import Mob from "../entities/Mob";

export default function BestiaryCard({ mob }: { mob: Mob }) {
    return (
        <Card sx={{
            padding: "0.5rem",
            display: "flex",
            flexDirection: "column",
            width: {
                xs: 200,
                sm: 300,
                md: 400,
                lg: 300
            },
            transition: "transform 0.8s ease",
            userSelect: "none",
            "&:hover": {
                transform: "scale(1.06)"
            }
        }}>
            <CardHeader
                title="Bestiary"
                sx={{
                    flex: 1,
                    height: "0.2em",
                    "& .MuiCardHeader-title": {
                        textAlign: "center"
                    }
                }}
            />
            <CardContent
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    margin: "1em 0 1em 0"
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        textTransform: "uppercase",
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#000",
                        fontSize: "3.6em",
                    }}
                >
                {mob.name}
                </Typography>
                <Box
                    sx={{
                        boxSizing: "border-box",
                        margin: "1em",
                        padding: "0 10%",
                        height: "6em",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#e3e5e8",
                        borderRadius: "10px",
                        overflowY: "auto",
                        overflowX: "hidden",
                        userSelect: "text"
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            wordWrap: "break-word",
                            textAlign: "center"
                        }}
                    >
                        {mob.description}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center"
            }}>
                <Button
                    variant="contained"
                    startIcon={<DiamondIcon />}
                    color="primary"
                >
                    Drops
                </Button>
            </CardActions>
        </Card>
    )
}
