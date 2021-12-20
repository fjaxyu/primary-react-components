The [Bootstrap Button Group](https://getbootstrap.com/docs/5.1/components/button-group/)

#### Usage

```jsx
<ButtonGroup>
	<Button outline={selectedStatus !== 'hold'} onClick={() => setStatus('hold')}>On Hold</Button>
	<Button outline={selectedStatus !== 'available'} onClick={() => setStatus('available')}>Available</Button>
</ButtonGroup>
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)
