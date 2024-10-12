/**
 * @file Defines the Poppins font family for use in the Academix application.
 * @module PoppinsFont
 * @author Original: Ali Burhan Keskin <alikeskin@milvasoft.com>
 * @author Modified for Academix: Darius Kassi <kassidarius@gmail.com>
 */

import {
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins';

/**
 * Represents the Poppins font family with various weights.
 * @readonly
 * @enum {string}
 */
const PoppinsFont = {
  /**
   * Poppins Thin (100 weight)
   * @type {string}
   */
  Thin: Poppins_100Thin,

  /**
   * Poppins Extra Light (200 weight)
   * @type {string}
   */
  ExtraLight: Poppins_200ExtraLight,

  /**
   * Poppins Light (300 weight)
   * @type {string}
   */
  Light: Poppins_300Light,

  /**
   * Poppins Regular (400 weight)
   * @type {string}
   */
  Regular: Poppins_400Regular,

  /**
   * Poppins Medium (500 weight)
   * @type {string}
   */
  Medium: Poppins_500Medium,

  /**
   * Poppins Semi Bold (600 weight)
   * @type {string}
   */
  SemiBold: Poppins_600SemiBold,

  /**
   * Poppins Bold (700 weight)
   * @type {string}
   */
  Bold: Poppins_700Bold,

  /**
   * Poppins Extra Bold (800 weight)
   * @type {string}
   */
  ExtraBold: Poppins_800ExtraBold,

  /**
   * Poppins Black (900 weight)
   * @type {string}
   */
  Black: Poppins_900Black,
} as const;

/**
 * Type representing the keys of the PoppinsFont object.
 * This allows for type-safe usage of font weights throughout the application.
 */
export type PoppinsFontWeight = keyof typeof PoppinsFont;

export default PoppinsFont;