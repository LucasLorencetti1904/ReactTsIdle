import {
    Box,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActionArea,
    CardActions,
    Typography,
    IconButton,
    Button
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import DiamondIcon from "@mui/icons-material/Diamond";

import Mob from "../entities/Mob";

interface bestiaryProps {
    mob: Mob;
}

export default function BestiaryCard({ mob }: bestiaryProps) {
    return (
        <Card sx={{
            padding: "0.5rem",
            display: "flex",
            flexDirection: "column",
            width: {
                xs: 200,
                sm: 300,
                md: 400,
                lg: 500
            },
        }}>
            <CardActionArea>
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
                            padding: "0 10%",
                            height: "12em",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#e3e5e8",
                            borderRadius: "25px",
                            overflowY: "auto",
                            overflowX: "hidden"
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
            </CardActionArea>
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
