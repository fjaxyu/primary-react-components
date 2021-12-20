The [Bootstrap Card](https://getbootstrap.com/docs/5.1/components/card/) header container. This is not an h* tag, but a div wrapping the header content inside the card.

#### Usage

```jsx
<Card>
	<CardHeader>
            <Header size={'sm'}>{name}</Header>
	</CardHeader>

	<CardBody>
		{details}
	</CardBody>
    
	<CardFooter>
		<Button onClick={() => save()}>Save</Button>
	</CardFooter>
</Card>
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)
