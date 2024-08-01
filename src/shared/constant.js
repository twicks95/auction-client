export const routes = {
    login: "/authentication/buyer",
    register: "/registration",
    onboarding: "/buyer/onboarding",
    dashboard: "/buyer/dashboard",
    procurement: "/buyer/procurement",
    forgotPassword: "/authentication/forgot-password",
    newAuctionSession: (procurementId) => `/buyer/procurement/${procurementId}/auction/new`,
    BuyerAuctionNotStarted: (procurementId, auctionId) => `/buyer/procurement/${procurementId}/auction/${auctionId}/not-started`,
    BuyerAuctionOnProgress: (procurementId, auctionId) => `/buyer/procurement/${procurementId}/auction/${auctionId}/on-progress`,
}

const colors = {
    pristine: "#2EA996",
    pristineSat40: "#03D4B4",
    pristineLig40: "#A5FEF0",
    pristineGrey: "#F3F5F4",
    pristineLightGrey: "#F3F7F9",

    red100: "#FDE9EF",
    red: "#C71822",
    accentRed: "#F44437",

    yellow: "#FFD84D",
    yellowDarken: "#DFA100",

    white: "#FFFFFF",
    whiteDarken15: "#D9D9D9",
    whiteDarken30: "#909090",

    lightGrey: "#C4C4C4",
    ultraLightGrey: "#ECECEC",
    greyDarken: "#1E1E1E",
    greyDarken30: "#474747",
    greyDarken40: "#454545",

    blue: "#5DBCF9",
    blueGreyLight: "#F3F7F9",
    blueOcean100: "#E9F5FE",
    blueOcean: "#0772B6",
    blueDeepOcean: "#04446C",

    green: "#4DAF51",
    greenDarker: "#00A645",

    pink: "#FFC6C9",

    purple: "#BB6BD9",

    disabled: "#F3F5F4",
    success: "#4DAF51",
    error: "#F44437",
    info: "#2296F3",
    warning: "#FFB301",
}

// theme
export const theme = {
    colors: colors,

    buttonColor: {
        primary: {
            background: {
                active: colors.blueOcean,
                hover: colors.blueDeepOcean,
            },
            border: {
                active: colors.blueOcean,
                hover: colors.blueDeepOcean,
            },
            text: {
                active: colors.white,
                hover: colors.white,
            },
        },
        secondary: {
            background: {
                active: colors.blueOcean100,
                hover: colors.blueOcean100,
            },
            border: {
                active: colors.blueOcean,
                hover: colors.blueDeepOcean,
            },
            text: {
                active: colors.blueOcean,
                hover: colors.blueDeepOcean,
            },
        },
        disabled: {
            background: colors.pristineGrey,
            border: colors.pristineGrey,
            text: colors.whiteDarken30,
        },
        success: {
            background: {
                active: colors.green,
                hover: colors.greenDarker,
            },
            border: {
                active: colors.green,
                hover: colors.greenDarker,
            },
            text: {
                active: colors.white,
                hover: colors.white,
            },
        },
        error: {
            background: {
                active: colors.accentRed,
                hover: colors.red,
            },
            border: {
                active: colors.accentRed,
                hover: colors.red,
            },
            text: {
                active: colors.white,
                hover: colors.white,
            },
        },

        errorSecondary: {
            background: {
                active: colors.red100,
                hover: colors.red100,
            },
            border: {
                active: colors.accentRed,
                hover: colors.red,
            },
            text: {
                active: colors.accentRed,
                hover: colors.red,
            },
        },
    },

    fonts: {
        regular: "Roboto, sans-serif",
        buttons: "Open Sans, sans-serif",
        sizes: {
            h1: "24px",
            regular: "14px",
            formLabel: "14px",
            formValue: "14px",
            formHelper: "12px",
            buttonLg: "14px",
        },
    },

    borderRadius: {
        big: "45px",
        normal: "12px",
        small: "5px",
    },

    inputPadding: {
        "5px": "5px",
        "12px": "12px",
        "14px": "14px",
        "16px": "16px",
    },

    buttonHeight: {
        small: "24px",
        medium: "34px",
        large: "44px",
    },

    buttonPadding: {
        small: { x: "16px", y: "4px", css: "4px 16px" }, // top-bottom 4, left-right 16
        medium: { x: "16px", y: "10px", css: "10px 16px" }, // top-bottom 10, left-right 16
        large: "16px",
    },

    sidemenu: {
        bgColor: colors.pristineGrey,
        fontColor: colors.pristine,
        logoBorder: colors.whiteDarken15,
    },

    sidemenuSeller: {
        bgColor: colors.blueGreyLight,
        fontColor: colors.blueOcean,
        logoBorder: colors.whiteDarken15,
    },

    headermenu: {
        fontColor: colors.whiteDarken30,
        fontColorHovered: colors.pristine,
    },
}
