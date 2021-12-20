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
