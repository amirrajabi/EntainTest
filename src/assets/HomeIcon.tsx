import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export default function HomeIcon() {
  return (
    <View>
      <Svg>
        <Path
          fill="#000000"
          d="M27.314.72c-.768-.64-1.888-.64-2.624 0L10.514 13.648c-.8.768-.864 1.952-.096 2.784.736.8 1.952.864 2.752.096l12.8-11.712 12.864 11.68c.384.352.864.512 1.344.512.544.032 1.056-.192 1.44-.608.736-.768.64-2.048-.096-2.752L27.314.72zM14.45 16.848l2.24 12.32c.288 1.504 1.568 2.592 3.104 2.592H32.37c1.536 0 2.816-1.088 3.104-2.592l2.24-12.32L25.97 6.48 14.45 16.848zm16.832 10.56h-1.504c-.416 0-.768-.128-1.056-.384a1.56 1.56 0 01-.416-1.056v-5.856c0-.704-.192-1.184-.608-1.504s-.896-.48-1.408-.48c-.512 0-.96.16-1.376.48-.384.32-.608.8-.608 1.504v7.296h-3.008V20.72c0-1.952.512-3.264 1.536-3.936.992-.672 2.144-1.024 3.36-1.056 1.28 0 2.432.32 3.488.992 1.056.64 1.6 1.984 1.6 4v6.688z"
        />
      </Svg>
    </View>
  );
}
