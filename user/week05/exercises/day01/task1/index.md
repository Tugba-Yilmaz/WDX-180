Requirements

Here are the color you must use:
Background color for the page: #282828
The input text color (for the user values) is: #d0d0d0
The placeholder text color is: #767676
The border color is: #4c4c4c
The border color on hover is: #8f8f8f
The border color on focus is: #7c9dbd
When there is a validation error on some input, the border color is: #862e2a
The font family for all text should be: Arial, Helvetica, sans-serif;

There should be special validation rule for this input field, so that the only permitted characters are the following: A-Z, a-z, 0-9 and the special characters !, @, \_, -, $, ( and ) along with whitespace of course. Also, there is a limit on how many characters should be permitted: maximum 30 chars. If the user has entered more than 30 characters or any non-permitted character, the input border should change to the error color (as seen in the last input example in the screenshot).

The input field must be accompanied by a special section that indicates the number of current characters along with the limit (30) as seen in the screenshot. This does not need to change dynamically. For now, you’ll just want this element to contain the text: 0/30 characters. Once you’ve learned about JavaScript, you’ll be able to dynamically update these numbers.

The input field must also be accompanied by a <label> element (as depicted in the screenshot) with the informative text: Enter your message. The <input> and <label> elements should be paired together so that when the user clicks on the label, the input should receive focus. Also, when the user hovers over the label, the input should change its border color to the appropriate focus color (see list of colors above). The label should use the same color as the input text value.

You should validate your HTML code using the W3C Validator service and make sure to fix all warnings and errors.

You should check your web page using the Chrome Lighthouse checker and make sure that you have a green score (>90%) on the Accessibility checks. If the score is lower than 90%, make sure to do any necessary fixes.
