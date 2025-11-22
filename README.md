# Personal Web — Dhemas Dhiyanugraha Divonegara

Landing page pribadi (umur 16, mulai ngoding 2021) untuk menaruh eksperimen dan kontak. Tema utama biru/teal dengan efek morph dan typing di nama.

## Isi repo
- `index.html` – struktur halaman (hero + stats, cards capabilities, proyek, proses belajar, kontak dengan sosial).
- `styles.css` – tema, layout, efek glass, caret typing.
- `script.js` – toggle nav mobile, efek typing nama, reveal-on-scroll, morph blob.

## Menjalankan lokal
1) Buka `index.html` langsung di browser, atau  
2) Jalankan server statis:
```powershell
python -m http.server 8000
start http://localhost:8000
```

## Fitur utama
- Header fixed + nav mobile toggle.
- Typing effect pada nama di hero (hormati prefers-reduced-motion).
- Morph blob per-section mengikuti warna atribut data.
- Kartu proyek berisi link ke repo GitHub: GForm-ThreeAI, web-untuk-kelas, edutips, spmb-rank-jarak-skor, bot-tele-mj-helper, services-portofolio, test-kreplin, random-team-mobileLegend.
- Kontak lengkap dengan email `dhemasdhiyanugraha11@gmail.com`, LinkedIn, IG, dan GitHub.

## Kustomisasi cepat
- Ganti nama/teks hero di `index.html` (span `.typing-name` data-text).
- Ubah warna utama di `styles.css` (variabel `--accent` dan `--accent-2`).
- Edit data morph per-section via atribut `data-morph-color1`, `data-morph-color2`, `data-morph-size`.
- Tambah proyek baru dengan menyalin elemen `.project-card`.

## Catatan aksesibilitas
- Typing dan reveal efek akan nonaktif jika pengguna memilih reduced motion.
- Header fixed menambah `padding-top` di body supaya konten tidak tertutup.
