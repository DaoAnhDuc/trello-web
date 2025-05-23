// theme.ts
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { teal, cyan, deepOrange, orange } from "@mui/material/colors";
import { borderColor, height } from "@mui/system";
const APP_BAR_HEIGHT = "58px";
const BOARD_BAR_HEIGHT = "60px";
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`;
const COLUMN_HEADER_HEIGHT = "60px";
const COLUMN_FOOTER_HEIGHT = "60px";
const theme = extendTheme({
  trello: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    bordContentHeight: BOARD_CONTENT_HEIGHT,
    columnHeaderHeight: COLUMN_HEADER_HEIGHT,
    columnFooterHeight: COLUMN_FOOTER_HEIGHT,
  },
  colorSchemes: {},
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderWidth: "0.5px",
          "&:hover": {
            borderWidth: "0.5px",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: "0.875rem",
          "&.Mui-focused": {},
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.MuiTypography-body1": { fontSize: "0.875rem" },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({}) => {
          return {
            fontSize: "0.875rem",
            "& fieldset": {
              borderWidth: "0.5px !important",
            },
            "&:hover fieldset": {
              borderWidth: "1px !important",
            },
            "&:Mui-focused fieldset": {
              borderWidth: "1px !important",
            },
          };
        },
      },
    },
  },
});

export default theme;
