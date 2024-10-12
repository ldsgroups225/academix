import React, { useRef } from "react";
import { Animated, Dimensions, FlatList } from "react-native";
import OnboardingSlide from "./OnboardingSlide";

const { width } = Dimensions.get("window");

interface OnboardingCarouselProps {
  data: any[];
  scrollX: Animated.Value;
  onIndexChange: (index: number) => void;
}

const OnboardingCarousel: React.FC<OnboardingCarouselProps> = ({
  data,
  scrollX,
  onIndexChange,
}) => {
  const flatListRef = useRef<FlatList>(null);

  const renderItem = ({ item }: { item: any }) => (
    <OnboardingSlide item={item} />
  );

  return (
    <FlatList
      ref={flatListRef}
      data={data}
      renderItem={renderItem}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
      onMomentumScrollEnd={(event) => {
        const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
        onIndexChange(newIndex);
      }}
    />
  );
};

export default OnboardingCarousel;
