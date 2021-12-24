import * as React from 'react';

import {TabNavProps, View} from './types';

import Box from './../Box';
import Link from './../Link';
import Text from './../Text';

import {TypeService} from './../../services';

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//




export default function Index(props: TabNavProps) {
    let {views, activeViewID, reset} = props;

    let [hasLoaded, setHasLoaded] = React.useState(false);
    let [activeView, setActiveView] = React.useState({} as View);



    React.useEffect(() => {
        if (!hasLoaded) {
            setHasLoaded(true);
        }
    });



    React.useEffect(() => {
        if (views.length > 0) {
            if (TypeService.isObject(activeView, true) === false) {
                let defaultView = views[0];

                if (activeViewID) {
                    let foundView = getViewByID(activeViewID);

                    if (TypeService.isObject(foundView, true)) {
                        defaultView = foundView;
                    }
                }

                setActiveView(defaultView);
            }
        }
    }, [views]);



    React.useEffect(() => {
        if (hasLoaded) {
            let currentViewID = activeView?.id;

            if (currentViewID) {
                setActiveView({} as View);

                setTimeout(() => {
                    setActiveView(getViewByID(currentViewID));
                }, 50);
            }
        }
    }, [reset]);



    return (
        <Box className={'tab-nav-container'}>
            <Box className={'tab-list-container'}>
                {views.map((view, index) => {
                    let isActive = (activeView.name === view.name);
                    let TextComponent = TypeService.isString(view.name) ? ((isActive) ? Text : Link) : React.Fragment;

                    return (
                        <Box className={'tab-container ' + (isActive ? 'active' : 'inactive')}
                             key={view.id}
                             onClick={() => {
                                 if (!isActive) {
                                     if (TypeService.isFunction(activeView.onClose)) {
                                         activeView && activeView.onClose && activeView.onClose();
                                     }

                                     if (TypeService.isFunction(view.onOpen)) {
                                         view && view.onOpen && view.onOpen(view.id);
                                     }

                                     setActiveView(view);
                                 }
                             }}>

                            <TextComponent>
                                {view.name}
                            </TextComponent>
                        </Box>
                    );
                })}
            </Box>

            <Box className={'active-content-container'}>
                {activeView && activeView.children}
            </Box>
        </Box>
    );



    function getViewByID(id) {
        return views.filter((view) => view.id === id)[0];
    }
}