import { renderHook, act } from "@testing-library/react-native";
import { useInputHandlers } from "./useInputHandlers";
import throttle from "lodash.throttle";

jest.mock("lodash.throttle", () => jest.fn());

describe("useInputHandlers", () => {
  const mockOnChangeText = jest.fn();
  const mockValidation = jest.fn();
  const mockOnFocus = jest.fn();
  const mockOnBlur = jest.fn();
  const mockSetIsFocused = jest.fn();
  const mockSetError = jest.fn();
  const mockSetSecureEntry = jest.fn();
  const mockGetSecureEntry = jest.fn();
  const mockAnimateLabel = jest.fn();
  const mockAnimateError = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockGetSecureEntry.mockReturnValue(false);
    (throttle as jest.Mock).mockImplementation((func: (text: string | null | undefined) => void) => func);
  });

  it("should call setIsFocused and animateLabel on focus", () => {
    const { result } = renderHook(() =>
      useInputHandlers({
        onChangeText: mockOnChangeText,
        validation: mockValidation,
        throttleTime: 100,
        onFocus: mockOnFocus,
        onBlur: mockOnBlur,
        setIsFocused: mockSetIsFocused,
        setError: mockSetError,
        setSecureEntry: mockSetSecureEntry,
        getSecureEntry: mockGetSecureEntry,
        animateLabel: mockAnimateLabel,
        animateError: mockAnimateError,
      })
    );
    act(() => {
      result.current.handleFocus();
    });
    expect(mockSetIsFocused).toHaveBeenCalledWith(true);
    expect(mockAnimateLabel).toHaveBeenCalledWith(1);
    expect(mockOnFocus).toHaveBeenCalledTimes(1);
  });

  it("should call setIsFocused and animateLabel on blur", () => {
    const { result } = renderHook(() =>
      useInputHandlers({
        onChangeText: mockOnChangeText,
        validation: mockValidation,
        throttleTime: 100,
        onFocus: mockOnFocus,
        onBlur: mockOnBlur,
        setIsFocused: mockSetIsFocused,
        setError: mockSetError,
        setSecureEntry: mockSetSecureEntry,
        getSecureEntry: mockGetSecureEntry,
        animateLabel: mockAnimateLabel,
        animateError: mockAnimateError,
      })
    );
    act(() => {
      result.current.handleBlur();
    });
    expect(mockSetIsFocused).toHaveBeenCalledWith(false);
    expect(mockAnimateLabel).toHaveBeenCalledWith(0);
    expect(mockOnBlur).toHaveBeenCalledTimes(1);
  });

  it("should call onChangeText and handle validation", () => {
    const { result } = renderHook(() =>
      useInputHandlers({
        onChangeText: mockOnChangeText,
        validation: mockValidation,
        throttleTime: 100,
        onFocus: mockOnFocus,
        onBlur: mockOnBlur,
        setIsFocused: mockSetIsFocused,
        setError: mockSetError,
        setSecureEntry: mockSetSecureEntry,
        getSecureEntry: mockGetSecureEntry,
        animateLabel: mockAnimateLabel,
        animateError: mockAnimateError,
      })
    );
    act(() => {
      result.current.handleChangeText("test");
    });
    expect(mockOnChangeText).toHaveBeenCalledWith("test");
    expect(mockValidation).toHaveBeenCalledWith("test");
  });

  it("should toggle secure entry", () => {
    const { result } = renderHook(() =>
      useInputHandlers({
        onChangeText: mockOnChangeText,
        validation: mockValidation,
        throttleTime: 100,
        onFocus: mockOnFocus,
        onBlur: mockOnBlur,
        setIsFocused: mockSetIsFocused,
        setError: mockSetError,
        setSecureEntry: mockSetSecureEntry,
        getSecureEntry: mockGetSecureEntry,
        animateLabel: mockAnimateLabel,
        animateError: mockAnimateError,
      })
    );
    act(() => {
      result.current.toggleSecureEntry();
    });
    expect(mockSetSecureEntry).toHaveBeenCalledWith(true);
    mockGetSecureEntry.mockReturnValue(true);
    act(() => {
      result.current.toggleSecureEntry();
    });
    expect(mockSetSecureEntry).toHaveBeenCalledWith(false);
  });

  it("should handle handleChangeText with empty string", () => {
    const { result } = renderHook(() =>
      useInputHandlers({
        onChangeText: mockOnChangeText,
        validation: mockValidation,
        throttleTime: 100,
        onFocus: mockOnFocus,
        onBlur: mockOnBlur,
        setIsFocused: mockSetIsFocused,
        setError: mockSetError,
        setSecureEntry: mockSetSecureEntry,
        getSecureEntry: mockGetSecureEntry,
        animateLabel: mockAnimateLabel,
        animateError: mockAnimateError,
      })
    );
    act(() => {
      result.current.handleChangeText("");
    });
    expect(mockOnChangeText).toHaveBeenCalledWith("");
    expect(mockValidation).toHaveBeenCalledWith("");
  });

  it("should handle handleChangeText with null", () => {
    const { result } = renderHook(() =>
      useInputHandlers({
        onChangeText: mockOnChangeText,
        validation: mockValidation,
        throttleTime: 100,
        onFocus: mockOnFocus,
        onBlur: mockOnBlur,
        setIsFocused: mockSetIsFocused,
        setError: mockSetError,
        setSecureEntry: mockSetSecureEntry,
        getSecureEntry: mockGetSecureEntry,
        animateLabel: mockAnimateLabel,
        animateError: mockAnimateError,
      })
    );
    act(() => {
      result.current.handleChangeText(null);
    });
    expect(mockOnChangeText).toHaveBeenCalledWith(null);
    expect(mockValidation).not.toHaveBeenCalled();
  });

  it("should handle handleChangeText with undefined", () => {
    const { result } = renderHook(() =>
      useInputHandlers({
        onChangeText: mockOnChangeText,
        validation: mockValidation,
        throttleTime: 100,
        onFocus: mockOnFocus,
        onBlur: mockOnBlur,
        setIsFocused: mockSetIsFocused,
        setError: mockSetError,
        setSecureEntry: mockSetSecureEntry,
        getSecureEntry: mockGetSecureEntry,
        animateLabel: mockAnimateLabel,
        animateError: mockAnimateError,
      })
    );
    act(() => {
      result.current.handleChangeText(undefined);
    });
    expect(mockOnChangeText).toHaveBeenCalledWith(undefined);
    expect(mockValidation).not.toHaveBeenCalled();
  });

  it("should handle validation error", () => {
    mockValidation.mockReturnValue("Validation error");
    const { result } = renderHook(() =>
      useInputHandlers({
        onChangeText: mockOnChangeText,
        validation: mockValidation,
        throttleTime: 100,
        onFocus: mockOnFocus,
        onBlur: mockOnBlur,
        setIsFocused: mockSetIsFocused,
        setError: mockSetError,
        setSecureEntry: mockSetSecureEntry,
        getSecureEntry: mockGetSecureEntry,
        animateLabel: mockAnimateLabel,
        animateError: mockAnimateError,
      })
    );
    act(() => {
      result.current.handleChangeText("test");
    });
    expect(mockSetError).toHaveBeenCalledWith("Validation error");
    expect(mockAnimateError).toHaveBeenCalledTimes(1);
  });

  it("should handle focus with undefined onFocus", () => {
    const { result } = renderHook(() =>
      useInputHandlers({
        onChangeText: mockOnChangeText,
        validation: mockValidation,
        throttleTime: 100,
        onFocus: undefined,
        onBlur: mockOnBlur,
        setIsFocused: mockSetIsFocused,
        setError: mockSetError,
        setSecureEntry: mockSetSecureEntry,
        getSecureEntry: mockGetSecureEntry,
        animateLabel: mockAnimateLabel,
        animateError: mockAnimateError,
      })
    );
    act(() => {
      result.current.handleFocus();
    });
    expect(mockOnFocus).not.toHaveBeenCalled();
  });

  it("should handle blur with undefined onBlur", () => {
    const { result } = renderHook(() =>
      useInputHandlers({
        onChangeText: mockOnChangeText,
        validation: mockValidation,
        throttleTime: 100,
        onFocus: mockOnFocus,
        onBlur: undefined,
        setIsFocused: mockSetIsFocused,
        setError: mockSetError,
        setSecureEntry: mockSetSecureEntry,
        getSecureEntry: mockGetSecureEntry,
        animateLabel: mockAnimateLabel,
        animateError: mockAnimateError,
      })
    );
    act(() => {
      result.current.handleBlur();
    });
    expect(mockOnBlur).not.toHaveBeenCalled();
  });

  it("should toggle secure entry with initial state true", () => {
    mockGetSecureEntry.mockReturnValue(true);
    const { result } = renderHook(() =>
      useInputHandlers({
        onChangeText: mockOnChangeText,
        validation: mockValidation,
        throttleTime: 100,
        onFocus: mockOnFocus,
        onBlur: mockOnBlur,
        setIsFocused: mockSetIsFocused,
        setError: mockSetError,
        setSecureEntry: mockSetSecureEntry,
        getSecureEntry: mockGetSecureEntry,
        animateLabel: mockAnimateLabel,
        animateError: mockAnimateError,
      })
    );
    act(() => {
      result.current.toggleSecureEntry();
    });
    expect(mockSetSecureEntry).toHaveBeenCalledWith(false);
  });

  it("should handle different throttleTimes", () => {
    const { result } = renderHook(() =>
      useInputHandlers({
        onChangeText: mockOnChangeText,
        validation: mockValidation,
        throttleTime: 200,
        onFocus: mockOnFocus,
        onBlur: mockOnBlur,
        setIsFocused: mockSetIsFocused,
        setError: mockSetError,
        setSecureEntry: mockSetSecureEntry,
        getSecureEntry: mockGetSecureEntry,
        animateLabel: mockAnimateLabel,
        animateError: mockAnimateError,
      })
    );
    act(() => {
      result.current.handleChangeText("test");
    });
    expect(mockOnChangeText).toHaveBeenCalledWith("test");
  });

  it("should handle validation returning empty string", () => {
    mockValidation.mockReturnValue("");
    const { result } = renderHook(() =>
      useInputHandlers({
        onChangeText: mockOnChangeText,
        validation: mockValidation,
        throttleTime: 100,
        onFocus: mockOnFocus,
        onBlur: mockOnBlur,
        setIsFocused: mockSetIsFocused,
        setError: mockSetError,
        setSecureEntry: mockSetSecureEntry,
        getSecureEntry: mockGetSecureEntry,
        animateLabel: mockAnimateLabel,
        animateError: mockAnimateError,
      })
    );
    act(() => {
      result.current.handleChangeText("test");
    });
    expect(mockSetError).toHaveBeenCalledWith("");
    expect(mockAnimateError).not.toHaveBeenCalled();
  });
});
