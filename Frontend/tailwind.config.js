
const defaultColors = require("tailwindcss/colors");
//màu nào ko dùng thì comment
const COLORTAIWIND = [
  // "blue",
  // "yellow",
  // "red",
  // "gray",
  // "green",
  // "indigo",
  // "purple",
  // "pink"
];
const COLORS = {
  success: {
    100: "#DEF5D9",
    200: "#AEE4AD",
    300: "#73C686",
    400: "#28A745",
    500: "#008E39",
  },
  info: {
    100: "#E2F1FF",
    200: "#ADD9FF",
    300: "#72B7FB",
    400: "#2B88FB",
    500: "#006EEF",
  },
  warning: {
    100: "#FFF6D9",
    200: "#FFE1A8",
    300: "#FDC66E",
    400: "#F0A328",
    500: "#E99208",
  },
  error: {
    100: "#FDECEF",
    200: "#FFABB5",
    300: "#FA8091",
    400: "#EA3E53",
    500: "#DA072D",
  },
  primary: {
    1: "#3B82F6",
    2: "#1D4ED8",
    3: "#BFDBFE",
    4: '#DBEAFE',
    5: '#EFF6FF',
  },
  secondary: {
    1: "#1A6DE3",
    2: "#0051CD",
  },
  tertiary: {
    1: "#F59E0B",
    2: "#FCD34D",
  },
  accent: {
    1: "#FA6C1D",
    2: "#84CC15",
    //không còn sử dụng từ bản 1.3.0
    3: "#F33240",
    4: "#FF8900",
    5: "#FFC400",
    6: "#28A745",
    7: "#00875A",
    8: "#0C9AB2",
    9: "#2684FF",
    10: "#034A93",
    11: "#5243AA",
    12: "#42526E",
  },
  gradient: {
    1: {
      start: "#28A745",
      // mid:'',
      end: "#52BF50",
    },
    2: {
      start: "#0051CD",
      // mid:'',
      end: "#3E89FC",
    },
  },
  neutral: {
    1: {
      50: "#DDE2E9",
      100: "#D2D8E0",
      200: "#CDD3DB",
      300: "#A1ACB8",
      400: "#929DAA",
      500: "#858F9B",
      600: "#6B7280",
      700: "#5A6271",
      800: "#424752",
      900: "#2C333A",
    },
    2: {
      50: "#F2F4F7",
      100: "#E9EDF2",
      200: "#E2E7ED",
      300: "#DAE0E6",
    },
    3: {
      50: "#F8F9FB",
      100: "#F0F1F3",
      200: "#EBEDEF",
      300: "#E3E6E9",
    },
  },
  base: {
    red: {
      50: "#FFF1F0",
      100: "#FFD2CF",
      200: "#FFA9A6",
      300: "#FF7D7D",
      400: "#F75257",
      500: "#EA2733",
      600: "#C41829",
      700: "#9E0B1F",
      800: "#780216",
      900: "#520111",
    },
    orange: {
      50: "#FFF5EB",
      100: "#FFDFC2",
      200: "#FFC799",
      300: "#FFAC70",
      400: "#FF8E47",
      500: "#FA6C1D",
      600: "#D44D0F",
      700: "#AD3403",
      800: "#872200",
      900: "#611500",
    },
    amber: {
      50: "#FFFBE6",
      100: "#FFF1B8",
      200: "#FFE58F",
      300: "#FFD666",
      400: "#FFC53D",
      500: "#FAAD14",
      600: "#D48806",
      700: "#AD6800",
      800: "#874D00",
      900: "#613400",
    },
    yellow: {
      50: "#FEFFE0",
      100: "#FFFFB8",
      200: "#FFFB8F",
      300: "#FFF566",
      400: "#FFEC3C",
      500: "#FADB15",
      600: "#D4B108",
      700: "#AD8B02",
      800: "#876801",
      900: "#614700",
    },
    lime: {
      50: "#F9FFE6",
      100: "#EDFFBD",
      200: "#D4F28D",
      300: "#B9E660",
      400: "#9ED938",
      500: "#84CC15",
      600: "#62A608",
      700: "#448000",
      800: "#2D5900",
      900: "#183300",
    },
    green: {
      50: "#E3F0E1",
      100: "#CFE3CC",
      200: "#A2D69F",
      300: "#78C975",
      400: "#4FBD4F",
      500: "#2EB032",
      600: "#1D8A24",
      700: "#106318",
      800: "#073D0E",
      900: "#021706",
    },
    teal: {
      50: "#E1F7F1",
      100: "#B0EBDC",
      200: "#83DECA",
      300: "#5AD1BB",
      400: "#35C4AF",
      500: "#15B8A6",
      600: "#099186",
      700: "#016B66",
      800: "#004544",
      900: "#001E1F",
    },
    sky: {
      50: "#F0FAFF",
      100: "#CCEBFF",
      200: "#A3D9FF",
      300: "#7AC3FF",
      400: "#52ABFF",
      500: "#2A92FF",
      600: "#186FD9",
      700: "#0B51B3",
      800: "#01378C",
      900: "#002466",
    },
    blue: {
      50: "#F0F7FF",
      100: "#C9E0FF",
      200: "#A1C5FF",
      300: "#78A7FF",
      400: "#4D83F7",
      500: "#235CEA",
      600: "#1440C4",
      700: "#08289E",
      800: "#001678",
      900: "#000C52",
    },
    indigo: {
      50: "#F4F0FF",
      100: "#E7DEFF",
      200: "#C6B5FF",
      300: "#9B85F2",
      400: "#715AE6",
      500: "#4932D9",
      600: "#2F20B3",
      700: "#1A128C",
      800: "#0B0866",
      900: "#040440",
    },
    purple: {
      50: "#FAF0FF",
      100: "#F2DBFF",
      200: "#DAADF7",
      300: "#BC7FEB",
      400: "#9E54DE",
      500: "#7F2ED1",
      600: "#5F1DAB",
      700: "#421085",
      800: "#2A075E",
      900: "#170338",
    },
    pink: {
      50: "#FFF0F5",
      100: "#FFD6E7",
      200: "#FFADD1",
      300: "#FF85BE",
      400: "#F759A8",
      500: "#EB2E94",
      600: "#C41D7C",
      700: "#9E1065",
      800: "#78064E",
      900: "#520337",
    },
  },
  d: {
    primary: {
      1: "#3B82F6",
      2: "#43A951",
      3: "#0D1E15",
    },
    secondary: {
      1: "#1A6DE3",
      2: "#0051CD",
    },
    tertiary: {
      1: "#F59E0B",
      2: "#FCD34D",
    },
    accent: {
      1: "#D65F1B",
      2: "#72B015",
      //không còn sử dụng từ bản 1.3.0
      3: "#F33240",
      4: "#FF8900",
      5: "#FFC400",
      6: "#28A745",
      7: "#00875A",
      8: "#0C9AB2",
      9: "#2684FF",
      10: "#034A93",
      11: "#5243AA",
      12: "#42526E",
    },
    gradient: {
      1: {
        start: "#0051CD",
        // mid:'',
        end: "#3E89FC",
      },
      2: {
        start: "#28A745",
        // mid:'',
        end: "#52BF50",
      },
    },
    info: {
      100: "#0B1C30",
      200: "#09284C",
      300: "#1A4B7F",
      400: "#277FDC",
      500: "#4292E2",
    },
    success: {
      100: "#0D201C",
      200: "#123121",
      300: "#19552B",
      400: "#24913E",
      500: "#43A951",
    },
    warning: {
      100: "#2C2614",
      200: "#483A18",
      300: "#7A6528",
      400: "#DBAF37",
      500: "#E2BA4C",
    },
    error: {
      100: "#290E19",
      200: "#430D1B",
      300: "#731A2D",
      400: "#C9334C",
      500: "#DF4A61",
    },
    neutral: {
      1: {
        50: "#161B22",
        100: "#21262D",
        200: "#30363D",
        300: "#484F58",
        400: "#6D7681",
        500: "#8B949E",
        600: "#B1BAC4",
        700: "#C8D1D9",
        800: "#DCE4EC",
        900: "#F0F6FC",
      },
      2: {
        50: "#14181C",
        100: "#1E2328",
        200: "#30363D",
        300: "#4C535B",
      },
      3: {
        50: "#02040A",
        100: "#0D1116",
        200: "#161B22",
        300: "#21262D",
        400: "#30363D",
        500: "#484F58",
      },
    },
    base: {
      red: {
        50: "#231017",
        100: "#3B131B",
        200: "#4F181F",
        300: "#701B23",
        400: "#9D1F29",
        500: "#C9242F",
        600: "#E04C51",
        700: "#F37878",
        800: "#F8A4A2",
        900: "#FACECB",
      },
      orange: {
        50: "#251613",
        100: "#3F2014",
        200: "#542C18",
        300: "#783A19",
        400: "#A74C1B",
        500: "#D65E1C",
        600: "#E78242",
        700: "#F3A46C",
        800: "#F8C295",
        900: "#FADBBF",
      },
      amber: {
        50: "#251E13",
        100: "#3F2F12",
        200: "#544015",
        300: "#785715",
        400: "#A77615",
        500: "#D69614",
        600: "#E7B339",
        700: "#F3CC62",
        800: "#F8DF8B",
        900: "#FAEDB5",
      },
      yellow: {
        50: "#2B2915",
        100: "#3F3912",
        200: "#544E16",
        300: "#786C16",
        400: "#A79414",
        500: "#D6BD13",
        600: "#E7D639",
        700: "#F2EA61",
        800: "#F8F48B",
        900: "#FAFAB5",
      },
      lime: {
        50: "#152213",
        100: "#223613",
        200: "#314916",
        300: "#436516",
        400: "#5A8B15",
        500: "#72B015",
        600: "#90C535",
        700: "#B0DB5C",
        800: "#CEEB89",
        900: "#E9FABA",
      },
      green: {
        50: "#0D1D16",
        100: "#112F1A",
        200: "#17411E",
        300: "#1C5923",
        400: "#227828",
        500: "#29982E",
        600: "#48AC49",
        700: "#73C070",
        800: "#9ED09B",
        900: "#CBDFC8",
      },
      teal: {
        50: "#0B1F22",
        100: "#0C3132",
        200: "#0F4341",
        300: "#115C57",
        400: "#127E74",
        500: "#149F90",
        600: "#31B2A0",
        700: "#56C7B3",
        800: "#7FD8C5",
        900: "#ADE7D8",
      },
      sky: {
        50: "#0D1B2E",
        100: "#102947",
        200: "#16385C",
        300: "#1A4B7F",
        400: "#2065AD",
        500: "#267FDC",
        600: "#4B9CE8",
        700: "#75BAF3",
        800: "#9FD3F8",
        900: "#C8E7FA",
      },
      blue: {
        50: "#0C142A",
        100: "#0F1D42",
        200: "#142856",
        300: "#173375",
        400: "#1B42A0",
        500: "#2051CA",
        600: "#4778E1",
        700: "#73A0F3",
        800: "#9DC0F8",
        900: "#C5DCFA",
      },
      indigo: {
        50: "#0F1128",
        100: "#16153D",
        200: "#1F1B51",
        300: "#28206E",
        400: "#342695",
        500: "#402DBC",
        600: "#6753D1",
        700: "#947FE7",
        800: "#C0B0F8",
        900: "#E3DAFA",
      },
      purple: {
        50: "#151127",
        100: "#22143B",
        200: "#2F1A4E",
        300: "#401E6A",
        400: "#572490",
        500: "#6E2AB5",
        600: "#904DCA",
        700: "#B37AE0",
        800: "#D4A8F0",
        900: "#EDD7FA",
      },
      pink: {
        50: "#231122",
        100: "#3B1430",
        200: "#501A3C",
        300: "#711E4F",
        400: "#9D2468",
        500: "#CA2A81",
        600: "#E05299",
        700: "#F37FB6",
        800: "#F8A8CB",
        900: "#FAD2E3",
      },
    },
  },
};

function genarateColorTDS() {
  var colors = [];
  for (const colorName in COLORS) {
    for (const colorOpacity in COLORS[colorName]) {
      colors.push(`${colorName}-${colorOpacity}`);
    }
  }
  if (COLORTAIWIND.length > 0) {
    for (let index = 0; index < COLORTAIWIND.length; index++) {
      const colorName = COLORTAIWIND[index];
      if (defaultColors[colorName])
        for (const colorOpacity in defaultColors[colorName]) {
          colors.push(`${colorName}-${colorOpacity}`);
        }
    }
  }
  var prefixs = [
    "ring",
    "bg",
    "border",
    "text",
    "focus:bg",
    "focus:border",
    "hover:border",
    "hover:bg",
    "disabled:bg",
    "disabled:border",
    "dark:bg",
    "dark:text",
    "dark:border",
    "dark:group-hover:text",
    "dark:hover:bg",
    "dark:hover:text",
  ];

  var result = [];
  for (let index = 0; index < prefixs.length; index++) {
    const prefix = prefixs[index];
    for (let colorIndex = 0; colorIndex < colors.length; colorIndex++) {
      const color = colors[colorIndex];
      result.push(prefix + "-" + color);
    }
  }

  return result;
}
const colorTDS = genarateColorTDS();

const SAFELISTING = [
  // 'ring-opacity-20',
  // 'focus:ring',
  // 'disabled:opacity-65',
  // 'hover:bg-primary-2',
  // 'bg-primary-2',
  // 'focus:bg-primary-2',
  // 'border-primary-2',
  // 'hover:border-primary-2',
  // 'dark:hover:bg-d-neutral-3-700',
  // 'border-b-3',
  // 'border-l-3',
  // 'border-r-3',
  // 'border-t-3',
  // 'border-3',
  // 'h-2',
  // 'w-2',
  // ...colorTDS
];
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tds-ui/fesm2015/*.mjs",
  ],
  safelist: SAFELISTING,
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        60: 60,
        9999: 9999,
        1000: 1000,
      },
      colors: {
        ...COLORS,
      },
      ringColor: {
        ...COLORS,
      },
      borderColor: {
        ...COLORS,
      },
      boxShadow: {
        primary: "0px 0px 0px 3px rgba(40, 167, 69, 0.2)",
        success: "0px 0px 0px 3px rgba(40, 167, 69, 0.2)",
        error: "0px 0px 0px 3px rgba(235, 59, 91, 0.2)",
        info: "0px 0px 0px 3px rgba(35, 149, 255, 0.2)",
        warning: "0px 0px 0px 3px rgba(255, 193, 7, 0.2)",
        "1-lg": "0px 1px 10px rgba(29, 45, 73, 0.102)",
        "1-sm": "0px 1px 3px rgba(29, 45, 73, 0.102)",
        "1-md": "0px 1px 3px rgba(29, 45, 73, 0.102)",
        "1-xl": "0px 1px 15px rgba(29, 45, 73, 0.14)",
        box: "0px 2px 8px rgba(40, 41, 61, 0.04), 0px 16px 24px rgba(96, 97, 112, 0.16)",
      },
      minWidth: {
        5: "1.25rem",
        7: "1.75rem",
        32: "8rem",
        20: "5rem",
        100: "100px",
        170: "170px",
      },
      minHeight: {
        24: "24px",
        7: "1.75rem",
      },
      opacity: {
        65: ".65",
      },
      fontSize: {
        "heading-1": ["40px", "53px"],
        "heading-2": ["32px", "43px"],
        "heading-3": ["28px", "37px"],
        "heading-4": ["24px", "32px"],
        "header-1": ["20px", "28px"],
        "header-2": ["18px", "28px"],
        "body-1": ["16px", "24px"],
        "body-2": ["14px", "20px"],
        "title-1": ["16px", "24px"],
        "caption-1": ["13px", "20px"],
        "caption-2": ["12px", "16px"],
        "display-1": "80px",
        "display-2": "72px",
        "display-3": "64px",
        "display-4": "56px",
        "display-5": "48px",
        "display-6": "40px",
      },
      placeholderColor: {
        ...COLORS,
      },
      ringWidth: {
        3: "3px",
      },
      height: {
        sm: "30px",
        md: "34px",
        lg: "38px",
        xl: "42px",
      },
      borderRadius: {
        10: "0.625rem",
        20: "1.25rem",
      },
      fontWeight: {
        regular: 400,
      },
      borderWidth: {
        3: "3px",
      },
      spacing: {
        4.5: "18px",
      },
      backgroundImage: {
        landing:
          "radial-gradient(circle at center , var(--tw-gradient-from) 50%, transparent 50%)",
      },
      transitionProperty: {
        height: "height",
        width: "width",
      },
      transitionTimingFunction: {
        drawer: "cubic-bezier(0.23, 1, 0.32, 1)",
      },
      keyframes: {
        tdsDrawerFadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        drawer:
          "0.3s cubic-bezier(0.23, 1, 0.32, 1) 0s 1 normal none running tdsDrawerFadeIn",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require('@tailwindcss/line-clamp'),],
};

