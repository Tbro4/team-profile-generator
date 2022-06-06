# Team Profile Generator

[Walkthrough video](https://youtu.be/Zi9pkvm8j0Q)

## Description

A command-line applictaion that generates an HTML file. User is prompted to fill in data about employees and that data is turned into HTML cards to quickly see all employess statistics. Minimum entry needed is Manager data (Name, ID, Email, Office Number). After that, user is promted to add an Engineer or Intern, or to Finish the application and generate the HTML file.

Data entries are passed into class constructors to build employee objects. Those objects are itterated over and data is passed to placeholders in an HTML template literal.

## Usage

Enter the following command in terminal to execute application:

```
node index.js
```

## Testing

Enter this command to run tests: (Testing is done with Jest)

```
npm test
```

![EmployeeCards](./assets/EmployeeCards.png)
