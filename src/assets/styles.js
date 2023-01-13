import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles({
    divider: {
      width: "100%",
      height: "0.1ch",
      maxWidth: 1200,
      backgroundColor: "theme.palette.background.paper",
      margin: "11px 0px 11px 0px",
    },
    root: {
      backgroundColor: "var(--main-color-regular-inner)",
      width: "100%",
      height: "100vh",
      overflow: "hidden",
    },
    button: {
      width: "100%",
      height: "4ch",
      maxWidth: 280,
    },
    title: {
      fontFamily: "Segoe UI sans-serif",
    },
  });