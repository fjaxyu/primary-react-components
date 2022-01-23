The HTML radio inputs grouped to one

#### Usage

```jsx
<InputRadio  value={selectedFruit}
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