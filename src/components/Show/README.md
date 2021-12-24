A utility component to easily hide or show content based on a boolean attribute.

#### Usage

```jsx
<Show show={user.permissions.includes('round_details')}>
	<Header size={'sm'}>Round Details</Header>
	...
</Show>
```

This component is kind of experimental. You'll run into issues like this throwing an error:

```jsx
//We're checking for user object existence here, but if it's null..
<Show show={!!user}>
	//An error would be thrown here whenever user is null, because this is still technically rendered
	<Header>Hello, {user.name}</Header>
</Show>
```

I think the alternative to this would be to

```jsx
{user && getUserDetails()}
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)
