# primary-react-components

A Typescript React-JSX component and CSS/SCSS library targeting Bootstrap with the intention to simplify and standardize the
interaction with components.

The documentation for this repository is still being worked-on, but it should be functional and ready to use! Check out the types in each of the components for details on how to use the components.

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

Each of the following components will all generally have the following attributes to use:

```typescript
//Adding your own custom class names to the component 
type className = string | string[];

//Adding your own custom styles to the components
type style = React.CSSProperties;
```

Some of the components (button, badge, alerts) will also feature additional colors to those found in bootstrap: Purple, Pink, and Orange

### Alert

The standard [Bootstrap Alert](https://getbootstrap.com/docs/5.1/components/alerts/), with a few additional colors: orange, purple, and pink

#### Usage

```jsx
<Alert type={'primary'}>
    Your password is invalid
</Alert>
```

The hideIfEmpty attribute can be used to easily hide the alert if the contents are empty, for example if you're displaying an error message

```jsx
<Alert type={'error'} hideIfEmpty={true}>
    {errorMessage}
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

The standard [Bootstrap Badge](https://getbootstrap.com/docs/5.1/components/badge/), with a few additional colors: orange, purple, and pink

#### Usage

```jsx
<Badge color={'purple'}>{messageCount}</Badge>
```

Includes the pill version

```jsx
<Badge color={'orange'} type={'pill'}>{status}</Badge>
```

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

#### NOTICE

This component, the container, is used to make up a smarter component: "Breadcrumbs", which automatically generates the values and container in one. Use the Breadcrumbs component instead of this, unless you need some custom functionality beyond the smarter component.

#### Usage

```jsx
<Breadcrumb>...</Breadcrumb>
```

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

#### NOTICE

This component, the breadcrumb-item, is used to make up a smarter component: "Breadcrumbs", which automatically
generates the values and container in one. Use the Breadcrumbs component instead of this, unless you need some custom
functionality beyond the smarter component.

#### Usage

```jsx
<BreadcrumbItem onClick={() => navigate('/dashboard')}>Dashboard</BreadcrumbItem>
```

The breadcrumb item's onclick will be disabled when active is set to true, even if onclick is present

```jsx
<BreadcrumbItem onClick={() => navigate('/dashboard')} active={true}>Products</BreadcrumbItem>
```

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

The Breadcrumbs is a smart component that uses others to generate
the [Bootstrap Breadcrumbs](https://getbootstrap.com/docs/5.1/components/breadcrumb/).

#### Usage

The last item in the array of items will be automatically marked as "active" and disabled

```jsx
<Breadcrumbs items={[
                {name: 'Dashboard', url: '/dashboard'},
                {name: 'Shows', url: '/shows'},
                {name: 'Seasons', url: '/seasons?show=the_office'},
                {name: 'Episodes', url: '/seasons?show=the_office&season=1'},
                {name: 'Episode 1: Pilot', url: '/seasons?show=the_office&season=1&episode=1'},
             ]} 
             onUrlChange={(url) => navigate(url)}
             separator={'|'}/>
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript
export type BreadcrumbsProps = {
    className?: string,
    style?: React.CSSProperties,
    withBackground?: boolean,
    items: BreadcrumbItemProps[],
    onUrlChange: (url: string) => void,
    separator?: string
};
export type BreadcrumbItemProps = {
    name: string,
    url: string
}
```

---

### BreadcrumbSeparator

#### NOTICE

This component, the breadcrumb-item-separator, is used to make up a smarter component: "Breadcrumbs", which automatically
generates the values and container in one. Use the Breadcrumbs component instead of this, unless you need some custom
functionality beyond the smarter component.

#### Usage

```jsx
<BreadcrumbSeparator>|</BreadcrumbSeparator>
```

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

The standard [Bootstrap Button](https://getbootstrap.com/docs/5.1/components/buttons/) with a few additional colors:
Orange, Purple, and Pink'

#### Usage

```jsx
<Button onClick={() => showProductModalDetails()}>Show Details</Button>
```

Set the button to be displayed as a block

```jsx
<Button block onClick={() => showProductModalDetails()}>Show Details</Button>
<Button block={true} onClick={() => showProductModalDetails()}>Show Details</Button>
```

Get the outlined version of the button

```jsx
<Button outline type={'error'} onClick={() => deleteProduct()}>Delete</Button>
<Button outline={true} type={'error'} onClick={() => deleteProduct()}>Delete</Button>
```

Quickly and easily switch the displayed mode based on a status, outlining if inactive

```jsx
<Button outline={selectedStatus !== 'hold'} onClick={() => setStatus('hold')}>On Hold</Button>
<Button outline={selectedStatus !== 'available'} onClick={() => setStatus('available')}>Available</Button>
```

Easily disable buttons in a form

```jsx
<Button disabled={formIsDisabled} onClick={() => submitForm()}>Submit</Button>
```

If the button is inside of a Form element and the Form element has an onSubmit, you can set buttonType to "submit" and the form's onSubmit method will be called instead. This method generally lets you utilize the enter-key on inputs to submit the form as well.

```jsx
<Form onSubmit={() => submitForm()}>
    ...
    <Button buttonType={'submit'}>Submit</Button>
</Form>
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

The [Bootstrap Button Group](https://getbootstrap.com/docs/5.1/components/button-group/)

#### Usage

```jsx
<ButtonGroup>
	<Button outline={selectedStatus !== 'hold'} onClick={() => setStatus('hold')}>On Hold</Button>
	<Button outline={selectedStatus !== 'available'} onClick={() => setStatus('available')}>Available</Button>
</ButtonGroup>
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

The [Bootstrap Card](https://getbootstrap.com/docs/5.1/components/card/) container

#### Usage

```jsx
<Card>
	<CardHeader>
		{name}
	</CardHeader>

	<CardBody>
		{details}
	</CardBody>
    
	<CardFooter>
		<Button onClick={() => save()}>Save</Button>
	</CardFooter>
</Card>
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

The [Bootstrap Card](https://getbootstrap.com/docs/5.1/components/card/) body container

#### Usage

```jsx
<Card>
	<CardHeader>
		{name}
	</CardHeader>

	<CardBody>
		{details}
	</CardBody>
    
	<CardFooter>
		<Button onClick={() => save()}>Save</Button>
	</CardFooter>
</Card>
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

The [Bootstrap Card](https://getbootstrap.com/docs/5.1/components/card/) footer container

#### Usage

```jsx
<Card>
	<CardHeader>
		{name}
	</CardHeader>

	<CardBody>
		{details}
	</CardBody>
    
	<CardFooter>
		<Button onClick={() => save()}>Save</Button>
	</CardFooter>
</Card>
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

The [Bootstrap Card](https://getbootstrap.com/docs/5.1/components/card/) header container. This is not an h* tag, but a div wrapping the header content inside the card.

#### Usage

```jsx
<Card>
	<CardHeader>
            <Header size={'sm'}>{name}</Header>
	</CardHeader>

	<CardBody>
		{details}
	</CardBody>
    
	<CardFooter>
		<Button onClick={() => save()}>Save</Button>
	</CardFooter>
</Card>
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

The [Bootstrap Card](https://getbootstrap.com/docs/5.1/components/card/) image with a built-in font-awesome icon

#### Usage

```jsx
<Card>
	<CardIcon icon={'users'} background={'tomato'}/>

	<CardBody>
		{details}
	</CardBody>
    
	<CardFooter>
		<Button onClick={() => save()}>Save</Button>
	</CardFooter>
</Card>
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

The [Bootstrap Card](https://getbootstrap.com/docs/5.1/components/card/) image

#### Usage

```jsx
<Card>
	<CardImage src={'/assets/images/mountains.png'} position={'top'}/>

	<CardBody>
		{details}
	</CardBody>
    
	<CardFooter>
		<Button onClick={() => save()}>Save</Button>
	</CardFooter>
</Card>
```

The position is important to include, 'top', 'middle', 'bottom' and will default to 'top'. Use noPosition if it's important to not include the position details.

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript

```

---

### Clear

A utility component that inserts a div with a "clear" class, which has a css property "clear: both"

#### Usage

```jsx
<Clear/>
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript
export type ClearProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
}
```

---

### Code

A wrapper for displaying pre-formatted code

#### Usage

```jsx
<Code>
    &amp;lt&semi;p&amp;gt&semi;Sample text here...&amp;lt&semi;/p&amp;gt&semi;
</Code>
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript
export type CodeProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
};
```

---

### Container

The [Bootstrap Container](https://getbootstrap.com/docs/5.1/layout/containers/)

#### Usage

```jsx
<Container>
    ...
</Container>
```

```jsx
<Container size={'sm'}>
    ...
</Container>
```

Use the flex attribute to make the container fit to the full-width

```jsx
<Container flex>
    ...
</Container>
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript
export type ContainerProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    id?: string,
    size?: 'sm' | 'small' | 'lg' | 'large' | string,
    centerContent?: boolean,
    inline?: boolean,
    flex?: boolean,
    mode?: 'sidebar'
}
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
export type FormProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    onSubmit?: (FormProps, any) => void
}
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
export type FormGroupProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    mode?: 'plain'
}
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
export type HeaderProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    size?: (
        'extra-extra-extra-small' | 'xxxs' |
        'extra-extra-small' | 'xxs' |
        'extra-small' | 'xs' |
        'small' | 'sm' |
        'medium' | 'md' | 'default' |
        'large' | 'lg' |
        'extra-large' | 'xl' |
        'xxl' | 'extra-extra-large'
        ),
    id?: string,
    innerRef?: any,
    textCenter?: boolean,
    noTopPadding?: boolean,
    bold?: boolean,
    italic?: boolean
}
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
export type IconProps = FontAwesomeIconProps & {
    icon: string,
    size?: SizeProp,
    className?: string,
    style?: React.CSSProperties,
    noPosition?: boolean,
}
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
export type IconLinkCardProps = {
    onClick: () => void,
    icon: IconProps['icon'],
    backgroundColor: string,
    text: string,
    className?: string,
    iconColor?: IconProps['color'],
    iconStyle?: IconProps['style'],
    iconSize?: IconProps['size'],
    style?: React.CSSProperties,
    iconContainerStyle?: React.CSSProperties,
    textContainerStyle?: React.CSSProperties,
    textStyle?: React.CSSProperties,
};
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
export type IconLinkCardListProps = {
    options: IconLinkCardProps[],
    align?: 'left' | 'center' | 'right'
};
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
export type ImageProps = {
    src: string,
    alt?: string,
    className?: string,
    style?: React.CSSProperties,
    id?: string,
    title?: string,
    innerRef?: any,
    onClick?: () => void,
    clickHover?: boolean
};
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
export type InlineSeparatorProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
}
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
export type InputProps = {
    onChange: (value: string) => void,
    type: string,
    value: string | number | Date | boolean,
    options?: InputSelectOption[] | InputRadioOption[],
    onEnter?: (value: string) => void,
    onCommandEnter?: (value: string) => void,
    autocomplete?: string,
    required?: boolean,
    disabled?: boolean,
    focus?: boolean,
    name?: string,
    style?: React.CSSProperties,
    inputStyle?: React.CSSProperties,
    labelStyle?: React.CSSProperties,
    className?: string,
    mode?: 'plain',
    ref: any,
    placeholder?: string,
    helpMessage?: string,
    errorMessage?: string,
    textCenter?: boolean,
    rows?: number,
    showMessageLength?: boolean,
    maxMessageLength?: number,
    autoresize?: boolean,
    maxRows?: number,
    minRows?: number,
    onHeightChange?: (height) => void,
    cacheMeasurements?: boolean,
    label?: string,
    labelSize?: string,
}
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
export type InputCheckboxProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    //When the input changes, this function will be called
    onChange: (string, InputCheckboxProps, {value, event, props}) => void,
    //The value of the input
    value?: boolean,
    //The placeholder for the element
    placeholder?: string,
    //disables the input and prevents the user from entering any information
    disabled?: boolean,
    //Adds some error stylings to the input
    hasError?: boolean,
    //center the text inside the input
    textCenter?: boolean,
    focus?: boolean,
    innerRef?: any
};
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
export type InputDateProps = {
    className?: string,
    style?: React.CSSProperties,
    // innerRef?: React.LegacyRef<HTMLInputElement>,
    innerRef?: any,
    //When the input changes, this function will be called
    onChange?: (value) => void,
    //The value of the input
    value?: Date,
    autocomplete?: string,
    //If true, this will set the focus automatically when the input is loaded
    focus?: boolean,
    //The placeholder for the element
    placeholder?: string,
    //disables the input and prevents the user from entering any information
    disabled?: boolean,
    //Adds some error stylings to the input
    hasError?: boolean,
    //center the text inside the input
    textCenter?: boolean
};
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
export type InputGroupProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
}
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
export type InputGroupItemProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    type?: 'prepend' | 'append'
}
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
export type InputGroupTextProps = {
    className: string,
    style?: React.CSSProperties,
    innerRef?: any,
    children: React.ReactNode
};
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