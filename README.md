# Personal Page — Basic Scaffold

Ini repositori berisi template personal page minimalis, modern, dan responsif.

Files:
- `index.html` — halaman utama
- `styles.css` — styling responsif (mobile-first)
- `script.js` — toggle menu dan update tahun footer

Cara mencoba lokal:

1. Buka `index.html` langsung di browser.
2. Atau jalankan server sederhana (direkomendasikan untuk fitur relatif):

```powershell
# di Windows (PowerShell)
python -m http.server 8000; Start-Process http://localhost:8000
```

Silakan beri tahu saya bagian mana yang ingin Anda ubah: palet warna, tipografi, layout proyek, atau integrasi form nyata. Saya bisa menambahkan variasi atau men-deploy ke GitHub Pages.

## Perubahan terbaru (SVG morph & Palettes)

- Replaced soft blurred div blob with an SVG-based morph (3 soft circles). The morph is GPU-friendly and controlled by JS; it respects `prefers-reduced-motion` and can be toggled off.
- Added 3 live palette swatches in the header so you can preview palettes quickly.
- Theme choices and morph state persist in `localStorage`.

### Cara pakai

- **Palette swatches**: klik salah satu swatch kecil di header untuk menerapkan palet tersebut secara instan. Pilihan akan disimpan.
- **Theme cycle**: klik tombol 🎨 di header untuk bergantian antar tema.
- **Morph toggle**: klik tombol 💫 di header untuk mengaktifkan/mematikan efek morph.

- **Morph toggle**: tombol toggle di header telah dihapus. Morph tetap aktif secara default (kecuali pengguna sebelumnya mematikannya atau menggunakan prefers-reduced-motion).

### Tempat konfigurasi cepat

- `styles.css` — ubah variabel di blok `:root` (`--accent`, `--accent-2`) untuk men-tune palet utama.
- `index.html` — setiap `section` memiliki atribut `data-morph-color1`, `data-morph-color2`, dan `data-morph-size` yang dapat Anda edit untuk mengontrol warna dan ukuran morph per-section.

### Aksesibilitas & performa

- Efek morph menghormati `prefers-reduced-motion` dan akan mati jika pengguna meminta motion berkurang.
- Jika perangkat mengalami lag, Anda dapat mengurangi `stdDeviation` pada elemen `<feGaussianBlur>` di `index.html` atau menghapus filter blur.

