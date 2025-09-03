# 📘 Fetch API Explanation

## 🔹 fetch()
- JavaScript এর built-in function
- নির্দিষ্ট URL এ একটি HTTP request পাঠায়
- Default method হলো **GET**
- Return করে একটি **Promise** (response object সহ)

---

## 🔹 .then(response => response.json())
- `response` হলো server থেকে পাওয়া raw HTTP response
- `.json()` method response body কে JSON আকারে parse করে
- এটি আবার একটি **Promise** রিটার্ন করে (parsed object সহ)

---

## 🔹 .then(json => console.log(json))
- এখানে আমরা parsed JavaScript object পাই
- `console.log(json)` → console এ data print করে
