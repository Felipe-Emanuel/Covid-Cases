import { styled } from '@stitches/react';
import React, { HTMLAttributeReferrerPolicy, ReactNode, Ref, RefObject } from 'react';
import { blue } from '@radix-ui/colors';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

const SCROLLBAR_SIZE = 10;

const StyledScrollArea = styled(ScrollAreaPrimitive.Root, {
  width: '100%',
  height: '100%',
  borderRadius: 4,
  overflow: 'hidden',
  boxShadow: `0 2px 10px ${blue.blue3}`,
  
});

const StyledViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
});

const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: 'flex',
  userSelect: 'none',
  touchAction: 'none',
  padding: 2,
  background: 'transparent',
  transition: 'background 160ms ease-out',
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: SCROLLBAR_SIZE,
  },
});

const StyledThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: blue.blue6,
  borderRadius: SCROLLBAR_SIZE,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 44,
    minHeight: 44,
  },
});

const StyledCorner = styled(ScrollAreaPrimitive.Corner, {
  background: 'transparent',
});

export const ScrollArea = StyledScrollArea;
export const ScrollAreaViewport = StyledViewport;
export const ScrollAreaScrollbar = StyledScrollbar;
export const ScrollAreaThumb = StyledThumb;
export const ScrollAreaCorner = StyledCorner;

const Box = styled('div', {});
const Text = styled('div', {
  color: blue.blue10,
  width: '100%',
  fontSize: '',
  lineHeight: '18px',
  fontWeight: 500,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  text: 'ellipsis',

});
 

export interface ScrollAreaInfoProps {
  text?: string,
  info?: ReactNode,
  className?: string,
  ref?: any,
}

const ScrollAreaInfo = ({ text, info }: ScrollAreaInfoProps) => (

  <ScrollArea className=''>
    <ScrollAreaViewport css={{ backgroundColor: 'white' }}>
      <Box style={{ padding: '15px 20px'}}>
          <Text className='
            z-10 absolute top-0 bg-white h-[30%] text-[10px]
            sm:h-[10%] sm:text-[12px]
            lg:text-[14px]'
            >
            {text}
          </Text>
            {info}
      </Box>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar orientation="vertical">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar orientation="horizontal">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
  </ScrollArea>
);

export default ScrollAreaInfo;
