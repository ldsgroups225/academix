/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import React, {useEffect, useState} from "react";
import { enableScreens } from "react-native-screens";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import * as ScreenOrientation from "expo-screen-orientation";
import {Platform, View, Text} from "react-native";
import Store from "./src/store";
import RootNavigation from "./src/routers";
import CustomProvider from "./src/providers";
import ErrorBoundary from "./src/providers/ErrorBoundary";
import {loadFonts} from "./src/hooks";

enableScreens();

function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    if (Platform.OS !== "web") {
      async function prepare() {
        try {
          await loadFonts();
          setFontsLoaded(true);
        } catch (e) {
          console.warn(e);
        }
      }
      prepare().then(r => r);

      // TODO: Orientation Configuration
      ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.PORTRAIT_UP
      ).then(r  => r);
    }
  }, []);

  if (!fontsLoaded) {
    return <View><Text>Loading...</Text></View>;
  }

  return (
    <ErrorBoundary>
      <Provider store={Store}>
        <CustomProvider>
          <RootNavigation />
        </CustomProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
