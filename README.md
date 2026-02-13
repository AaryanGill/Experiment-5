# 🚀 Unit-5: Frontend Performance Optimization (Lazy Loading)

This repository contains the implementation of Lazy Loading techniques in React to improve frontend performance and optimize bundle size in Single Page Applications.

---

## 📌 Experiment 5.1  
### Component-Level Lazy Loading (Dashboard)

---

### 🎯 Aim  
To implement lazy loading of a Dashboard component using `React.lazy()` and `Suspense` without using routing.

---

### 📖 Overview  
In this experiment, the Dashboard component is dynamically loaded only when triggered by the user. Instead of loading all components during the initial application render, the Dashboard component is fetched only when required. A fallback UI is displayed while the component is loading.

This approach reduces the initial bundle size and improves the application's load performance.

---

### ✅ Result  
Component-level lazy loading was successfully implemented. The application now loads faster initially since the Dashboard component is not included in the main bundle until required.

---

## 📌 Experiment 5.2  
### Route-Based Lazy Loading

---

### 🎯 Aim  
To implement route-based lazy loading using `React.lazy()`, `Suspense`, and React Router DOM.

---

### 📖 Overview  
In this experiment, multiple components such as Home, About, and Dashboard are dynamically loaded based on navigation. Each route loads its respective component only when accessed. During the loading process, a fallback UI is displayed to enhance user experience.

This method enables effective code splitting and ensures optimized resource utilization.

---

### ✅ Result  
Route-based lazy loading was successfully implemented. The application performance improved through reduced initial bundle size and efficient loading of route-specific components.

---

## 🎯 Learning Outcomes

- Understood the concept of lazy loading in React.
- Implemented component-level lazy loading.
- Implemented route-based lazy loading.
- Used Suspense to provide fallback UI during loading.
- Applied code splitting to improve SPA performance.
- Strengthened knowledge of frontend performance optimization techniques.

---

## 👨‍💻 Author

**Name:** Aaryan Gill  
**Course:** B.Tech CSE (AI & ML)  
**Subject:** Frontend Development Lab  
**Unit:** Unit-5 (Frontend Performance Optimization)

---

## 📅 Submission Details

**Semester:** 4th Semester  
**Academic Year:** 2025–2026  

---

## 🔖 Version Control

Unit-5 implementation committed including Experiment 5.1 and Experiment 5.2 (Lazy Loading in React).

---

## ⭐ Status

✔ Experiment 5.1 Completed  
✔ Experiment 5.2 Completed  
✔ Performance Optimization Successfully Implemented  

---
