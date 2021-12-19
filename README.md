# primary-react-components

A Typescript React-JSX component and CSS/SCSS library targeting Bootstrap with the intention to simplify and standardize the
interaction with components

## Getting Started

```shell
npm install primary-react-components
```

## Usage

The library contains two primary features: A CSS/SCSS theme, and a complementary React component library.

### Theme

```ecmascript 6
//SCSS
import 'primary-react-components/dist/scss/_config.scss';
import 'primary-react-components/dist/scss/theme.scss';
```

```ecmascript 6
//CSS
import 'primary-react-components/dist/css/_config.css';
import 'primary-react-components/dist/css/theme.css';
```

### JSX/React Components

```ecmascript 6
import {Paragraph, Container} from 'primary-react-components'
```

## Components

### Alert

The standard [Bootstrap Alert](https://getbootstrap.com/docs/5.1/components/alerts/), with a few additional colors: orange, purple, and pink

#### Usage

```jsx
<Alert type={'primary'}>
    Your password is invalid
</Alert>
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript
export type AlertProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    //Hide the alert if the contents are empty
    hideIfEmpty?: boolean,
    type?: (
        'primary' | 'blue' |
        'secondary' |
        'success' | 'green' |
        'danger' | 'red' | 'error' |
        'warning' | 'yellow' |
        'orange' |
        'purple' |
        'pink' |
        'light' |
        'dark'
    )
}
```

---

### Badge

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript
export type BadgeProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    pill?: boolean,
    innerRef?: any,
    title?: string,
    color?: string,
    type?: (
        'primary' | 'blue' |
        'secondary' |
        'success' | 'green' |
        'danger' | 'red' | 'error' |
        'warning' | 'yellow' |
        'orange' | 'purple' |
        'pink' |
        'light' |
        'dark'
        ),
    size?: (
        'xs' | 'extra-small' |
        'sm' | 'small' |
        'lg' | 'large' |
        'xl' | 'extra-large'
        )
}
```

---

### Box

The box is a simple wrapper of the div element

#### Usage

```jsx
<Box style={{padding: '3px', background: 'tomato'}}>
    Your content here
</Box>
```

![image](/src/components/Box/images/example.png)

#### Types
```typescript
export type BoxProps = {
    className?: string | Array<string>,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    shadow?: boolean | 1 | 2 | 3 | 4 | 5,
    title?: string,
    onClick?: () => void,
    onMouseOver?: any,
    onMouseEnter?: any,
    onMouseLeave?: any,
    id?: string
}
```

---

### BreadcrumbContainer

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript
export type BreadcrumbContainerProps = {
    className?: string,
    innerRef?: any,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    withBackground?: boolean
}
```

---

### BreadcrumbItem

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript
export type BreadcrumbItemProps = {
    onClick?: () => void,
    href: () => void,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    active?: boolean
}
```

---

### Breadcrumbs

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript
export type BreadcrumbsProps = {
    className?: string,
    style?: React.CSSProperties,
    items: BreadcrumbItemProps[],
    onUrlChange: (url: string) => void
};
export type BreadcrumbItemProps = {
    name: string,
    url: string
}
```

---

### BreadcrumbSeparator

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript
export type BreadcrumbSeparatorProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    separator?: string
}
```

---

### Button

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript
export type ButtonProps = {
    onClick?: (ButtonProps, any) => void,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    id?: string,
    buttonType?: 'button' | 'submit',
    noDefaultType?: boolean,
    block?: boolean,
    outline?: boolean,
    title?: string,
    size?: 'xs' | 'sm' | 'md' | 'lg',
    type?: (
        'primary' | 'blue' | 'secondary' |
        'success' | 'green' |
        'danger' | 'red' | 'error' |
        'warning' | 'yellow' |
        'orange' |
        'purple' |
        'pink' |
        'light' | 'default' |
        'dark' |
        'link'
        ),
    disabled?: boolean
};
```

---

### ButtonGroup

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript
export type ButtonGroupProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    block?: boolean
}
```

---

### Card

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript
export type CardProps = {
    className?: string,
    style?: React.CSSProperties,
    isClickable?: boolean,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    shadow?: 1 | 2 | 3 | 4 | 5,
    onClick?: () => void
}
```

---

### CardBody

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript
export type CardBodyProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
}
```

---

### CardFooter

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript
export type CardFooterProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
}
```

---

### CardHeader

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript
export type CardHeaderProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any
}
```

---

### CardIcon

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript
export type CardIconProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    background?: string,
    position?: 'top' | 'bottom' | 'both',
    noPosition?: boolean,
    size?: SizeProp,
    color?: string,
    src?: string,
    alt?: string,
    icon: string
}
```

---

### CardImage

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### Clear

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### Code

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### Container

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### Form

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### FormGroup

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### Header

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### Icon

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### IconLinkCard

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### IconLinkCardList

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### Image

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### InlineSeparator

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### Input

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### InputCheckbox

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### InputDate

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### InputGroup

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### InputGroupItem

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### InputGroupText

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### InputNumber

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### InputRadio

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### InputSelect

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### InputText

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### InputTextArea

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### InputTextAreaAutoresize

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### Label

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### LabelValue

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### LineBreak

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### Link

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### ListGroup

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### ListGroupItem

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### ListItem

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### LoadingSpinner

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### Main

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### MediaBody

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### MediaContainer

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### MediaImage

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### MediaItem

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### Modal

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### ModalBody

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### ModalContent

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### ModalFooter

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### ModalHeader

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### OrderedList

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### Paragraph

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### Placeholder

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### ProgressBar

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### ProgressBarContainer

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### ProgressBarProgress

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### Recommended

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### Required

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### Row

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### Show

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### SidebarMainContainer

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### SidebarSideContainer

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### Small

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### SmartCard

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### Table

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### TableBody

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### TableData

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### TableHead

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### TableHeader

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### TableRow

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### TabNav

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### Text

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### UnorderedList

[DESCRIPTION]

#### Usage

```jsx
[DETAILS]
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---