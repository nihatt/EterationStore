import { StatusBar, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CustomStatusBar = ({backgroundColor, barStyle}) => {
    const insets = useSafeAreaInsets();
    return (
      <View style={{height: insets.top, backgroundColor}}>
        <StatusBar
          animated={true}
          barStyle={barStyle}
          backgroundColor={backgroundColor}
        />
      </View>
    );
  };
  export default CustomStatusBar;