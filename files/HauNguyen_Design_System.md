# HẬU NGUYỄN — HỆ THỐNG THIẾT KẾ WEBSITE (Mobile-first)

Phong cách: **"Warm Premium Logistics"** — trắng kem, vàng ấm, xanh navy làm điểm neo tin cậy. Sạch, rộng rãi, chuyển động nhẹ và có chủ đích.

---

## 1. NGUYÊN TẮC GỐC (đọc trước)

1. **Một màu nhấn duy nhất: vàng.** Vàng chỉ dùng cho hành động chính, số liệu, đường kẻ nhấn. Dùng vàng khắp nơi thì không còn gì nổi bật.
2. **Navy làm màu chữ và nền tối.** Logo Hậu Nguyễn có navy + cam. Navy giữ nhận diện thương hiệu và cho độ tương phản đọc được. Không dùng đen thuần.
3. **Nền xen kẽ theo nhịp**: Trắng → Kem → Trắng → Navy → Kem. Mỗi section đổi nền nhẹ để mắt nhận ra ranh giới mà không cần đường kẻ cứng.
4. **Một ngôn ngữ bo góc, một hệ đổ bóng, một easing.** Mọi component dùng chung token bên dưới. Không tự chế giá trị mới.
5. **Mobile-first thật sự**: viết CSS cho 375px trước, rồi mới `min-width` mở rộng. Vùng chạm ≥ 48px.
6. **Chuyển động phục vụ nội dung**: mỗi animation phải trả lời được "nó giúp người dùng hiểu gì?". Tôn trọng `prefers-reduced-motion`.
7. **Logo là nhân vật chính**: xuất hiện ở header, hero, footer, và ở cuối video. Tên đầy đủ **CÔNG TY TNHH XÂY DỰNG VÀ DỊCH VỤ VẬN TẢI HẬU NGUYỄN** đặt ở footer và trang Giới thiệu.

---

## 2. MÀU SẮC

```css
:root {
  /* Nền */
  --white:        #FFFFFF;
  --cream-50:     #FFFCF5;   /* nền chính của trang */
  --cream-100:    #FAF4E6;   /* nền section xen kẽ, thẻ */
  --cream-200:    #F1E7CF;   /* viền nhạt, đường chia */

  /* Vàng (màu nhấn) */
  --gold-300:     #F2D27A;   /* highlight, nền badge */
  --gold-500:     #D9A21B;   /* nút chính, icon, số liệu */
  --gold-600:     #B9840F;   /* hover nút chính */
  --gold-700:     #8A610A;   /* chữ vàng trên nền sáng (đạt tương phản) */

  /* Navy (từ logo) */
  --navy-900:     #14203F;   /* nền tối, footer */
  --navy-700:     #1B2A57;   /* chữ tiêu đề */
  --navy-500:     #3B4A78;   /* chữ phụ */

  /* Chữ */
  --text:         #1B2A57;
  --text-muted:   #5B6482;   /* tương phản ~5:1 trên kem */
  --text-on-dark: #FFFCF5;

  /* Cam logo — CHỈ dùng 1–2 chỗ nhỏ (gạch chân logo, tag), không làm nút */
  --accent-orange:#E06928;
}
```

**Tỉ lệ dùng:** 60% trắng/kem · 25% navy (chữ, section tối) · 10% vàng · 5% khác.

**Quy tắc tương phản:**
- Chữ vàng `#D9A21B` trên nền trắng **không đạt** AA. Chữ vàng trên nền sáng phải dùng `--gold-700`.
- Nút vàng dùng **chữ navy** `--navy-900`, không dùng chữ trắng.
- Trên nền navy, vàng `--gold-300` đọc rất tốt.

**Gradient vàng (chỉ cho nút chính và đường nhấn):**
```css
--gradient-gold: linear-gradient(135deg, #F2D27A 0%, #D9A21B 55%, #B9840F 100%);
```

---

## 3. CHỮ (TYPOGRAPHY)

**Phải hỗ trợ tiếng Việt đầy đủ dấu.** Cặp font đề xuất:
- Tiêu đề: **Be Vietnam Pro** (600/700) hoặc **Playfair Display** (nếu muốn sang hơn)
- Nội dung: **Be Vietnam Pro** (400/500) hoặc **Inter**

```css
html { font-size: 100%; }
body { font-family: 'Be Vietnam Pro', system-ui, sans-serif;
       font-size: 1rem; line-height: 1.65; color: var(--text); }

/* Thang chữ fluid: nhỏ ở 375px, lớn ở 1440px */
--fs-display: clamp(2.25rem, 1.4rem + 4vw, 4.5rem);   /* hero */
--fs-h1:      clamp(2rem, 1.3rem + 3vw, 3.5rem);
--fs-h2:      clamp(1.625rem, 1.2rem + 2vw, 2.5rem);
--fs-h3:      clamp(1.25rem, 1.1rem + 0.8vw, 1.625rem);
--fs-body:    1rem;      /* 16px, KHÔNG nhỏ hơn trên mobile */
--fs-small:   0.875rem;
--fs-eyebrow: 0.8125rem; /* chữ nhỏ viết hoa phía trên tiêu đề */
```

| Thành phần | Quy tắc |
|---|---|
| Tiêu đề | `font-weight:700`, `line-height:1.15`, `letter-spacing:-0.02em` |
| Đoạn văn | tối đa **62 ký tự/dòng** (`max-width: 62ch`), `line-height:1.65` |
| Eyebrow | in hoa, `letter-spacing:0.14em`, màu `--gold-700`, kèm gạch vàng 32px phía trước |
| Số liệu lớn | `font-variant-numeric: tabular-nums`, cỡ `--fs-h1`, màu `--gold-500` trên nền tối |
| Tiếng Việt | `line-height` tiêu đề tối thiểu **1.2** (dấu mũ/ngã dễ bị cắt nếu chặt hơn) |

**Mỗi section có đúng 3 tầng chữ:** eyebrow → tiêu đề → 1 đoạn mô tả. Không thêm tầng thứ tư.

---

## 4. KHOẢNG CÁCH, LƯỚI, BO GÓC, ĐỔ BÓNG

```css
/* Thang 8px */
--space-1:.25rem; --space-2:.5rem; --space-3:.75rem; --space-4:1rem;
--space-6:1.5rem; --space-8:2rem; --space-12:3rem; --space-16:4rem; --space-24:6rem;

/* Padding dọc section: mobile → desktop */
--section-y: clamp(4rem, 3rem + 5vw, 8rem);

/* Container */
--container: min(100% - 2.5rem, 1200px);   /* lề 20px mobile */

/* Bo góc: CHỈ 3 giá trị */
--radius-sm: 10px;   /* nút nhỏ, badge, input */
--radius-md: 18px;   /* thẻ, ảnh */
--radius-lg: 28px;   /* khung video, hero card */
--radius-pill: 999px;/* nút chính */

/* Đổ bóng ấm (pha vàng nâu, không dùng xám lạnh) */
--shadow-sm: 0 2px 8px rgba(138, 97, 10, .08);
--shadow-md: 0 10px 30px rgba(138, 97, 10, .12);
--shadow-lg: 0 24px 60px rgba(20, 32, 63, .18);
--shadow-gold: 0 10px 28px rgba(217, 162, 27, .35);   /* chỉ cho nút chính */
```

**Lưới:** mobile 1 cột → tablet (≥768px) 2 cột → desktop (≥1024px) 3–4 cột. `gap: var(--space-6)` mobile, `var(--space-8)` desktop.

---

## 5. COMPONENT

### 5.1 Nút
```css
.btn { min-height: 48px; padding: 0 1.75rem; border-radius: var(--radius-pill);
  font-weight: 600; font-size: 1rem; display:inline-flex; align-items:center; gap:.6rem;
  transition: transform .25s var(--ease-out), box-shadow .25s var(--ease-out), background .25s;
  -webkit-tap-highlight-color: transparent; }

.btn-primary { background: var(--gradient-gold); color: var(--navy-900); box-shadow: var(--shadow-gold); }
.btn-primary:hover  { transform: translateY(-2px); box-shadow: 0 14px 34px rgba(217,162,27,.45); }
.btn-primary:active { transform: translateY(0) scale(.98); }

.btn-secondary { background: transparent; color: var(--navy-700); border: 1.5px solid var(--navy-700); }
.btn-secondary:hover { background: var(--navy-700); color: var(--cream-50); }

.btn-ghost { color: var(--gold-700); padding: 0 .25rem; min-height: 44px; }  /* "Xem thêm →" */
.btn-ghost .arrow { transition: transform .25s var(--ease-out); }
.btn-ghost:hover .arrow { transform: translateX(4px); }

.btn:focus-visible { outline: 3px solid var(--navy-700); outline-offset: 3px; }
```
**Quy tắc:** mỗi màn hình chỉ **1 nút primary**. Nút nhiều chữ: tối đa 3 từ ("Nhận báo giá", "Gọi ngay"). Trên mobile, nút CTA chính rộng 100%.

### 5.2 Thẻ (card dịch vụ, đội xe, tuyến)
```css
.card { background: var(--white); border: 1px solid var(--cream-200);
  border-radius: var(--radius-md); padding: var(--space-6); box-shadow: var(--shadow-sm);
  transition: transform .35s var(--ease-out), box-shadow .35s var(--ease-out), border-color .35s; }
.card:hover { transform: translateY(-6px); box-shadow: var(--shadow-md); border-color: var(--gold-300); }
.card .icon { width: 52px; height: 52px; border-radius: var(--radius-sm);
  background: var(--cream-100); color: var(--gold-700); display:grid; place-items:center; }
```
Icon: một bộ duy nhất (Lucide hoặc Phosphor), nét `1.75px`, không trộn emoji với icon.

### 5.3 Khung video
- Tỉ lệ **16:9**, `border-radius: var(--radius-lg)`, `box-shadow: var(--shadow-lg)`, `overflow:hidden`.
- Hero video: `autoplay muted loop playsinline`, có `poster` (ảnh khung đầu) để không nhấp nháy trắng khi tải.
- Phủ lớp gradient để chữ đọc được: `linear-gradient(180deg, rgba(20,32,63,.15) 0%, rgba(20,32,63,.65) 100%)`.
- Nút play (video có tiếng): vòng tròn 72px nền kem trong mờ (`backdrop-filter: blur(10px)`), icon navy, có hiệu ứng nhịp thở `scale 1→1.08` chậm 2.4s.
- Mobile: video hero chiều cao `min(78svh, 640px)`, dùng `object-fit: cover`. **Dùng `svh`, không dùng `vh`** (tránh nhảy layout khi thanh trình duyệt co lại).
- Nén: tối đa 1080p, `H.264`, dưới 4MB cho video nền; thêm bản `.webm`.

### 5.4 Hình ảnh
- Bo `--radius-md`, tỉ lệ cố định bằng `aspect-ratio` (4/3 cho thẻ, 16/9 cho banner, 1/1 cho avatar). Luôn khai báo `width`/`height` để không nhảy layout.
- Dùng `loading="lazy"` trừ ảnh hero; `srcset` + `sizes`; định dạng WebP/AVIF.
- Chỉnh màu ảnh đồng nhất: hơi ấm, giảm bão hòa xanh lạnh. CSS nhanh: `filter: saturate(.95) sepia(.04)`.
- Hover (desktop): ảnh `scale(1.05)` trong khung `overflow:hidden`, 0.8s.
- Ảnh đội xe: nền sáng, xe chiếm 70% khung, cùng góc chụp.

### 5.5 Header / Điều hướng
- Cao 72px (mobile 64px), nền `rgba(255,252,245,.85)` + `backdrop-filter: blur(14px)`, viền dưới `--cream-200` chỉ hiện khi đã cuộn.
- Logo trái (cao 40px mobile / 48px desktop), menu phải. Mobile: nút hamburger → panel toàn màn hình nền kem, link cỡ `--fs-h2`, xuất hiện lần lượt (stagger 60ms).
- **Thanh hành động cố định dưới màn hình (mobile):** 2 nút "Gọi ngay" + "Nhận báo giá" cao 56px, `padding-bottom: env(safe-area-inset-bottom)`. Đây là yếu tố chuyển đổi quan trọng nhất cho website vận tải.

### 5.6 Form liên hệ
- Input cao 52px, nền trắng, viền `--cream-200`, focus: viền `--gold-500` + vòng `0 0 0 4px rgba(217,162,27,.2)`.
- Label luôn hiện phía trên, không dùng placeholder thay label. Font input ≥ 16px (tránh iOS tự zoom).
- `inputmode="tel"` cho số điện thoại; báo lỗi bằng chữ cụ thể ngay dưới ô.

### 5.7 Footer
Nền `--navy-900`, chữ kem. Cột 1: logo + **tên đầy đủ công ty** + địa chỉ, MST. Cột 2: liên kết. Cột 3: liên hệ (số điện thoại cỡ lớn, màu `--gold-300`). Dòng cuối: bản quyền.

---

## 6. ANIMATION (liền mạch và hài hòa)

### 6.1 Token chuyển động (dùng chung toàn site)
```css
--ease-out:    cubic-bezier(.22, 1, .36, 1);     /* vào cảnh, hover */
--ease-in-out: cubic-bezier(.65, 0, .35, 1);     /* chuyển trang, menu */
--dur-fast: 200ms;   /* hover, nhấn */
--dur-base: 450ms;   /* hiện phần tử */
--dur-slow: 800ms;   /* ảnh, hero */
```
**Quy tắc vàng:** không dùng `ease`/`linear` mặc định; không animation nào dài quá 900ms; chỉ animate `transform` và `opacity` (mượt, không giật trên máy yếu).

### 6.2 Hiện nội dung khi cuộn
```css
.reveal { opacity: 0; transform: translateY(24px);
  transition: opacity var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out); }
.reveal.in { opacity: 1; transform: none; }
```
```js
const io = new IntersectionObserver((es) => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .15, rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 80}ms`;   // stagger theo nhóm 4
  io.observe(el);
});
```
- Mỗi phần tử chỉ hiện **một lần**. Thứ tự trong section: eyebrow → tiêu đề → mô tả → nội dung/thẻ (cách nhau 80ms).
- Ảnh/video: hiện bằng `clip-path: inset(8% round var(--radius-md))` → `inset(0)` kết hợp `scale(1.06 → 1)`, 800ms.

### 6.3 Nối các section liền mạch (giải quyết vấn đề "chưa liền")
1. **Chuyển nền mềm:** giữa hai section khác màu, thêm dải chuyển 80–120px:
   `background: linear-gradient(180deg, var(--cream-50), var(--cream-100));` hoặc dùng đường cong SVG (wave) rất thoải, cao ≤ 60px mobile.
2. **Đường kẻ dọc dẫn mắt (Route line):** một đường nét đứt vàng chạy dọc theo lề, mô phỏng tuyến đường, tiến dần khi cuộn (`stroke-dashoffset` gắn với scroll). Đây là điểm nhấn thương hiệu vận tải và nối các section lại thành một hành trình.
3. **Phần tử gối giữa hai section:** cho ảnh/thẻ cuối section trước **chồng lên 48–80px** vào section sau (`margin-bottom: -64px`, `position:relative; z-index:2`).
4. **Nhịp khoảng cách đều:** mọi section dùng chung `--section-y`. Không tự chỉnh padding riêng từng section.
5. **Một "câu chuyện" xuyên suốt:** Hero (nhận hàng) → Dịch vụ → Đội xe → Tuyến → Hình ảnh thực tế → Liên hệ (giao hàng). Mỗi section kết thúc bằng một câu dẫn sang section kế ("Từ kho đến điểm giao, đội xe của chúng tôi…").

### 6.4 Hero (3 giây đầu)
Thứ tự vào: nền video mờ dần (0ms) → logo/eyebrow (200ms) → tiêu đề từng dòng trượt lên (350ms, 90ms/dòng) → mô tả (700ms) → nút (850ms) → chỉ báo cuộn (1200ms). Tổng ≤ 1.4s. Không chờ animation mới cho bấm được nút.

### 6.5 Chuyển trang
Dùng View Transitions API hoặc fade 250ms giữa các trang; header đứng yên, chỉ nội dung đổi.

### 6.6 Số liệu đếm
Đếm từ 0 đến giá trị trong 1.6s (`easeOutExpo`), chỉ chạy khi vào khung nhìn, chỉ một lần.

### 6.7 Giảm chuyển động
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; scroll-behavior:auto !important; }
  .reveal { opacity:1; transform:none; }
}
```

---

## 7. RESPONSIVE (MOBILE-FIRST)

| Breakpoint | Ý nghĩa | Thay đổi chính |
|---|---|---|
| mặc định (≥320) | điện thoại | 1 cột, lề 20px, thanh CTA dưới, hamburger |
| ≥ 640px | điện thoại lớn | thẻ 2 cột, ảnh lớn hơn |
| ≥ 768px | tablet | header đầy đủ menu, section 2 cột (chữ + ảnh) |
| ≥ 1024px | laptop | thẻ 3–4 cột, hover effect, ẩn thanh CTA dưới |
| ≥ 1440px | màn lớn | container tối đa 1200px, hero rộng hơn |

Kiểm tra bắt buộc trước khi giao: 360×800, 390×844, 768×1024, 1280×800, 1536×864.
- Không có thanh cuộn ngang ở bất kỳ kích thước nào (`overflow-x: clip` trên `body`).
- Cảm ứng: không dựa vào hover; mọi thông tin hiện trên hover phải hiện sẵn trên mobile.
- Bảng giá/lộ trình dài trên mobile: chuyển thành thẻ xếp dọc, không để bảng cuộn ngang.

---

## 8. TRUYỀN THÔNG TRẢI NGHIỆM & HIỆU NĂNG

- LCP < 2.5s: ảnh hero `fetchpriority="high"`, font `font-display: swap` + preload, video nền tải sau poster.
- CLS < 0.1: khai báo kích thước mọi ảnh/video.
- Chữ liên hệ có thể bấm: `tel:`, `mailto:`, link Zalo. Địa chỉ mở Google Maps.
- Alt text mô tả thật ("Xe tải thùng kín Hino 500 đang bốc hàng tại kho"), không nhồi từ khoá.
- Tiêu đề đúng thứ tự `h1` (một cái duy nhất mỗi trang) → `h2` → `h3`.

---

## 9. CẤU TRÚC NỘI DUNG TỪNG TRANG (theo 7 trang trong hồ sơ)

| Trang | Khối nội dung theo thứ tự |
|---|---|
| **Trang chủ** | Hero video + 1 câu giá trị + CTA "Nhận báo giá" → 3 chỉ số (năm hoạt động, số xe, số chuyến) → Dịch vụ nổi bật (3 thẻ) → Vì sao chọn chúng tôi (4 điểm) → Đội xe (carousel) → Tuyến phổ biến → Ảnh/video thực tế → Khách hàng/đối tác → CTA cuối + form ngắn |
| **Giới thiệu** | Câu chuyện + mốc thời gian → Tên đầy đủ công ty, giấy phép → Giá trị cốt lõi → Đội ngũ |
| **Đội xe** | Bộ lọc theo tải trọng → thẻ xe (ảnh, tải trọng, kích thước thùng, loại hàng phù hợp) |
| **Dịch vụ** | Mỗi dịch vụ một khối: mô tả, quy trình 3–4 bước, CTA riêng |
| **Tuyến đường** | Bản đồ đơn giản + danh sách tuyến, thời gian dự kiến |
| **Thư viện** | Lưới masonry ảnh + video, lightbox |
| **Liên hệ** | Form ngắn (tên, SĐT, loại hàng, tuyến) + bản đồ + giờ làm việc + nút gọi/Zalo |

**Giọng văn:** ngắn, cụ thể, có số liệu thật. Tránh "uy tín – chất lượng – chuyên nghiệp" nếu không đi kèm bằng chứng.

---

## 10. DANH SÁCH SỬA NHANH (ưu tiên cao → thấp)

1. Thay toàn bộ màu bằng token ở mục 2; bỏ mọi mã màu rời rạc.
2. Đặt 3 giá trị bo góc, 3 mức bóng; xoá giá trị lẻ.
3. Chuẩn hoá nút theo 5.1, một nút primary mỗi màn.
4. Chuẩn hoá thang chữ fluid, đoạn văn ≤ 62ch.
5. Thêm thanh CTA cố định dưới màn hình mobile.
6. Áp dụng `.reveal` + token chuyển động thống nhất.
7. Làm lại ranh giới section: đổi nền xen kẽ + dải chuyển + phần tử gối.
8. Chuẩn hoá khung video và ảnh theo 5.3, 5.4.
9. Thêm route line vàng xuyên suốt trang.
10. Chạy kiểm tra Lighthouse mobile (mục tiêu ≥ 90 mỗi mục).

---

## 11. PROMPT SẴN ĐỂ DÁN VÀO ANTIGRAVITY / AI CODING

```
Bạn là Senior UI/UX Designer + Frontend Engineer. Hãy redesign website vận tải
"CÔNG TY TNHH XÂY DỰNG VÀ DỊCH VỤ VẬN TẢI HẬU NGUYỄN" theo file
HauNguyen_Design_System.md đính kèm.

Yêu cầu bắt buộc:
- Mobile-first, kiểm tra ở 360, 390, 768, 1280, 1536px, không cuộn ngang.
- Dùng đúng CSS variables trong mục 2, 3, 4; không thêm màu/bo góc/đổ bóng ngoài token.
- Phối màu: trắng, kem, vàng; navy chỉ cho chữ và nền tối (footer, section nhấn).
- Component theo mục 5; animation theo mục 6 (chỉ transform/opacity, tôn trọng
  prefers-reduced-motion).
- Nối section theo 6.3: nền xen kẽ + dải chuyển + phần tử gối + route line vàng.
- Thanh CTA cố định dưới màn hình trên mobile (Gọi ngay / Nhận báo giá).
- Header/footer hiển thị logo, footer có tên đầy đủ công ty.
- Hiệu năng: LCP < 2.5s, CLS < 0.1, ảnh lazy + srcset, video có poster.
Giữ nguyên nội dung và cấu trúc trang hiện có; chỉ thay đổi giao diện và chuyển động.
Sau khi xong, liệt kê các file đã sửa và những điểm chưa đạt chuẩn.
```
