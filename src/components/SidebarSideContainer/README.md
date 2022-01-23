A sidebar container sister-component, which is set to the right to display the main content in a sidebar mode

#### Usage

The Container wrapper with mode='sidebar' is necessary to make the sidebar container work

```jsx
<Container mode={'sidebar'}>
    <SidebarSideContainer>
        ...
    </SidebarSideContainer>
    
    <SidebarMainContainer>
        ...
    </SidebarMainContainer>
</Container>
```