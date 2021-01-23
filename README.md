# Test Project For Conversion

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Used [React-Modal](https://github.com/reactjs/react-modal) for manage `Modals`

Tried [Styled-Components](https://github.com/styled-components/styled-components) for `Styles`


## Start App 

Runs the app with `yarn start` in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Available Components
- **ModalComponent**: If opened shows a backdrop and a modal layer, can be closed again
and have children.
- **H1Component**: Headline of type H1
- **H2Component**: Headline of type H2
- **ParagraphComponent**: Text paragraph
- **ListComponent**: A list with optional bullets
- **ButtonComponent**: A clickable button (for demonstration you can console.log on
button click
- **LinkComponent**: A clickable link with a URL that opens in a new tab
- **BoxComponent**: A container with a visible border line that can have multiple children. 


## Handle Additional Requirements 
**Used events for handle the relation between `Button` and `Links` to open `Modal`.**

The sample of props of json file for handle events should like be:
```json
"Content": {
    "type": "ButtonComponent",
    "props": {
        "text": "Click me to open the modal",
        "action": "openModal",
        "target": "Modal"
    }
}
```
Here, `target` refers to a destination component that we wanted to change on it. 

And `action` also determines the type of functionality depend on target components.