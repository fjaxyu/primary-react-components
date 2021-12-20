The standard [Bootstrap Button](https://getbootstrap.com/docs/5.1/components/buttons/) with a few additional colors:
Orange, Purple, and Pink'

#### Usage

```jsx
<Button onClick={() => showProductModalDetails()}>Show Details</Button>
```

Set the button to be displayed as a block

```jsx
<Button block onClick={() => showProductModalDetails()}>Show Details</Button>
<Button block={true} onClick={() => showProductModalDetails()}>Show Details</Button>
```

Get the outlined version of the button

```jsx
<Button outline type={'error'} onClick={() => deleteProduct()}>Delete</Button>
<Button outline={true} type={'error'} onClick={() => deleteProduct()}>Delete</Button>
```

Quickly and easily switch the displayed mode based on a status, outlining if inactive

```jsx
<Button outline={selectedStatus !== 'hold'} onClick={() => setStatus('hold')}>On Hold</Button>
<Button outline={selectedStatus !== 'available'} onClick={() => setStatus('available')}>Available</Button>
```

Easily disable buttons in a form

```jsx
<Button disabled={formIsDisabled} onClick={() => submitForm()}>Submit</Button>
```

If the button is inside of a Form element and the Form element has an onSubmit, you can set buttonType to "submit" and the form's onSubmit method will be called instead. This method generally lets you utilize the enter-key on inputs to submit the form as well.

```jsx
<Form onSubmit={() => submitForm()}>
    ...
    <Button buttonType={'submit'}>Submit</Button>
</Form>
```

[//]: # (![image]&#40;/src/components/Box/images/example.png&#41;)
