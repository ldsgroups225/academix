/**
 * @file Defines the spacing system for the Academix application.
 * @module Spacing
 */

/**
 * Represents the spacing values used throughout the Academix application.
 * These values are based on a 4-point grid system for consistency.
 * @readonly
 * @enum {number}
 */
const Spacing = {
  /**
   * Minuscule spacing, typically used for the tightest alignments or minimal separations.
   * @type {number}
   */
  minuscule: 2,

  /**
   * Tiny spacing, useful for very compact layouts or small component padding.
   * @type {number}
   */
  tiny: 4,

  /**
   * Small spacing, commonly used for internal component padding.
   * @type {number}
   */
  small: 8,

  /**
   * Medium spacing, ideal for separating related content or component groups.
   * @type {number}
   */
  medium: 12,

  /**
   * Standard spacing, used as the default spacing between major components.
   * @type {number}
   */
  standard: 16,

  /**
   * Large spacing, suitable for separating distinct sections or creating emphasis.
   * @type {number}
   */
  large: 24,

  /**
   * Extra large spacing, used for major section divisions or top/bottom page margins.
   * @type {number}
   */
  xLarge: 32,

  /**
   * Huge spacing, typically used for dramatic separations or hero sections.
   * @type {number}
   */
  huge: 48,

  /**
   * Enormous spacing, reserved for special cases like splash screens or full-height sections.
   * @type {number}
   */
  enormous: 64,
} as const;

/**
 * Type representing the keys of the Spacing object.
 * This allows for type-safe usage of spacing values throughout the application.
 */
export type SpacingKey = keyof typeof Spacing;

/**
 * Exports the Spacing object as the default export.
 */
export default Spacing;