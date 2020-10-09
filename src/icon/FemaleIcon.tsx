import * as React from 'react';
import {Path, Svg} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg height={70} viewBox="0 0 16 16" width={70}>
      <Path
        fill={props.color}
        d="M14 6c0-3.309-2.691-6-6-6S2 2.691 2 6c0 2.967 2.167 5.431 5 5.91V13H5v2h2v1h2v-1h2v-2H9v-1.09c2.833-.479 5-2.943 5-5.91zM4 6c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4-4-1.794-4-4z"
      />
    </Svg>
  );
}

const FemaleIcon = React.memo(SvgComponent);
export default FemaleIcon;
