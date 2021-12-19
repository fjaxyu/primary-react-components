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

### Badge

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

### BreadcrumbContainer

### BreadcrumbItem

### Breadcrumbs

### BreadcrumbSeparator

### Button

### ButtonGroup

### Card

### CardBody

### CardFooter

### CardHeader

### CardIcon

### CardImage

### Clear

### Code

### Container

### Form

### FormGroup

### Header

### Icon

### IconLinkCard

### IconLinkCardList

### Image

### InlineSeparator

### Input

### InputCheckbox

### InputDate

### InputGroup

### InputGroupItem

### InputGroupText

### InputNumber

### InputRadio

### InputSelect

### InputText

### InputTextArea

### InputTextAreaAutoresize

### Label

### LabelValue

### LineBreak

### Link

### ListGroup

### ListGroupItem

### ListItem

### LoadingSpinner

### Main

### MediaBody

### MediaContainer

### MediaImage

### MediaItem

### Modal

### ModalBody

### ModalContent

### ModalFooter

### ModalHeader

### OrderedList

### Paragraph

### Placeholder

### ProgressBar

### ProgressBarContainer

### ProgressBarProgress

### Recommended

### Required

### Row

### Show

### SidebarMainContainer

### SidebarSideContainer

### Small

### SmartCard

### Table

### TableBody

### TableData

### TableHead

### TableHeader

### TableRow

### TabNav

### Text

### UnorderedList