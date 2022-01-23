A tab navigation menu to display different views

#### Usage

```jsx
<TabNav views={[
	{
                id: 'summary',
                name: 'Summary',
                children: (...),
                onOpen: (previousView) => {...}
        },
        {
                id: 'friends',
                name: 'Friends',
                children: (...)
        }
    ]} 
        activeViewID={selectedView}>
```
