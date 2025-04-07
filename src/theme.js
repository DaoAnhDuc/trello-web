// theme.ts
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { teal, cyan, deepOrange, orange } from "@mui/material/colors";
import { borderColor, height } from "@mui/system";

const theme = extendTheme({
  trello: {
    appBarHeight: "58px",
    boardBarHeight: "60px",
  },
  colorSchemes: {
    // light: {
    //   palette: {
    //     primary: teal,
    //     secondary: deepOrange,
    //   },
    //   background: {
    //     default: "#f4f6f8",
    //   },
    // },
    // dark: {
    //   palette: {
    //     primary: cyan,
    //     secondary: orange,
    //   },
    //   background: {
    //     default: "#121212",
    //   },
    // },
  },
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
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({  }) => {
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
