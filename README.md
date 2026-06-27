# E-Inventory

Aplikasi **E-Inventory** berbasis **CodeIgniter 4** yang menyediakan fitur login dan pengelolaan data **Kategori**, **Supplier**, dan **Barang** menggunakan REST API.

---

## Teknologi yang Digunakan

- CodeIgniter 4
- PHP 8.x
- MySQL
- Composer
- XAMPP
- REST API
- Vue.js
- Tailwind CSS

---

## 1. Clone Repository

```bash
git clone https://github.com/MNurArif/E-Inventory.git
cd E-Inventory
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

*(Tambahkan screenshot di sini)*

---

### Dashboard

*(Tambahkan screenshot di sini)*

---

### Data Kategori

*(Tambahkan screenshot di sini)*

---

### Data Supplier

*(Tambahkan screenshot di sini)*

---

### Data Barang

*(Tambahkan screenshot di sini)*

---

## Author

**Nama:** Muhamad Nur Arif Wijaya

**Mata Kuliah:** Sistem Terdistribusi

**Universitas:** Pelita Bangsa

**Tahun:** 2026

---

## Lisensi

Project ini dibuat untuk keperluan pembelajaran dan tugas kuliah.
