# 💻 List to JSON Converter

Aplikasi pengonversi daftar teks biasa (*List / CSV to JSON Converter*) berbasis JavaScript untuk mengubah baris teks baris demi baris menjadi format data JSON terstruktur.

---

## 🎯 Konsep Pembelajaran RPL / Pemrograman Web

1. **String Manipulation & Line Splitting:**
   Memecah data teks masukan berdasarkan baris baru (`\n`) serta membersihkan spasi tak berguna dengan metode `trim()` dan `filter()`.
2. **JSON Serialization (`JSON.stringify`):**
   Mengonversi array JavaScript murni ke dalam string JSON terformat rapi dengan parameter indentasi (*pretty-print*).
3. **Blob API & File Download:**
   Memanfaatkan antarmuka `Blob` dan objek URL lokal peramban untuk menyediakan fitur unduh langsung berkas berformat `.json`.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Area input textarea, dropdown format mode, & kode output JSON
├── style.css        # Desain Neobrutalism ungu-pop, area code block, dan tombol aksi
└── script.js        # Logika JSON.stringify, Blob download, & handler DOM real-time
