import { useCallback, useReducer } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { onboardingData } from "../data";

type OnboardingState = {
  currentIndex: number;
  isCompleted: boolean;
};

type OnboardingAction =
  | { type: "NEXT" }
  | { type: "PREV" }
  | { type: "SET_COMPLETED" }
  | { type: "RESET" };

const initialState: OnboardingState = {
  currentIndex: 0,
  isCompleted: false,
};

const onboardingReducer = (
  state: OnboardingState,
  action: OnboardingAction
): OnboardingState => {
  switch (action.type) {
    case "NEXT":
      return {
        ...state,
        currentIndex: Math.min(
          state.currentIndex + 1,
          onboardingData.length - 1
        ),
      };
    case "PREV":
      return {
        ...state,
        currentIndex: Math.max(state.currentIndex - 1, 0),
      };
    case "SET_COMPLETED":
      return {
        ...state,
        isCompleted: true,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const useOnboardingNavigation = () => {
  const navigation = useNavigation();
  const [state, dispatch] = useReducer(onboardingReducer, initialState);

  const checkOnboardingStatus = useCallback(async () => {
    try {
      const onboardingCompleted = await AsyncStorage.getItem(
        "onboardingCompleted"
      );
      if (onboardingCompleted === "true") {
        dispatch({ type: "SET_COMPLETED" });
        // navigation.replace('MainApp');
      }
    } catch (error) {
      console.error("Error checking onboarding status:", error);
    }
  }, [navigation]);

  const handleNext = useCallback(() => {
    if (state.currentIndex < onboardingData.length - 1) {
      dispatch({ type: "NEXT" });
    } else {
      handleFinish();
    }
  }, [state.currentIndex]);

  const handlePrev = useCallback(() => {
    dispatch({ type: "PREV" });
  }, []);

  const handleFinish = useCallback(async () => {
    try {
      await AsyncStorage.setItem("onboardingCompleted", "true");
      await AsyncStorage.setItem("onboardingVersion", "1.0");
      dispatch({ type: "SET_COMPLETED" });
      // navigation.navigate('Auth');
    } catch (error) {
      console.error("Error saving onboarding status:", error);
    }
  }, [navigation]);

  return {
    currentIndex: state.currentIndex,
    isCompleted: state.isCompleted,
    handleNext,
    handlePrev,
    handleFinish,
    checkOnboardingStatus,
  };
};
