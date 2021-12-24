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
<BreadcrumbSeparator separator={'|'}/>
```

#### Types
```typescript
export type BreadcrumbSeparatorProps = {
    className?: string,
    style?: React.CSSProperties,
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
        'primary' | 'blue' |
        'secondary' |
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
export type CardImageProps = {
    src: string,
    alt?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    noPosition?: boolean,
    background?: string,
    position?: 'top' | 'bottom' | 'both'
}
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

The standard html Form wrapper

#### Usage

```jsx
<Form>...</Form>
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

An input wrapper for the label and input elements

#### Usage

```jsx
<FormGroup>
    <Label>First Name</Label>
    <Input type={'text'} placeholder={'First Name'}/>
</FormGroup>
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

A wrapper for the standard h* elements

#### Usage

```jsx
<Header size={'xl'}>Dashboard</Header>
```

There are also sizes beyond the standard h1 to h6, with "xxl" and "xxxs"

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

A standard wrapper for the html img tag

#### Usage

```jsx
<Image src={'/assets/images/mountains.png'}/>
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
export type InputNumberProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    focus?: boolean,
    mode?: string,
    //When the input changes, this function will be called
    onChange?: (string, InputNumberProps, {value, event, props}) => void,
    //The value of the input
    value?: string | number,
    autocomplete?: string,
    //The placeholder for the element
    placeholder?: string,
    //disables the input and prevents the user from entering any information
    disabled?: boolean,
    //Adds some error stylings to the input
    hasError?: boolean,
    //center the text inside the input
    textCenter?: boolean,
    innerRef?: any
};
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
export type InputRadioOption = {
    value: string,
    text: string,
    className?: string
}
export type InputRadioProps = {
    children?: React.ReactNode,
    style?: React.CSSProperties,
    className?: string | Array<string>,
    name: string,
    options: InputRadioOption[],
    onChange: (string, OptionType) => void,
    focus?: boolean,
    hasError?: boolean,
    disabled?: boolean,
    title?: string,
    value?: string | number | boolean,
    id?: string,
    ref?: any,
    innerRef?: any
}
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
export type InputSelectOption = {
    value: string,
    text: string
}
export type InputSelectProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    //When the input changes, this function will be called
    onChange?: (string, InputSelectProps, {value, event, props}) => void,
    //The list of possible radio options that the user can select from
    options?: InputSelectOption[],
    //The value of the input
    value: string | boolean | number | Record<any, unknown> | any[],
    //If true, this will set the focus automatically when the input is loaded
    focus?: boolean,
    //disables the input and prevents the user from entering any information
    disabled?: boolean,
    //Adds some error stylings to the input
    hasError?: boolean,
    innerRef?: any,
    mode?: string
};
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
export type InputTextProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    innerRef?: any,
    autocomplete?: string,
    //When the input changes, this function will be called
    onChange?: (string, InputTextProps, {value, event, props}) => void,
    onEnter?: (Record) => void,
    //The value of the input
    value?: string,
    size?: string,
    //If true, this will set the focus automatically when the input is loaded
    focus?: boolean,
    //The type of the input
    type?: string,
    //The placeholder for the element
    placeholder?: string,
    //disables the input and prevents the user from entering any information
    disabled?: boolean,
    //Adds some error stylings to the input
    hasError?: boolean,
    //center the text inside the input
    textCenter?: boolean,
    mode?: string
};
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
export type TextAreaProps = {
    className?: string | Array<string>,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    focus?: boolean,
    onChange?: (string, TextAreaProps, {value, event, props}) => void,
    onCommandEnter?: (Record) => void,
    onEnter?: (Record) => void,
    ref?: Ref<any>,
    hasError?: boolean,
    disabled?: boolean,
    autocomplete?: string,
    autosize?: boolean,
    placeholder?: string,
    value?: string,
    rows?: number,
    textCenter?: boolean,
    mode?: 'plain' | string,
    maxRows?: number,
    minRows?: number,
    onHeightChange?: (height) => void,
    cacheMeasurements?: boolean,
}
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
export type TextAreaAutoresizeProps = {
    className?: string | Array<string>,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    focus?: boolean,
    onChange?: (string, TextAreaProps, {value, event, props}) => void,
    onEnter?: (Record) => void,
    onCommandEnter?: (Record) => void,
    hasError?: boolean,
    disabled?: boolean,
    autocomplete?: string,
    autosize?: boolean,
    placeholder?: string,
    value?: string,
    rows?: number,
    textCenter?: boolean,
    mode?: 'plain' | string,
    maxRows?: number,
    minRows?: number,
    onHeightChange?: (height) => void,
    cacheMeasurements?: boolean,
}
```

---

### Label

A simple wrapper for the html label tag

#### Usage

```jsx
<Label>First Name</Label>
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)

#### Types
```typescript
export type LabelProps = {
    className?: string,
    style?: React.CSSProperties,
    onClick?: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void,
    size?: string,
    title?: string,
    innerRef?: any,
    children?: React.ReactNode
};
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
export type LabelValueProps = {
    label: string | number | React.ReactNode,
    value: string | number | React.ReactNode,
    style?: React.CSSProperties,
    size?: 'sm',
    className?: string,
    labelStyle?: React.CSSProperties,
    labelLink?: () => void,
    labelClick?: () => void,
    labelLoading?: boolean,
    valueStyle?: React.CSSProperties,
    valueLink?: () => void,
    valueClick?: () => void,
    valueLoading?: boolean,
};
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
export type LineBreakProps = {
    className?: string | Array<string>,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    noMargins?: boolean,
    noMargin?: boolean,
    clear?: boolean,
    innerRef?: any,
    blank?: boolean,
    br?: boolean
}
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
export type LinkProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    href?: () => void,
    onClick?: () => void,
    innerRef?: any,
    notHref?: boolean,
    disabled?: boolean,
    textCenter?: boolean,
    title?: string
}
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
export type ListGroupProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
};
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
export type ListGroupItemProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    onClick?: () => void,
    badge?: string,
    badgeType?: string,
    badgeColor?: string
}
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
export type ListItemProps = {
    className?: string,
    style?: React.CSSProperties,
    onClick?: () => void
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
};
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
export type LoadingSpinnerProps = {
    className?: string,
    style?: React.CSSProperties,
    size?: number,
    speed?: 'slow' | 'default' | 'fast'
};
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
export type MainProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
}
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
export type MediaBodyProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
}
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
export type MediaContainerProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    border?: boolean,
    withBorder?: boolean,
    borderBottom?: boolean,
    bordered?: boolean,
}
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
export type MediaImageProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    src: string,
    //The vertical position of the image, relative to the rest of the media body
    position?: string,
    //Whether the image appears before or after the media body
    order?: string
};
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
export type MediaItemProps = {
    className?: string,
    style?: React.CSSProperties,
    border?: boolean,
    borderBottom?: boolean,
    src: string,
    position?: string,
    children: React.ReactNode,
};
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
export type ModalProps = {
    className?: string,
    style?: React.CSSProperties,
    show: boolean,
    size?: (
        'sm' | 'small' |
        'lg' | 'large' |
        'xl' | 'extra-large'
        ),
    centered?: boolean,
    disableEscapeClose?: boolean,
    disableBackgroundClose?: boolean,
    closeModal?: () => void,
    onBackgroundClick?: () => void,
    onEscapeClick?: () => void,
    onShow?: () => void,
    onHide?: () => void,
};
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
export type ModalBodyProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
}
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
export type ModalContentProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
};
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
export type ModalFooterProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
};
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
export type ModalHeaderProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    onClose?: () => void,
    noBorder?: boolean,
    closeOnly?: boolean,
};
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
export type OrderedListProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
}
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
export type ParagraphProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    innerRef?: any,
    title?: string,
    textCenter?: boolean,
    textLeft?: boolean,
    textRight?: boolean,
    //A simple additional styling option to quickly format the text as a certain type
    type?: string,
    onClick?: (props, event) => void
};
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
export type PlaceholderProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    title?: boolean,
    block?: boolean,
    inline?: boolean,
}
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
export type ProgressBarProps = {
    height: number,
    value: number,
    color?: string,
    type?: string,
    animated?: boolean,
    striped?: boolean,
    showLabel?: boolean,
    className?: string,
    style?: React.CSSProperties,
}
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
export type ProgressBarContainerProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    height?: number,
}
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
export type ProgressBarProgressProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    color?: string,
    //Make the progress bar striped
    striped?: boolean,
    //If the progress bar is striped, this will animate it
    animated?: boolean,
    type?: string,
    innerRef?: any,
    value?: number,
    showLabel?: boolean
};
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
export type RecommendedProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
}
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
export type RequiredProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
}
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
export type RowProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
}
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
export type ShowProps = {
    show: boolean,
    children?: React.ReactNode | React.ReactNodeArray,
}
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
export type SidebarMainContainerProps = ContainerProps & {
    className?: string
    children: React.ReactNode,
    style?: React.CSSProperties,
};
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
export type SidebarSideContainerProps = ContainerProps &  {
    className?: string,
    children?: React.ReactNode,
    fixed?: boolean,
    card?: boolean,
    style?: React.CSSProperties,
};
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
export type SmallProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    title?: string,
    innerRef?: any,
}
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
export type SmartCardProps = {
    href?: () => void,
    onClick?: () => void,
    className?: string,
    style?: React.CSSProperties,
    headerStyle?: React.CSSProperties,
    footerStyle?: React.CSSProperties,
    bodyStyle?: React.CSSProperties,
    iconStyle?: React.CSSProperties,
    shadow?: CardProps['shadow'],
    position?: 'top' | 'bottom' | 'both',
    header?: string | React.ReactNode,
    footer?: string | React.ReactNode,
    children?: string | React.ReactNode,
    src?: string,
    iconSrc?: string,
    icon?: string,
    iconColor?: string,
    iconSize?: SizeProp,
    iconBackground?: string,
}
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
export type TableProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    striped?: boolean,
    hover?: boolean,
    bordered?: boolean,
    small?: boolean,
    responsive?: boolean,
    'responsive-sm'?: boolean,
    'responsive-md'?: boolean,
    'responsive-lg'?: boolean,
    'responsive-xl'?: boolean,
};
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
export type TableBodyProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
}
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
export type TableDataProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    colSpan?: number,
    colspan?: number,
    align?: 'left' | 'center' | 'right'
};
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
export type TableHeadProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
}
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
export type TableHeaderProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    align?: 'left' | 'center' | 'right'
};
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
export type TableRowProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    onClick?: () => void,
    align?: 'middle',
    innerRef?: any,
};
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
export type TabNavProps = {
    views: ViewList,
    activeViewID?: string,
    reset?: any
};
export type View = {
    id: string,
    name: React.ReactNode | string,
    children: React.ReactNode,
    onOpen?: (previousView: string) => void,
    onClose?: () => void
}
export type ViewList = View[];
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
export type TextProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    //text align to the center
    textCenter?: boolean,
    //text align to the left
    textLeft?: boolean,
    innerRef?: any,
    title?: string,
    bold?: boolean,
    italic?: boolean,
    disabled?: boolean,
    //text align to the right
    textRight?: boolean,
    //A simple additional styling option to quickly format the text as a certain type
    type?: string,
    onClick?: (props, event) => void
}
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
export type UnorderedListProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode | React.ReactNodeArray,
    innerRef?: any,
    type?: 'help',
}
```

---