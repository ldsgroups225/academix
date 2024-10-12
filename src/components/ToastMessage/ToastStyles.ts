import { ViewStyle, TextStyle } from "react-native";
import { ITheme } from "@styles/theme";

/** The height of the toast message. */
export const TOAST_HEIGHT = 120;

/**
 * Creates styles for the toast message component.
 */
export const createStyles = (theme: ITheme) => ({
    root: {
        height: TOAST_HEIGHT,
        position: "absolute" as const,
        left: 0,
        top: 0,
        right: 0,
        flexDirection: "row" as const,
        justifyContent: "flex-start" as const,
        alignItems: "center" as const,
        zIndex: 99999,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 35,
    } as ViewStyle,
    text: {
        color: theme.background,
        fontSize: 16,
    } as TextStyle,
});