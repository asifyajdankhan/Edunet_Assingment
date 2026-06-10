# Frontend UI Dev Assignment

**Author:** Md Asif Khan
**Repository:** https://github.com/asifyajdankhan/Edunet_Assingment

A Laravel-based drag-and-drop form builder that allows users to visually construct forms by dragging field types onto a canvas, reordering them, and exporting the form schema as JSON.

---

## Setup Steps

### Requirements

- PHP >= 8.1
- Composer
- Node.js & npm (for frontend assets)
- Laravel 10+

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/asifyajdankhan/Edunet_Assingment.git
cd Frontend UI Dev Assigment

# 2. Install PHP dependencies
composer install

# 3. Copy environment file
cp .env.example .env

# 4. Generate application key
php artisan key:generate

# 5. Run the development server
php artisan serve
```

Visit: **http://127.0.0.1:8000**

> No database setup or extra configuration is required. The app runs fully on `php artisan serve`.

---

## DnD Library Choice & Rationale

**Library Used:** [SortableJS](https://sortablejs.github.io/Sortable/)

**Why SortableJS?**

- **Lightweight & dependency-free** — No jQuery or additional libraries needed; works with plain JavaScript.
- **Touch support out of the box** — Works seamlessly on both desktop and mobile browsers.
- **Simple API** — Easy to integrate with Laravel Blade templates using a CDN or npm.
- **Reliable event hooks** — The `onEnd` callback makes it straightforward to capture the updated field order and serialize it into JSON for the "Next" step.
- **Active maintenance** — Well-documented with a large community, reducing the risk of compatibility issues.

---

## Assumptions Made

- The form builder is a single-page interaction — no backend database persistence is required; the JSON is generated client-side on clicking "Next".
- Only one form is built per session; there is no multi-form or save/load functionality.
- The field types available (e.g., Text Input) are pre-defined; custom field types are out of scope.
- The `required` property defaults to `false` for all newly added fields.
- The app is intended for demo/assignment purposes and does not include authentication.

---

## Sample JSON Output

The following JSON is produced when the **"Next"** button is clicked after adding fields to the form canvas:

```json
[
  {
    "label": "Text Input",
    "required": false,
    "type": "text"
  }
]
```

**Field Reference:**

| Key        | Type    | Description                              |
|------------|---------|------------------------------------------|
| `label`    | string  | Display name of the form field           |
| `required` | boolean | Whether the field is mandatory           |
| `type`     | string  | Input type (e.g., `text`, `email`, etc.) |

---

## Project Structure

```
FRONTEND UI DEV ASSIGMENT/
├── app/
├── resources/
│   └── views/        # Blade templates with SortableJS integration
├── routes/
│   └── web.php       # App routes
├── public/
├── .env.example
└── README.md
```

---

## License

This project was created as part of the Edunet Foundation assignment.
