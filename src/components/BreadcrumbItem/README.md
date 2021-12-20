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