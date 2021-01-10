# Reasoning for the tech stack used

I have decided to use React JS to build this app, more precisely create-react-app, because it has it's own setup, works with Typescript (more safety added by using types) and using React also reflects in a very fast application, meeting the crieteria of reusability and scalability.
For styling, I have opted for styled-components as the style is scoped to component level, no risk of class names clashing if application scales up.

## The exercise

**Goal**: Production of a client-side Web application to help a child understand multiplication.

**Duration**: This test is intended to take ~2 hours but may take more

**Description**: The application will display a grid of all the numbers from 1 to 144 evenly laid out with a large clickable box around each number. The number should be centered in each box. When the child clicks a box then all the numbers which are a multiple of that number should be highlighted in some way. Clicking on a second number removes the highlighting of the previous selection, then highlights the multiples of the newly selected number.

**Constraints**: On mobile devices the grid will display 1 number per row. On tablet devices 2 numbers per row and on desktop and larger devices 3 numbers per row. The numbers should fill their rows equally. When the screen width grows very large a margin should appear either side of the grid so that the boxes don’t keep getting larger.

You do not need to use any libraries but if you do, you should be able to explain the reasons for your choices.

If there is any information that you feel is missing from the story then please make sensible decisions (for example it’s up to you how you define ‘mobile’, as long as it’s sensible, similarly please define highlighting).

**Criteria for assessment**: Important things that will be assessed are:

- Project layout.
- Coding style, i.e. your approach not whether you use semicolons or not ;)
- Your approach to unit testing/TDD
- Maintainability and extensibility
- Use of responsive design
- Performance & Accessibility
- Naming conventions used
- Meeting the requirements

The test won’t be assessed on design at all, so don’t worry how it looks.
