const defaultColors = require('tailwindcss/colors')
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
]

const COLORS = {
    success: {
      100: '#E9F6EC',
      200: '#DFFCE6',
      300: '#88CE97',
      400: '#28A745',
      500: '#20913A',
    },
    info: {
      100: '#E5F2FF',
        200: '#CCE7FF',
        300: '#72B7FB',
        400: '#2395FF',
        500: '#0184FF',
    },
    warning: {
      100: '#FEF6E9',
        200: '#FCF0CB',
        300: '#F8CE8B',
        400: '#FFC107',
        500: '#F3A72E',
    },
    error: {
      100: '#FDEBE9',
        200: '#FCE6EA',
        300: '#F17585',
        400: '#EB3B5B',
        500: '#DA072D ',
    },
    light: {
        50: '#F8F9FB',
        100: '#F0F1F3',
        200: '#EBEDEF',
    },
    dark: {
        600: "#2B3D4D",
        700: '#213240',
        800: "#212E39",
        900: '#131D26',

    },
    primary: {
      1: '#FF0000',
      2: '#CC0000',
      3: '#990000',
      4: '#660000',
      5: '#330000',

        
    },
    secondary: {
      1: '#0051CD',
        2: '#3E89FC'
    },
    tertiary: {
      1: "#F59E0B",
      2: "#FCD34D",
    },
    accent: {
      1: '#B5076B',
      2: '#A70000',
      3: '#F33240',
      4: '#FF8900',
      5: '#FFC400',
      6: '#28A745',
      7: '#00875A',
      8: '#0C9AB2',
      9: '#2684FF',
      10: '#034A93',
      11: '#5243AA',
      12: '#42526E'
        
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
    // background: {
    //     1: '#B5076B',
    //     1: '#B5076B',
    //     1: '#B5076B',
    //     1: '#B5076B',
    //     1: '#B5076B',
    //     1: '#B5076B',
    //     1: '#B5076B',
    //     1: '#B5076B',
    //     1: '#B5076B',
    //     1: '#B5076B',
    //     1: '#B5076B',
       
    // },
    'neutral-1': {
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
    'neutral-2': {
        50: "#F2F4F7",
        100: "#E9EDF2",
        200: "#E2E7ED",
        300: "#DFE7EC",
    },
    'neutral-3': {
      50: "#F8F9FB",
        100: "#F0F1F3",
        200: "#EBEDEF",
        300: "#E3E6E9",
        400: "#7D8DA4",
        900: "#C8D4E5",

    },
    'd-neutral-1': {
        50: "#161B22",
        100: "#21262D",
        200: "#30363D",
        300: "#A1ACB8",
        400: "#6D7681",
        500: "#8B949E",
        600: "#B1BAC4",
        700: "#C8D1D9",
        800: "#DCE4EC",
        900: "#F0F6FC",
    },
    'd-neutral-2': {
        50: "#14181C",
        100: "#1E2328",
        200: "#30363D",
        300: "#4C535B",
    },
    'd-neutral-3': {
        50: "#02040A",
        100: "#0D1116",
        200: "#161B22",
        300: "#21262D",
        400: "#30363D",

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
};

function genarateColorTDS() {
    var colors = [];
    for (const colorName in COLORS) {
        for (const colorOpacity in COLORS[colorName]) {
            colors.push(`${colorName}-${colorOpacity}`)
        }
    }
    if (COLORTAIWIND.length > 0) {

        for (let index = 0; index < COLORTAIWIND.length; index++) {
            const colorName = COLORTAIWIND[index];
            if (defaultColors[colorName])
                for (const colorOpacity in defaultColors[colorName]) {
                    colors.push(`${colorName}-${colorOpacity}`)
                }
        }
    }
    var prefixs = [
        'ring',
        'bg',
        'border',
        'text',
        'focus:bg',
        'focus:border',
        'hover:border',
        'hover:bg',
        'disabled:bg',
        'disabled:border',
        'dark:bg',
        'dark:text',
        'dark:border',
        'dark:group-hover:text',
        'dark:hover:bg',
        'dark:hover:text'
    ]

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
]
module.exports = {   
    prefix: '',   
    content: [
        './src/**/*.{html,ts}',
        './node_modules/tds-ui/fesm2015/*.{html,ts,js,mjs}'
    ],
    safelist: SAFELISTING,
    darkMode: 'class', // or 'media' or 'class'
    theme: {

        extend: {
            zIndex: {
                '60': 60,
                '9999': 9999,
                '1000': 1000
            },
            fontFamily: {
        'Inter': ['Inter', 'sans-serif'] 
            },
            colors: {
                ...COLORS
            },
            ringColor: {
                ...COLORS
            },
            borderColor: {
                ...COLORS,
            },
            boxShadow: {
                'primary': '0px 0px 0px 3px rgba(40, 167, 69, 0.2)',
                'success': '0px 0px 0px 3px rgba(40, 167, 69, 0.2)',
                'error': '0px 0px 0px 3px rgba(235, 59, 91, 0.2)',
                'info': '0px 0px 0px 3px rgba(35, 149, 255, 0.2)',
                'warning': '0px 0px 0px 3px rgba(255, 193, 7, 0.2)',
                '1-lg': '0px 1px 10px rgba(29, 45, 73, 0.102)',
                '1-sm': '0px 1px 3px rgba(29, 45, 73, 0.102)',
                '1-md': '0px 1px 3px rgba(29, 45, 73, 0.102)',
                '1-xl': '0px 1px 15px rgba(29, 45, 73, 0.14)',
            },
            minWidth: {
                '5': '1.25rem',
                '7': '1.75rem',
                '32': '8rem',
                20: '5rem',
                100: '100px',
                170: '170px',
            },
            minHeight: {
                24: "24px",
                '7': '1.75rem',
            },
            opacity: {
                '65': '.65'
            },
            fontSize: {
                'heading-1': ['40px', '53px'],
                'heading-2': ['32px', '43px'],
                'heading-3': ['28px', '37px'],
                'heading-4': ['24px', '32px'],
                'header-1': ['20px', '28px'],
                'header-2': ['18px', '28px'],
                'body-1': ['16px', '24px'],
                'body-2': ['14px', '20px'],
                'title-1': ['16px', '24px'],
                'caption-1': ['13px', '20px'],
                'caption-2': ['12px', '16px'],
                'display-1':'80px',
                'display-2':'72px',
                'display-3':'64px',
                'display-4':'56px',
                'display-5':'48px',
                'display-6':'40px',
            },
            placeholderColor: {
                ...COLORS
            },
            ringWidth: {
                '3': '3px'
            },
            height: {
              sm: "30px",
              md: "34px",
              lg: "38px",
              xl: "42px",
            },
            borderRadius: {
                '10': "0.625rem",
                '20': "1.25rem",
            },
            fontWeight: {
                regular: 400
            },
            spacing: {
              4.5: "18px",
            },
            borderWidth: {
                3: "3px"
            },
             screens: {
        'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }

            
            
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
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}; 