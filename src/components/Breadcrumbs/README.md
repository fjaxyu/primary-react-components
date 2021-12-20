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