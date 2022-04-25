const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

const mediaScreen = "@media screen and"

export const device = {
    mobileS: `${mediaScreen} (min-width: ${size.mobileS})`,
    mobileM: `${mediaScreen} (min-width: ${size.mobileM})`,
    mobileL: `${mediaScreen} (min-width: ${size.mobileL})`,
    tablet: `${mediaScreen} (min-width: ${size.tablet})`,
    laptop: `${mediaScreen} (min-width: ${size.laptop})`,
    laptopL: `${mediaScreen} (min-width: ${size.laptopL})`,
    desktop: `${mediaScreen} (min-width: ${size.desktop})`,
    desktopL: `${mediaScreen} (min-width: ${size.desktop})`
};
