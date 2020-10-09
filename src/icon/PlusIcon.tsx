import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 5v14M5 12h14"
        stroke={props.color}
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const PlusIcon = React.memo(SvgComponent);
export default PlusIcon;
