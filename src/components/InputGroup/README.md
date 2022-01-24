A wrapper for the [Bootstrap Input Group](https://getbootstrap.com/docs/5.1/forms/input-group/)

#### Usage

```jsx
<InputGroup>
	<InputGroupItem type={'text'}>@</InputGroupItem>
	<Input type={'text'}
		   value={username}
		   onChange={(newUsername) => setUsername(newUsername)}/>
</InputGroup>
```