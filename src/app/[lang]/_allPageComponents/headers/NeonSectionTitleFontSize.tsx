'use client';
import styled from 'styled-components';
import { scaleMap } from '@/styles/scaleMap/_scaleMap';
import useResponsiveResize from '@/hook-utils/useResponsiveResize';


interface NeonSectionTitleFontSizeProps {
    children: string;
    color?: string;
    fontWeight?: number;
}

const SvgWrapper = styled.div`
// border: 1px solid red;

svg text {
text-shadow:
0 0 1px #ff66cc,
0 0 2px #ff66cc,
}


`;

export default function NeonSectionTitleFontSize({
    children,
    color = '#ff4ecb',
    fontWeight = 700,
}: NeonSectionTitleFontSizeProps) {
    const { currentBreakpoint } = useResponsiveResize();
    const { NeonSectionTitleFontSize, NeonSectionTitleViewBoxMinX, NeonSectionTitleViewBoxMinY, NeonSectionTitleViewBoxWidth, NeonSectionTitleViewBoxHeight } = scaleMap[currentBreakpoint];

    return (
        <SvgWrapper>
            <svg width='100%' viewBox={`${NeonSectionTitleViewBoxMinX} ${NeonSectionTitleViewBoxMinY} ${NeonSectionTitleViewBoxWidth} ${NeonSectionTitleViewBoxHeight}`} preserveAspectRatio='xMidYMid meet'>

                <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontFamily="'Josefin Sans', sans-serif"
                    fontSize={NeonSectionTitleFontSize}
                    fontWeight={fontWeight}
                    fill={color}

                >
                    {children}
                </text>
            </svg>
        </SvgWrapper>
    )

}
