A labeled text value display for displaying a value and the label

#### Usage

```jsx
<LabelValue label={'Word Count'}
            value={wordCount}/>
```

A valueLoading attribute can be used if you need to get data dynamically, and want to display a placeholder until the
data is received

```jsx
<LabelValue label={'Articles Found'}
            value={articleCount}
            size={'sm'}
            valueLoading={pageIsLoading}/>
```