# Panduan FancyDogTX Website

Dokumen ini berisi panduan lengkap untuk mengelola website FancyDogTX, termasuk cara men-deploy website dan mengedit konten.

## Daftar Isi
1. [Cara Deploy Website](#cara-deploy-website)
   - [Deploy ke Netlify](#deploy-ke-netlify)
   - [Deploy ke Vercel](#deploy-ke-vercel)
   - [Deploy ke Hosting Tradisional](#deploy-ke-hosting-tradisional)
   - [Push ke GitHub](#push-ke-github)
2. [Cara Mengedit Konten dan Gambar](#cara-mengedit-konten-dan-gambar)
   - [Struktur Folder dan File](#struktur-folder-dan-file)
   - [Mengedit Bagian Hero](#mengedit-bagian-hero)
   - [Mengedit Bagian Services](#mengedit-bagian-services)
   - [Mengedit Bagian About](#mengedit-bagian-about)
   - [Mengedit Bagian Gallery](#mengedit-bagian-gallery)
   - [Mengedit Bagian Testimonials](#mengedit-bagian-testimonials)
   - [Mengedit Bagian Contact](#mengedit-bagian-contact)
   - [Mengedit Footer](#mengedit-footer)
   - [Mengedit Meta Tags](#mengedit-meta-tags)

---

## Cara Deploy Website

### Dependencies yang Perlu Diinstal

Sebelum deploy, pastikan Anda telah menginstal semua dependencies berikut:

1. **Node.js dan npm** - Versi terbaru (minimal v14)
   ```bash
   # Cek versi
   node -v
   npm -v
   
   # Instal dependency project
   npm install
   ```

2. **Package yang dibutuhkan**:
   - React - Framework UI
   - Vite - Build tool
   - Express - Server backend
   - TailwindCSS - Styling
   - Framer Motion - Animasi
   - React Hook Form - Handling form
   - Drizzle ORM - ORM database
   - Zod - Validasi data
   - Tanstack Query - Data fetching

### Deploy ke Netlify

1. **Siapkan Repositori GitHub**
   - Push kode Anda ke repositori GitHub (lihat bagian [Push ke GitHub](#push-ke-github))

2. **Mendaftar/Login di Netlify**
   - Buka [netlify.com](https://netlify.com) dan login/daftar
   - Klik tombol "Add new site" > "Import an existing project"

3. **Hubungkan dengan GitHub**
   - Pilih GitHub sebagai penyedia Git
   - Berikan akses dan pilih repositori website FancyDogTX

4. **Konfigurasi Deploy**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

5. **Konfigurasi Environment Variables (jika diperlukan)**
   - Buka tab "Site settings" > "Environment variables"
   - Tambahkan variabel yang diperlukan:
     - `NODE_ENV=production`

6. **Deploy Site**
   - Klik "Deploy site"
   - Tunggu proses build selesai (biasanya 1-3 menit)

7. **Konfigurasi Domain (opsional)**
   - Buka tab "Domain settings"
   - Tambahkan domain kustom (misal: fancydogtx.com)
   - Ikuti petunjuk untuk update DNS settings

### Deploy ke Vercel

1. **Siapkan Repositori GitHub**
   - Push kode Anda ke repositori GitHub

2. **Mendaftar/Login di Vercel**
   - Buka [vercel.com](https://vercel.com) dan login/daftar
   - Klik tombol "Add New..." > "Project"

3. **Hubungkan dengan GitHub**
   - Pilih GitHub sebagai penyedia Git
   - Berikan akses dan pilih repositori website FancyDogTX

4. **Konfigurasi Project**
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

5. **Konfigurasi Environment Variables (jika diperlukan)**
   - Tambahkan variabel yang dibutuhkan pada bagian "Environment Variables"

6. **Deploy**
   - Klik "Deploy"
   - Tunggu proses build selesai

7. **Konfigurasi Domain (opsional)**
   - Buka tab "Settings" > "Domains"
   - Tambahkan domain kustom (misal: fancydogtx.com)
   - Ikuti petunjuk untuk update DNS records

### Deploy ke Hosting Tradisional

1. **Build Project**
   ```bash
   # Di folder project
   npm run build
   ```

2. **Persiapkan Server**
   - Pastikan hosting mendukung Node.js
   - Instal Node.js dan npm di server
   
3. **Upload File**
   - Upload seluruh folder project ke server via FTP/SFTP
   - Atau gunakan panel kontrol hosting untuk upload file

4. **Instal Dependencies dan Jalankan Server**
   ```bash
   # Di folder project pada server
   npm install --production
   npm start
   ```

5. **Konfigurasi Server**
   - Untuk Apache, buat file `.htaccess`:
     ```
     <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
     </IfModule>
     ```
   
   - Untuk Nginx, edit konfigurasi:
     ```
     server {
       listen 80;
       server_name fancydogtx.com www.fancydogtx.com;
       root /path/to/website/dist;
       index index.html;
       
       location / {
         try_files $uri $uri/ /index.html;
       }
     }
     ```

6. **Set Up Process Manager (PM2)**
   ```bash
   # Instal PM2
   npm install -g pm2
   
   # Jalankan aplikasi dengan PM2
   pm2 start server/index.js --name fancydogtx
   
   # Pastikan aplikasi restart otomatis jika server restart
   pm2 startup
   pm2 save
   ```

### Push ke GitHub

1. **Inisialisasi Git (jika belum)**
   ```bash
   git init
   ```

2. **Buat Repository di GitHub**
   - Buka [github.com](https://github.com)
   - Klik tombol "New repository"
   - Isikan nama repository (misal: fancy-dog-tx-website)
   - Klik "Create repository"

3. **Tambahkan Remote Repository**
   ```bash
   git remote add origin https://github.com/username/fancy-dog-tx-website.git
   ```

4. **Tambahkan File untuk Commit**
   ```bash
   git add .
   ```

5. **Commit Perubahan**
   ```bash
   git commit -m "Initial commit"
   ```

6. **Push ke GitHub**
   ```bash
   git push -u origin main
   ```
   Catatan: Gunakan `master` jika branch utama Anda bernama master

7. **Lakukan Push Setiap Ada Perubahan**
   ```bash
   # Setelah perubahan
   git add .
   git commit -m "Deskripsi perubahan"
   git push
   ```

## Cara Mengedit Konten dan Gambar

### Struktur Folder dan File

Website FancyDogTX menggunakan struktur folder sebagai berikut:

```
client/
├── src/
│   ├── components/     # Komponen UI utama
│   │   ├── Hero.tsx    # Section hero/banner
│   │   ├── Services.tsx # Section layanan
│   │   ├── About.tsx   # Section tentang
│   │   ├── Gallery.tsx # Section galeri
│   │   ├── Testimonials.tsx # Section testimonial
│   │   ├── Contact.tsx # Section kontak
│   │   ├── Footer.tsx  # Footer website
│   │   └── Header.tsx  # Header/navbar website
│   ├── lib/            # Utilities, hooks, dll
│   └── index.css       # CSS utama
└── index.html          # File HTML utama dengan meta tags
```

### Mengedit Bagian Hero

Bagian hero/banner adalah gambar utama di bagian atas website dengan teks dan tombol call to action.

1. **File yang perlu diedit**: `client/src/components/Hero.tsx`

2. **Mengedit Teks Heading & Subheading**:
   ```jsx
   // Cari bagian ini
   <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 text-white">
     Mobile Dog Grooming <br/>
     <span className="text-secondary">Coming to Your Door</span>
   </h1>
   <p className="text-xl text-white/90 mb-8 max-w-lg">
     Professional grooming services for your furry friend in the comfort of your home.
   </p>
   
   // Ubah teks sesuai kebutuhan
   <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 text-white">
     Grooming Anjing <br/>
     <span className="text-secondary">Langsung ke Rumah Anda</span>
   </h1>
   <p className="text-xl text-white/90 mb-8 max-w-lg">
     Layanan grooming profesional untuk teman berbulu Anda di kenyamanan rumah Anda.
   </p>
   ```

3. **Mengedit Gambar Latar Belakang**:
   ```jsx
   // Cari bagian ini
   <section 
     id="home" 
     className="relative pt-20 md:pt-0 h-screen bg-cover bg-center" 
     style={{ 
       backgroundImage: "url('https://images.pexels.com/photos/2523934/pexels-photo-2523934.jpeg?auto=compress&cs=tinysrgb&w=1770&h=900&dpr=1')" 
     }}
   >
   
   // Ganti URL gambar dengan URL gambar baru
   <section 
     id="home" 
     className="relative pt-20 md:pt-0 h-screen bg-cover bg-center" 
     style={{ 
       backgroundImage: "url('https://contoh-url-gambar-baru.com/gambar-anjing.jpg')" 
     }}
   >
   ```

4. **Mengedit Tombol Call to Action**:
   ```jsx
   // Cari bagian ini
   <Button
     size="lg"
     className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8"
     onClick={() => scrollToSection('contact')}
   >
     Book Now
   </Button>
   
   // Ubah teks tombol
   <Button
     size="lg"
     className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8"
     onClick={() => scrollToSection('contact')}
   >
     Pesan Sekarang
   </Button>
   ```

### Mengedit Bagian Services

Bagian services menampilkan layanan yang ditawarkan dengan gambar, judul, deskripsi, dan harga.

1. **File yang perlu diedit**: `client/src/components/Services.tsx`

2. **Mengedit Daftar Layanan**:
   ```jsx
   // Cari bagian array services
   const services = [
     {
       image: 'https://images.pexels.com/photos/7210280/pexels-photo-7210280.jpeg?auto=compress&cs=tinysrgb&w=800&h=500',
       title: 'Mobile Grooming',
       description: 'Our fully equipped mobile grooming salon comes to your door for a stress-free experience.',
       price: 'Prices vary by breed',
       alt: 'Mobile Dog Grooming Van',
       icon: <Scissors className="h-6 w-6" />
     },
     // ... layanan lainnya
   ];
   
   // Ubah informasi dan URL gambar sesuai kebutuhan
   const services = [
     {
       image: 'https://contoh-url-gambar-baru.com/grooming-mobile.jpg',
       title: 'Grooming Mobile',
       description: 'Salon grooming mobile kami yang lengkap datang ke rumah Anda untuk pengalaman tanpa stres.',
       price: 'Harga bervariasi berdasarkan ras',
       alt: 'Van Grooming Anjing Mobile',
       icon: <Scissors className="h-6 w-6" />
     },
     // ... ubah layanan lainnya
   ];
   ```

3. **Mengedit Judul dan Subjudul Section**:
   ```jsx
   // Cari bagian ini
   <span className="text-secondary font-medium mb-2 inline-block">OUR SERVICES</span>
   <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Professional Grooming Services</h2>
   <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
     We offer a variety of mobile grooming services tailored to your pet's needs, all in the comfort of your home.
   </p>
   
   // Ubah teks
   <span className="text-secondary font-medium mb-2 inline-block">LAYANAN KAMI</span>
   <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Layanan Grooming Profesional</h2>
   <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
     Kami menawarkan berbagai layanan grooming mobile yang disesuaikan dengan kebutuhan hewan peliharaan Anda, semua di kenyamanan rumah Anda.
   </p>
   ```

### Mengedit Bagian About

Bagian about berisi informasi tentang bisnis, sejarah, dan keunggulan.

1. **File yang perlu diedit**: `client/src/components/About.tsx`

2. **Mengedit Gambar About**:
   ```jsx
   // Cari bagian ini
   <img 
     src="https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=800&h=600" 
     alt="Fancy Dog TX Mobile Grooming Van" 
     className="rounded-lg shadow-xl w-full h-auto"
   />
   
   // Ganti URL gambar
   <img 
     src="https://contoh-url-gambar-baru.com/about-image.jpg" 
     alt="Fancy Dog TX Mobile Grooming Van" 
     className="rounded-lg shadow-xl w-full h-auto"
   />
   ```

3. **Mengedit Teks Paragraf**:
   ```jsx
   // Cari paragraf seperti ini
   <p className="text-gray-700 mb-4 text-base md:text-lg">
     Fancy Dog TX was founded with a simple mission: to provide exceptional mobile grooming services that prioritize your pet's comfort and well-being. We serve the Dallas-Fort Worth metroplex, bringing our fully-equipped salon directly to your doorstep.
   </p>
   
   // Ubah teks
   <p className="text-gray-700 mb-4 text-base md:text-lg">
     Fancy Dog TX didirikan dengan misi sederhana: menyediakan layanan grooming mobile yang luar biasa yang mengutamakan kenyamanan dan kesejahteraan hewan peliharaan Anda. Kami melayani wilayah Dallas-Fort Worth, membawa salon kami yang lengkap langsung ke depan pintu Anda.
   </p>
   ```

4. **Mengedit Keunggulan Bisnis**:
   ```jsx
   // Cari array benefits
   const benefits = [
     {
       text: 'Certified Professional Groomers',
       icon: <BadgeCheck className="text-secondary h-5 w-5" />
     },
     // ... benefits lainnya
   ];
   
   // Ubah sesuai kebutuhan
   const benefits = [
     {
       text: 'Groomer Profesional Bersertifikat',
       icon: <BadgeCheck className="text-secondary h-5 w-5" />
     },
     // ... ubah benefits lainnya
   ];
   ```

### Mengedit Bagian Gallery

Bagian gallery menampilkan foto-foto hasil grooming.

1. **File yang perlu diedit**: `client/src/components/Gallery.tsx`

2. **Mengedit Gambar Gallery**:
   ```jsx
   // Cari array galleryImages
   const galleryImages = [
     {
       src: 'https://images.pexels.com/photos/5255555/pexels-photo-5255555.jpeg?auto=compress&cs=tinysrgb&w=500&h=500',
       alt: 'Groomed Bichon Frise',
       category: 'small'
     },
     // ... gambar lainnya
   ];
   
   // Ubah URL gambar dan informasi lainnya
   const galleryImages = [
     {
       src: 'https://contoh-url-gambar-baru.com/bichon-frise.jpg',
       alt: 'Bichon Frise yang di-grooming',
       category: 'small'
     },
     // ... ubah gambar lainnya
   ];
   ```

3. **Mengedit Kategori Gambar**:
   ```jsx
   // Cari array categories
   const categories = ['all', 'small', 'medium', 'large', 'mobile', 'bathing', 'grooming'];
   
   // Ubah sesuai kebutuhan
   const categories = ['semua', 'kecil', 'sedang', 'besar', 'mobile', 'mandi', 'grooming'];
   
   // Perlu juga mengubah logika tampilan kategori (jika mengubah nama kategori)
   <motion.button
     key={cat}
     onClick={() => setCategory(cat === 'semua' ? null : cat)}
     className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
       (cat === 'semua' && category === null) || category === cat
         ? 'bg-secondary text-white'
         : 'bg-white text-gray-700 hover:bg-gray-100'
     }`}
   >
     {cat.charAt(0).toUpperCase() + cat.slice(1)}
   </motion.button>
   ```

### Mengedit Bagian Testimonials

Bagian testimonials menampilkan ulasan dari pelanggan.

1. **File yang perlu diedit**: `client/src/components/Testimonials.tsx`

2. **Mengedit Daftar Testimonial**:
   ```jsx
   // Cari array testimonials
   const testimonials = [
     {
       text: "I was so impressed with Fancy Dog TX's mobile grooming service! They came right to my doorstep, and my anxious Goldendoodle Bella had such a positive experience without the stress of traveling to a salon.",
       author: "Maria R.",
       location: "Dallas, TX",
       rating: 5,
       image: "https://images.pexels.com/photos/1612846/pexels-photo-1612846.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
     },
     // ... testimonial lainnya
   ];
   
   // Ubah teks, nama, dan URL gambar
   const testimonials = [
     {
       text: "Saya sangat terkesan dengan layanan grooming mobile Fancy Dog TX! Mereka datang langsung ke rumah saya, dan Goldendoodle saya Bella yang mudah cemas memiliki pengalaman yang sangat positif tanpa stres harus pergi ke salon.",
       author: "Maria R.",
       location: "Dallas, TX",
       rating: 5,
       image: "https://contoh-url-gambar-baru.com/testimonial1.jpg"
     },
     // ... ubah testimonial lainnya
   ];
   ```

3. **Mengedit Judul Section**:
   ```jsx
   // Cari bagian ini
   <span className="text-secondary font-medium mb-2 inline-block">TESTIMONIALS</span>
   <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">What Our Clients Say</h2>
   <p className="text-lg text-gray-600 max-w-2xl mx-auto">
     Hear from the happy pet parents who trust us with their furry family members
   </p>
   
   // Ubah teks
   <span className="text-secondary font-medium mb-2 inline-block">TESTIMONI</span>
   <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Apa Kata Klien Kami</h2>
   <p className="text-lg text-gray-600 max-w-2xl mx-auto">
     Dengarkan dari para orang tua hewan peliharaan yang bahagia yang mempercayakan anggota keluarga berbulu mereka kepada kami
   </p>
   ```

### Mengedit Bagian Contact

Bagian contact berisi form kontak dan informasi kontak.

1. **File yang perlu diedit**: `client/src/components/Contact.tsx`

2. **Mengedit Informasi Kontak**:
   ```jsx
   // Cari bagian ini
   <div className="flex items-start">
     <div className="text-secondary text-xl mr-4 mt-1">
       <MapPin />
     </div>
     <div>
       <h4 className="font-bold">Serving Area</h4>
       <p className="text-gray-600">
         Dallas-Fort Worth Metroplex<br />
         Mobile Services - We Come To You!
       </p>
     </div>
   </div>
   
   // Ubah teks
   <div className="flex items-start">
     <div className="text-secondary text-xl mr-4 mt-1">
       <MapPin />
     </div>
     <div>
       <h4 className="font-bold">Area Layanan</h4>
       <p className="text-gray-600">
         Kawasan Dallas-Fort Worth<br />
         Layanan Mobile - Kami Datang Ke Tempat Anda!
       </p>
     </div>
   </div>
   ```

3. **Mengedit Form Kontak**:
   ```jsx
   // Cari bagian label form
   <FormLabel>Your Name</FormLabel>
   
   // Ubah teks label
   <FormLabel>Nama Anda</FormLabel>
   
   // Lakukan hal yang sama untuk label lainnya:
   // - Email Address -> Alamat Email
   // - Phone Number -> Nomor Telepon
   // - Pet's Name -> Nama Hewan Peliharaan
   // - Pet's Breed -> Ras Hewan Peliharaan
   // - Service Interested In -> Layanan yang Diminati
   // - Message (Optional) -> Pesan (Opsional)
   ```

4. **Mengedit Pilihan Layanan dalam Dropdown**:
   ```jsx
   // Cari bagian ini
   <SelectContent>
     <SelectItem value="bath">Bath & Brush</SelectItem>
     <SelectItem value="full-groom">Full Grooming</SelectItem>
     <SelectItem value="nail-trim">Nail Trimming</SelectItem>
     <SelectItem value="face-trim">Face Trim</SelectItem>
     <SelectItem value="deshedding">De-shedding Treatment</SelectItem>
     <SelectItem value="spa">Deluxe Spa Package</SelectItem>
   </SelectContent>
   
   // Ubah teks item
   <SelectContent>
     <SelectItem value="bath">Mandi & Sikat</SelectItem>
     <SelectItem value="full-groom">Grooming Lengkap</SelectItem>
     <SelectItem value="nail-trim">Potong Kuku</SelectItem>
     <SelectItem value="face-trim">Potong Rambut Wajah</SelectItem>
     <SelectItem value="deshedding">Perawatan Anti-Rontok</SelectItem>
     <SelectItem value="spa">Paket Spa Deluxe</SelectItem>
   </SelectContent>
   ```

### Mengedit Footer

Bagian footer berisi informasi kontak, menu link, dan copyright.

1. **File yang perlu diedit**: `client/src/components/Footer.tsx`

2. **Mengedit Teks Deskripsi**:
   ```jsx
   // Cari paragraf ini
   <p className="text-gray-400 mb-4">
     Mobile dog grooming services directly to your doorstep, serving the entire Dallas-Fort Worth metroplex area.
   </p>
   
   // Ubah teks
   <p className="text-gray-400 mb-4">
     Layanan grooming anjing mobile langsung ke depan pintu Anda, melayani seluruh kawasan metroplex Dallas-Fort Worth.
   </p>
   ```

3. **Mengedit Menu Link**:
   ```jsx
   // Cari bagian ini
   <h4 className="text-lg font-bold mb-4 flex items-center">
     <Scissors className="mr-2 h-4 w-4 text-secondary" />
     Quick Links
   </h4>
   
   // Ubah teks
   <h4 className="text-lg font-bold mb-4 flex items-center">
     <Scissors className="mr-2 h-4 w-4 text-secondary" />
     Link Cepat
   </h4>
   
   // Juga perlu mengubah teks menu jika mengubah nama halaman/section
   ```

4. **Mengedit Copyright**:
   ```jsx
   // Cari bagian ini
   <p>&copy; {new Date().getFullYear()} Fancy Dog TX. All rights reserved.</p>
   
   // Ubah teks
   <p>&copy; {new Date().getFullYear()} Fancy Dog TX. Hak cipta dilindungi undang-undang.</p>
   ```

### Mengedit Meta Tags

Meta tags penting untuk SEO dan tampilan saat website dibagikan di media sosial.

1. **File yang perlu diedit**: `client/index.html`

2. **Mengedit Title dan Description**:
   ```html
   <!-- Cari tag ini -->
   <title>Fancy Dog TX - Mobile Dog Grooming Services in DFW</title>
   <meta name="description" content="Fancy Dog TX provides premium mobile dog grooming services directly to your doorstep in the Dallas-Fort Worth metroplex. Enjoy stress-free grooming in the comfort of your home." />
   
   <!-- Ubah sesuai kebutuhan -->
   <title>Fancy Dog TX - Layanan Grooming Anjing Mobile di DFW</title>
   <meta name="description" content="Fancy Dog TX menyediakan layanan grooming anjing mobile premium langsung ke rumah Anda di kawasan metroplex Dallas-Fort Worth. Nikmati grooming tanpa stres di kenyamanan rumah Anda." />
   ```

3. **Mengedit Open Graph Tags**:
   ```html
   <!-- Cari tag ini -->
   <meta property="og:title" content="Fancy Dog TX - Mobile Dog Grooming Services" />
   <meta property="og:description" content="Premium mobile dog grooming services delivered to your doorstep in Dallas-Fort Worth. Stress-free grooming in the comfort of your home." />
   <meta property="og:image" content="https://images.pexels.com/photos/2523934/pexels-photo-2523934.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop" />
   
   <!-- Ubah sesuai kebutuhan -->
   <meta property="og:title" content="Fancy Dog TX - Layanan Grooming Anjing Mobile" />
   <meta property="og:description" content="Layanan grooming anjing mobile premium diantar ke rumah Anda di Dallas-Fort Worth. Grooming tanpa stres di kenyamanan rumah Anda." />
   <meta property="og:image" content="https://contoh-url-gambar-baru.com/og-image.jpg" />
   ```

---

Dengan panduan ini, Anda dapat mengelola dan mengubah semua aspek website FancyDogTX dengan mudah. Jika ada pertanyaan atau masalah, silakan hubungi pengembang website untuk bantuan lebih lanjut.