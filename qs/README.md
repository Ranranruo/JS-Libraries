# Simple Query Selector

## 📘 Introduction

**Simple Query Selector** is a lightweight utility that provides shorthand functions for `querySelector` and `querySelectorAll`, using `$` and `$$`.  
It supports both global document-level and scoped element-level querying with intuitive syntax.


## ✨ Features

- ⚡ `$()` — shorthand for `document.querySelector`
- ⚡ `$$()` — shorthand for `document.querySelectorAll`
- ⚡ `element.$()` — scoped version of `querySelector`
- ⚡ `element.$$()` — scoped version of `querySelectorAll`
- 🪶 Zero dependencies, under **1KB**
- 🧠 Intuitive and beginner-friendly
- 🌍 Works in all modern browsers


## 🚀 How to Use

### ✅ CDN

Use one of the following `<script>` tags to include the library via [jsDelivr](https://www.jsdelivr.com/):

```html
<!-- Development version -->
<script src="https://cdn.jsdelivr.net/gh/Ranranruo/JS-Libraries/qs/qs.js"></script>

<!-- Minified version -->
<script src="https://cdn.jsdelivr.net/gh/Ranranruo/JS-Libraries/qs/qs.min.js"></script>

```

### ✅ Example Usage
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Simple Query Selector Demo</title>
  <script src="https://cdn.jsdelivr.net/gh/Ranranruo/JS-Libraries/qs/qs.js"></script>
</head>
<body>
  <div class="container">
    <h1>Hello</h1>
    <h2>Sub Title</h2>
  </div>
  <h2>Hi</h2>

  <script>
    const container = $(".container");
    console.log(container); // Logs the div.container

    $("h1").innerHTML = "Hi"; // Changed title

    console.log(container.$("h2").innerHTML); // Logs "Sub Title"
  </script>
</body>
</html>
```

## 📚 API Reference

### Global Functions

| Function | Description |
|----------|-------------|
| `$()`    | Shorthand for `document.querySelector(selector)` |
| `$$()`   | Shorthand for `document.querySelectorAll(selector)` |

### Element-level Methods

| Method         | Description |
|----------------|-------------|
| `element.$()`  | Shorthand for `element.querySelector(selector)` |
| `element.$$()` | Shorthand for `element.querySelectorAll(selector)` |
