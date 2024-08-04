/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const Color = {
  aerospaceOrange: "#FF4F00",
  aerospaceOrange90: "#FF6219",
  aerospaceOrange80: "#FF7433",
  aerospaceOrange70: "#FF854D",
  aerospaceOrange60: "#FF9666",
  aerospaceOrange50: "#FFA880",
  aerospaceOrange40: "#FFB999",
  aerospaceOrange30: "#FFCBB3",
  aerospaceOrange20: "#FFDCCC",
  aerospaceOrange10: "#FFEEE6",
  gunmetal: "#2C3539",
  gunmetal90: "#3E494E",
  gunmetal80: "#525E64",
  gunmetal70: "",
  gunmetal60: "",
  gunmetal50: "",
  gunmetal40: "",
  gunmetal30: "",
  gunmetal20: "",
  gunmetal10: "",
  whiteSmoke: "#F5F5F5",
};

export const Colors = {
  light: {
    primary: Color.aerospaceOrange,
    background: Color.whiteSmoke,
    card: Color.gunmetal10,
    text: Color.gunmetal,
    border: Color.gunmetal20,
    notification: Color.aerospaceOrange,
    link: Color.aerospaceOrange,
  },
  dark: {
    primary: Color.aerospaceOrange,
    background: Color.gunmetal,
    card: Color.gunmetal90,
    text: Color.whiteSmoke,
    border: Color.gunmetal50,
    notification: Color.aerospaceOrange,
    link: Color.aerospaceOrange50,
  },
};
