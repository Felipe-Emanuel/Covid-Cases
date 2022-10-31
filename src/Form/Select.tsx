import { ReactNode, SetStateAction, useEffect, useRef, useState } from 'react';
import { ScaleValue, styled } from '@stitches/react';
import { mauve, blue } from '@radix-ui/colors';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import * as SelectPrimitive from '@radix-ui/react-select';

const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 13,
  lineHeight: 1,
  height: 35,
  gap: 5,
  backgroundColor: 'white',
  color: 'BlackA',
  boxShadow: `0 2px 10px ${blue.blue8}`,
  '&:hover': { backgroundColor: blue.blue1},
  '&:focus': { boxShadow: `0 0 0 2px ${blue.blue6}` },
  '&[data-placeholder]': { color: 'blackA' },
});

const StyledIcon = styled(SelectPrimitive.SelectIcon, {
  color: 'BlackA',
});

const StyledContent = styled(SelectPrimitive.Content, {
  overflow: 'hidden',
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    `0px 10px 38px -10px ${blue.blue8}, 0px 10px 20px -15px ${blue.blue2}`,
});

const StyledViewport = styled(SelectPrimitive.Viewport, {
  padding: 5,
});

export interface ContentProps {
    children?: ReactNode
}

function Content({ children, ...props }: ContentProps) {
  return (
    <SelectPrimitive.Portal>
      <StyledContent {...props}>{children}</StyledContent>
    </SelectPrimitive.Portal>
  );
}

const StyledItem = styled(SelectPrimitive.Item, {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: blue.blue8,
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 35px 0 25px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: mauve.mauve8,
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    backgroundColor: blue.blue7,
    color: 'white',  
  },
});

const StyledLabel = styled(SelectPrimitive.Label, {
  padding: '0 25px',
  fontSize: 12,
  lineHeight: '25px',
  color: mauve.mauve11,
});

const StyledSeparator = styled(SelectPrimitive.Separator, {
  height: 1,
  backgroundColor: 'Blue',
  margin: 5,
});

const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 2,
  height: 25,
  backgroundColor: 'white',
  color: "BlackA",
  cursor: 'default',
};

const StyledScrollUpButton = styled(SelectPrimitive.ScrollUpButton, scrollButtonStyles);

const StyledScrollDownButton = styled(SelectPrimitive.ScrollDownButton, scrollButtonStyles);

export const Select = SelectPrimitive.Root;
export const SelectTrigger = StyledTrigger;
export const SelectValue = SelectPrimitive.Value;
export const SelectIcon = StyledIcon;
export const SelectContent = Content;
export const SelectViewport = StyledViewport;
export const SelectGroup = SelectPrimitive.Group;
export const SelectItem = StyledItem;
export const SelectItemText = SelectPrimitive.ItemText;
export const SelectItemIndicator = StyledItemIndicator;
export const SelectLabel = StyledLabel;
export const SelectSeparator = StyledSeparator;
export const SelectScrollUpButton = StyledScrollUpButton;
export const SelectScrollDownButton = StyledScrollDownButton;

const Box = styled('div', {});

export interface SelectDateProps {
    children?: any
    title?: any
    handleData?: any
    handleTotal?: any
  }

  export const SelectInfo = ({ title, handleData, handleTotal }: SelectDateProps) => {

    const [choise, setChoise] = useState('')

    {useEffect(() => {
      {choise === 'Specific date' ?
        handleData() :
        choise === 'Acumulated total' ?
        handleTotal() :false
      }
    }, [choise])}

  return(
    <Box className='text-center'>
    <Select onValueChange={setChoise }>
      <SelectTrigger >
        <SelectValue placeholder="Select what you want to see" />
        <SelectIcon>
          <ChevronDownIcon />
        </SelectIcon>
      </SelectTrigger>
      <SelectContent >
        <SelectScrollUpButton>
          <ChevronUpIcon />
        </SelectScrollUpButton>
        <SelectViewport className='h-10 overflow-y-hidden'>
          <SelectGroup >
            <SelectLabel className='text-center'>{title}</SelectLabel>
            <SelectItem value={'Specific date'}>
              <SelectItemText >Specific date</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value={'Acumulated total'}>
              <SelectItemText >Acumulated total</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
          </SelectGroup>
        </SelectViewport>
        <SelectScrollDownButton>
          <ChevronDownIcon />
        </SelectScrollDownButton>
      </SelectContent>
    </Select>
    </Box>
  );
}