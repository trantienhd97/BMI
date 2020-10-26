import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 20a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H2.5a.5.5 0 01-.5-.5v-2.09a1 1 0 01.29-.7l7.42-7.42a1 1 0 01.7-.29h3.18a1 1 0 01.7.29l7.42 7.42a1 1 0 01.29.7v2.09a.5.5 0 01-.5.5H20v6zM6 12.5V19h12v-6.5a.5.5 0 01.5-.5H20a.89.89 0 00-.29-.46L13.17 5h-2.34l-6.54 6.54a.89.89 0 00-.24.46H5.5a.5.5 0 01.5.5zm8-1.5a2 2 0 11-4 0 2 2 0 014 0zm-5.22 3.83l-.73 1.45a.5.5 0 00.5.72h7a.5.5 0 00.45-.72l-.78-1.45a1.5 1.5 0 00-1.34-.83h-3.76a1.5 1.5 0 00-1.34.83z"
        fill={props.color}
      />
    </Svg>
  );
}

const HomeIcon = React.memo(SvgComponent);
export default HomeIcon;
