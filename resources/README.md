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

{{components}}