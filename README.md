# E-Inventory

Aplikasi **E-Inventory** berbasis **CodeIgniter 4** yang menyediakan fitur login dan pengelolaan data **Kategori**, **Supplier**, dan **Barang** menggunakan REST API.

---

## Teknologi yang Digunakan

- CodeIgniter 4
- PHP
- MySQL
- Composer
- XAMPP
- REST API
- Vue.js
- Tailwind CSS

---

## 1. Clone Repository

```bash
git clone https://github.com/MNurArif/e-Inventory.git
cd e-Inventory
```

---

## 2. Install Dependency

```bash
composer install
```

---

## 3. Konfigurasi Environment

Salin file **env** menjadi **.env**

Contoh:

```bash
cp env .env
```

atau rename manual menjadi

```
.env
```

---

## 4. Konfigurasi Database

Buka file `.env`, kemudian ubah konfigurasi database berikut:

```ini
database.default.hostname = localhost
database.default.database = e_inventory
database.default.username = root
database.default.password =
database.default.DBDriver = MySQLi
```

---

## 5. Import Database

1. Buka phpMyAdmin
2. Buat database

```sql
e_inventory
```

3. Import file SQL yang tersedia pada folder database.

---

## 6. Menjalankan Aplikasi

Masuk ke folder project

```bash
cd backend-api
```

Kemudian jalankan

```bash
php spark serve
```

Jika berhasil akan muncul

```text
CodeIgniter development server started on http://localhost:8080
```

Buka browser

```
http://localhost:8080
```

---

## Login

Contoh akun login

**Username**

```
admin
```

**Password**

```
admin123
```

---

## Struktur Project

```
app
│
├── Controllers
│   ├── AuthController.php
│   ├── BarangController.php
│   ├── KategoriController.php
│   └── SupplierController.php
│
├── Models
│   ├── BarangModel.php
│   ├── KategoriModel.php
│   ├── SupplierModel.php
│   └── UserModel.php
│
├── Filters
│   └── AuthFilter.php
│
└── Config
    ├── Routes.php
    └── Filters.php
```

---

## REST API

### Authentication

| Method | Endpoint |
|---------|----------|
| POST | `/api/login` |

### Kategori

| Method | Endpoint |
|---------|----------|
| GET | `/api/kategori` |
| POST | `/api/kategori` |
| PUT | `/api/kategori/{id}` |
| DELETE | `/api/kategori/{id}` |

### Supplier

| Method | Endpoint |
|---------|----------|
| GET | `/api/supplier` |
| POST | `/api/supplier` |
| PUT | `/api/supplier/{id}` |
| DELETE | `/api/supplier/{id}` |

### Barang

| Method | Endpoint |
|---------|----------|
| GET | `/api/barang` |
| POST | `/api/barang` |
| PUT | `/api/barang/{id}` |
| DELETE | `/api/barang/{id}` |

---

## Fitur

- Login User
- Token Authentication
- CRUD Kategori
- CRUD Supplier
- CRUD Barang
- REST API
- Integrasi Database MySQL

---

## Screenshot

### Halaman Login

<img width="1920" height="838" alt="image" src="https://github.com/user-attachments/assets/6082f060-b97f-4ddc-a5ec-751e53f80d4f" />

---

### Dashboard

<img width="1920" height="838" alt="image" src="https://github.com/user-attachments/assets/40458cb2-065e-418a-9d51-03a66d2ae5dd" />

---

### Data Kategori

<img width="1920" height="837" alt="image" src="https://github.com/user-attachments/assets/92e115d3-3234-4449-b059-821c9a500e80" />

---

### Data Supplier

<img width="1920" height="837" alt="image" src="https://github.com/user-attachments/assets/04848fd5-3bee-47ea-ad7a-a32ce94461a2" />

---

### Data Barang

<img width="1920" height="837" alt="image" src="https://github.com/user-attachments/assets/e994aa23-46a5-4ff5-bb38-73fa8cfa9f2f" />

---

## Author

**Nama:** Muhamad Nur Arif Wijaya

**Mata Kuliah:** Sistem Terdistribusi

**Universitas:** Pelita Bangsa

**Tahun:** 2026

---

## Lisensi

Project ini dibuat untuk keperluan pembelajaran dan tugas kuliah.
