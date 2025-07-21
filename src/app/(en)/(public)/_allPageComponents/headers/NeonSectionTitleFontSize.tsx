'use client';
import styled from 'styled-components';
import { scaleMap } from '@/styles/scaleMap';
import useResponsiveResize from '@/hook-utils/useResponsiveResize';


interface NeonSectionTitleFontSizeProps {
    children: string;
    color?: string;
    fontWeight?: number;
}

const SvgWrapper = styled.div`
// border: 1px solid red;
width: 80%;
margin-bottom: 20px;
`;

export default function NeonSectionTitleFontSize({
    children,
    color = '#ff4ecb',
    fontWeight = 700,
}: NeonSectionTitleFontSizeProps) {
    const { fontSizeKey } = useResponsiveResize();
    const { NeonSectionTitleFontSize } = scaleMap[fontSizeKey as keyof typeof scaleMap];

    return (
        <SvgWrapper>
            <svg width='100%' viewBox='0 -20 1050 100' preserveAspectRatio='xMidYMid meet'>
                <defs>
                    <filter id="neonFillGlow" x="-100%" y="-100%" width="300%" height="300%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="4.5" result="blur1"
                        />
                        <feMerge>
                            <feMergeNode in="blur1" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontFamily="'Josefin Sans', sans-serif"
                    fontSize={NeonSectionTitleFontSize}
                    fontWeight={fontWeight}
                    fill={color}
                    filter="url(#neonFillGlow"
                >
                    {children}
                </text>
            </svg>
        </SvgWrapper>
    )

}
