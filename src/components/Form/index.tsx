import * as React from 'react';

import {FormProps} from './types';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//



export default function Index(props: FormProps) {
    const classNames = getClassNames(props);

    return (
        <form className={classNames}
              style={props.style}
              data-has-on-submit={!!props.onSubmit}
              ref={props.innerRef}
              onSubmit={(event) => {
                  event.preventDefault();

                  if (props.onSubmit) {
                      props.onSubmit(props, event);
                  }
              }}>
            {props.children}
        </form>
    );
};



function getClassNames(props) {
    const classNames = [
        ''
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    return classNames.join(' ');
}