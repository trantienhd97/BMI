import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 21a1 1 0 001-1v-7h1.5a.5.5 0 00.5-.5v-1.09a1 1 0 00-.29-.7l-7.42-7.42a1 1 0 00-.7-.29h-3.18a1 1 0 00-.7.29l-7.42 7.42a1 1 0 00-.29.7v1.09a.5.5 0 00.5.5H4v7a1 1 0 001 1h14zM12 7.75A2.25 2.25 0 119.75 10 2.24 2.24 0 0112 7.75zm-4.89 9.893a.75.75 0 00.64.357h8.5a.75.75 0 00.65-1.09L16 15.1a2 2 0 00-1.77-1.1H9.77A2 2 0 008 15.1l-.92 1.81a.75.75 0 00.03.733z"
        fill={props.color}
      />
    </Svg>
  );
}

const HomeIconActive = React.memo(SvgComponent);
export default HomeIconActive;
