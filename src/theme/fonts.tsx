import { Global } from "@emotion/react"

export default {
    heading: "Manrope",
    body: "Inter",
}

export const Fonts = () => (
    <Global
        styles={`
            @font-face {
                font-family: 'Manrope';
                src: url('/fonts/Manrope-VariableFont_wght.ttf') format('truetype');
                font-weight: 1 1000;
            }
            @font-face {
                font-family: 'Inter';
                src: url('/fonts/Inter-VariableFont_opsz,wght.ttf') format('truetype');
                font-weight: 1 1000;
            }
        `}
    />
)
