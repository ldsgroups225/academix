/**
 * @file Defines the typography system for the Academix application.
 * @module Typography
 */

import { TextStyle } from 'react-native';
import { PoppinsFontWeight } from '@assets/font';
import {ITheme} from "@styles/theme";

/**
 * Helper function to get the correct Poppins font family name
 * @param {PoppinsFontWeight} weight - The desired font weight
 * @returns {string} The correct font family name
 */
const getPoppinsFont = (weight: PoppinsFontWeight): string => {
    return `Poppins-${weight}`;
};

/**
 * Creates typography styles for the Academix application.
 * @param {ITheme} theme - The current theme
 * @returns {TextStyle} The typography styles
 */
const createTypographyStyle = (theme: ITheme): TextStyle => ({
    color: theme.foreground,
    fontFamily: 'Poppins-Regular',
});

/**
 * Defines the typography styles for the Academix application.
 */
export const Typography = {
    headline: {
        large: (theme: ITheme): TextStyle => ({
            ...createTypographyStyle(theme),
            fontFamily: getPoppinsFont('Bold'),
            fontSize: 32,
            lineHeight: 40,
        }),
        medium: (theme: ITheme): TextStyle => ({
            ...createTypographyStyle(theme),
            fontFamily: getPoppinsFont('SemiBold'),
            fontSize: 28,
            lineHeight: 36,
        }),
        small: (theme: ITheme): TextStyle => ({
            ...createTypographyStyle(theme),
            fontFamily: getPoppinsFont('SemiBold'),
            fontSize: 24,
            lineHeight: 32,
        }),
    },
    title: {
        large: (theme: ITheme): TextStyle => ({
            ...createTypographyStyle(theme),
            fontFamily: getPoppinsFont('SemiBold'),
            fontSize: 22,
            lineHeight: 28,
        }),
        medium: (theme: ITheme): TextStyle => ({
            ...createTypographyStyle(theme),
            fontFamily: getPoppinsFont('Medium'),
            fontSize: 20,
            lineHeight: 26,
        }),
        small: (theme: ITheme): TextStyle => ({
            ...createTypographyStyle(theme),
            fontFamily: getPoppinsFont('Medium'),
            fontSize: 18,
            lineHeight: 24,
        }),
    },
    body: {
        large: (theme: ITheme): TextStyle => ({
            ...createTypographyStyle(theme),
            fontSize: 16,
            lineHeight: 24,
        }),
        medium: (theme: ITheme): TextStyle => ({
            ...createTypographyStyle(theme),
            fontSize: 14,
            lineHeight: 22,
        }),
        small: (theme: ITheme): TextStyle => ({
            ...createTypographyStyle(theme),
            fontSize: 12,
            lineHeight: 20,
        }),
    },
    label: {
        large: (theme: ITheme): TextStyle => ({
            ...createTypographyStyle(theme),
            fontFamily: getPoppinsFont('Medium'),
            fontSize: 14,
            lineHeight: 20,
        }),
        medium: (theme: ITheme): TextStyle => ({
            ...createTypographyStyle(theme),
            fontFamily: getPoppinsFont('Medium'),
            fontSize: 12,
            lineHeight: 18,
        }),
        small: (theme: ITheme): TextStyle => ({
            ...createTypographyStyle(theme),
            fontFamily: getPoppinsFont('Medium'),
            fontSize: 10,
            lineHeight: 16,
        }),
    },
} as const;

/**
 * Type representing all available typography styles.
 */
export type TypographyStyle =
    | keyof typeof Typography.headline
    | keyof typeof Typography.title
    | keyof typeof Typography.body
    | keyof typeof Typography.label;

export default Typography;