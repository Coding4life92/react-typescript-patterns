# React Design Patterns with TypeScript

This project is a hands-on collection of **common and practical React design patterns**, implemented using **React** and **TypeScript**. The goal is to demonstrate *why*, *when*, and *how* to use each pattern in real-world React applications—with a strong focus on **reusability**, **flexibility**, and **clean APIs**.

Whether you're leveling up as a frontend engineer or preparing for interviews, this repo is meant to be both **educational** and **production-minded**.

---

## Tech Stack

- **React** (Functional Components)
- **TypeScript**
- **Modern Hooks API**
- **Vite**

---

## Design Patterns Included

The table below summarizes each pattern, its purpose, and common use cases.

| Pattern | Description | When to Use |
|-------|------------|------------|
| **Custom Hook Pattern** | Extracts reusable stateful logic into composable functions | When logic needs to be shared without altering component structure
| **Compound Components Pattern** | Components share implicit state via context, allowing flexible composition | When you want expressive JSX APIs like `<Tabs><Tab /></Tabs>` |
| **Control Props Pattern** | Gives consumers full control over component state | When a component needs to work in both controlled and uncontrolled modes |
| **Extensible Styles Pattern** | Allows styles to be extended or overridden cleanly | When building reusable UI components or design systems |
| **Higher-Order Component (HOC)** | Enhances a component by wrapping it with additional logic | When sharing behavior across multiple components |
| **Props Getters Pattern** | Exposes helper functions that merge internal logic with user props | When building flexible, accessible components (e.g., Downshift-style APIs) |
| **Render Props Pattern** | Shares logic via a function passed as a prop | When logic reuse is needed without component inheritance |

---

## Pattern Breakdown

### Custom Hook Pattern

Extracts reusable stateful logic into composable functions without changing component hierarchy.

Instead of wrapping components (like HOCs) or passing functions (like Render Props), custom hooks allow logic reuse through simple function composition.

**Example Use Case:** 
- Data fetching (useFetch)
- Form state management
- Debouncing
- Local storage syncing
- Media queries

### Compound Components Pattern
Allows components to work together by sharing state implicitly, usually through React Context.

**Example Use Case:** Tabs, Accordions, Menus

**Benefits:**
- Clean and readable JSX
- Flexible structure
- Avoids prop drilling

---

### Control Props Pattern
Enables consumers to control internal state, similar to how native inputs work.

**Example Use Case:** Custom inputs, toggles, modals

**Benefits:**
- Maximum flexibility
- Works seamlessly with external state managers

---

### Extensible Styles Pattern
Lets consumers customize styles without breaking component internals.

**Example Use Case:** Design systems, reusable UI libraries

**Benefits:**
- Safe customization
- Consistent theming
- Avoids brittle overrides

---

### Higher-Order Components (HOC)
A function that takes a component and returns a new enhanced component.

**Example Use Case:** Authentication guards, logging, data fetching

**Benefits:**
- Logic reuse
- Separation of concerns

Note: Hooks often replace HOCs today, but HOCs are still valuable to understand.

---

### Props Getters Pattern
Exposes functions that return props with internal logic already applied.

**Example Use Case:** Accessibility-heavy components (keyboard handling, ARIA props)

**Benefits:**
- Highly flexible APIs
- Prevents users from breaking internal logic

---

### Render Props Pattern
Passes a function as a prop to share stateful logic.

**Example Use Case:** Mouse tracking, async data handling

**Benefits:**
- Explicit data flow
- No hidden coupling

---

## Project Structure (Example)

```txt
src/
├── CompoundComponentsPattern/
├── ControlPropsPattern/
├── ExtensibleStylesPattern/
├── HOC/
├── PropsGettersPattern/
├── RenderPropsPattern/
├── App.tsx
└── main.tsx
```

Each folder contains:
- A focused implementation of the pattern
- A small demo or usage example
- TypeScript-first typings

---

## Goals of This Project

- Understand **when** to use each pattern
- Learn how patterns affect **API design**
- Write **scalable and maintainable** React components
- Improve confidence in **advanced React concepts**

---

## Notes

- Patterns are intentionally kept **simple and isolated**
- Code favors clarity over abstraction
- Examples are realistic but not over-engineered

---

## Contributions

This project is primarily for learning, but suggestions and improvements are always welcome.
