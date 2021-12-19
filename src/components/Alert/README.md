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
