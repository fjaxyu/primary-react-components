The HTML select element

#### Usage

```jsx
<InputSelect value={selectedFruit}
             onChange={(newValue) => setSelectedFruit(newValue)}
             options={[
                {
                    text: 'Orange',
                    value: 'orange'
                },
                {
                    text: 'Apple',
                    value: 'apple'
                },
                {
                    text: 'Banana',
                    value: 'banana'
                }
             ]}>
```