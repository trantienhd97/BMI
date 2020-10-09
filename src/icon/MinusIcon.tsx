import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={24} height={24} viewBox="0 0 16 16" fill="none">
      <Path
        d="M3.333 8h9.334"
        stroke={props.color}
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const MinusIcon = React.memo(SvgComponent);
export default MinusIcon;
