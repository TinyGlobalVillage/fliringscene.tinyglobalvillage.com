// src/components/icons/FacebookIcon.tsx
import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: currentColor;
`;

export default function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <StyledIcon
      viewBox="0 0 24 24"
      aria-label="Facebook"
      {...props}
    >
      <path d="M24 12.0736C24 5.40512 18.6274 0 12 0C5.37258 0 0 5.40512 0 12.0736C0 18.0797 4.38816 23.274 10.125 24V15.5635H7.078V12.0736H10.125V9.4224C10.125 6.40064 11.916 5.03717 14.657 5.03717C15.97 5.03717 17.3445 5.2256 17.3445 5.2256V8.18933H15.797C14.277 8.18933 13.875 8.96736 13.875 9.76608V12.0736H17.2193L16.7108 15.5635H13.875V24C19.6118 23.274 24 18.0797 24 12.0736Z" />
    </StyledIcon>
  );
}
