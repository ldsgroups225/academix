/**
 * @file Theme definitions for the Academix app.
 * @module Theme
 */

/**
 * Represents the color theme for the Academix app.
 * @interface
 */
export interface ITheme {
    /** Main background color of the app */
    background: string;
    /** Primary text color */
    foreground: string;
    /** Background color for card elements */
    card: string;
    /** Text color for card elements */
    cardForeground: string;
    /** Background color for popover elements */
    popover: string;
    /** Text color for popover elements */
    popoverForeground: string;
    /** Primary brand color */
    primary: string;
    /** Text color on primary-colored elements */
    primaryForeground: string;
    /** Secondary brand color */
    secondary: string;
    /** Text color on secondary-colored elements */
    secondaryForeground: string;
    /** Color for muted or less prominent elements */
    muted: string;
    /** Text color for muted elements */
    mutedForeground: string;
    /** Accent color for highlights or emphasis */
    accent: string;
    /** Text color on accent-colored elements */
    accentForeground: string;
    /** Color for destructive actions or errors */
    destructive: string;
    /** Text color on destructive-colored elements */
    destructiveForeground: string;
    /** Color used for borders */
    border: string;
    /** Background color for input fields */
    input: string;
    /** Color used for focus rings or outlines */
    ring: string;
}

/**
 * Represents the light theme colors for the Academix app.
 * @type {ITheme}
 */
export const LightTheme: ITheme = {
    background: "#F4F4F4",
    foreground: "#333333",
    card: "#FFFFFF",
    cardForeground: "#333333",
    popover: "#FFFFFF",
    popoverForeground: "#333333",
    primary: "#4A90E2",
    primaryForeground: "#FFFFFF",
    secondary: "#E2A84A",
    secondaryForeground: "#FFFFFF",
    muted: "#E0E0E0",
    mutedForeground: "#666666",
    accent: "#4AE2A8",
    accentForeground: "#FFFFFF",
    destructive: "#E24A4A",
    destructiveForeground: "#FFFFFF",
    border: "#D1D1D1",
    input: "#FFFFFF",
    ring: "#4A90E2",
};

/**
 * Represents the dark theme colors for the Academix app.
 * This theme object follows the same structure as the LightTheme
 * but with colors adjusted for a dark mode appearance.
 * @type {ITheme}
 */
export const DarkTheme: ITheme = {
    background: "#1A1A1A",
    foreground: "#F4F4F4",
    card: "#2A2A2A",
    cardForeground: "#F4F4F4",
    popover: "#2A2A2A",
    popoverForeground: "#F4F4F4",
    primary: "#4A90E2",
    primaryForeground: "#FFFFFF",
    secondary: "#E2A84A",
    secondaryForeground: "#FFFFFF",
    muted: "#3A3A3A",
    mutedForeground: "#A0A0A0",
    accent: "#4AE2A8",
    accentForeground: "#FFFFFF",
    destructive: "#E24A4A",
    destructiveForeground: "#FFFFFF",
    border: "#3A3A3A",
    input: "#2A2A2A",
    ring: "#4A90E2",
};