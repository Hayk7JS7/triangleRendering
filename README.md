# triangleRendering
# AobyteIntership

Triangle Renderer
This is a JavaScript program that visually represents triangles as a group of asterisks (*). The class TriangleRender handles the creation and rendering of these triangles in the HTML DOM.

How it works
Class TriangleRender
This class accepts two parameters in its constructor - a HTML element where the triangle will be rendered, and the length of the triangle.

This class has two main methods: #triangleRenderVertically and #triangleRender. The former renders a triangle that points upwards, while the latter creates a right-aligned, upside down triangle.

The render method decides which kind of triangle to display based on the argument passed ('rotate' or 'vertical').

Event Listener
An event listener is attached to the text input field. When the value of this input field is changed and the entered value is a number, a triangle pointing upwards is rendered in the HTML element with the class .triangle.

Additionally, a "Rotate" button is created (if it doesn't exist already) which, when clicked, renders a right-aligned, upside down triangle in the HTML element with the class .rotated-triangle.

How to use
Input a number into the text field.
A triangle pointing upwards with the number of rows equal to the input number is displayed.
Click on the "Rotate" button to display a right-aligned, upside down triangle with the number of rows equal to the input number.
Note
The triangles are formed by asterisks (*) and they are symmetrical. The number of asterisks in each row of the triangle corresponds to the row number (1-indexed).
