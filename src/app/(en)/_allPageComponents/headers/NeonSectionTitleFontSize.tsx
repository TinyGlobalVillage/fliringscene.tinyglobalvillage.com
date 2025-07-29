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
