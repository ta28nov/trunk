# HẬU NGUYỄN — MASTER DESIGN DIRECTION
# STORY-FIRST + CONTENT-FIRST + ANTI-TEMPLATE

## 01. VAI TRÒ

Bạn phải làm việc đồng thời như:

- Senior UI/UX Designer
- UX Architect
- Content Designer
- Information Architect
- Visual Art Director
- Responsive Design Specialist
- Design Critic

KHÔNG được hoạt động như một Frontend Developer chỉ có nhiệm vụ
ghép component.

Mục tiêu không phải tạo ra nhiều section.

Mục tiêu là tạo ra một trải nghiệm có:
- câu chuyện
- hierarchy
- nhịp điệu
- visual direction
- information architecture
- responsive composition
- nội dung rõ ràng
- ít thành phần nhưng có chủ đích

---

# 02. ĐỊNH VỊ CỐT LÕI

Hậu Nguyễn là doanh nghiệp VẬN TẢI HÀNG HÓA / LOGISTICS.

Thông điệp chính:

"Hậu Nguyễn vận chuyển hàng từ Hà Tĩnh, Nghệ An, Thanh Hóa
lên các tỉnh phía Bắc và Tây Bắc."

XE KHÔNG PHẢI THƯƠNG HIỆU.

Hino, Hyundai, thùng kín, thùng bạt, tải trọng...
chỉ là phương tiện giúp khách giải quyết nhu cầu vận chuyển.

KHÔNG được sử dụng:

"Hino / Hyundai" làm hero headline.

"Đội xe Hino Hyundai" làm thông điệp chính.

"Xe tải 3,5–15 tấn" làm positioning.

Mọi thông tin về xe phải phục vụ câu hỏi:

"Khách cần chở hàng như thế nào?"

Không phải:

"Chúng ta có những chiếc xe gì?"

---

# 03. HOMEPAGE = MỘT CÂU CHUYỆN

Homepage phải được thiết kế như:

MỘT CHUYẾN HÀNG

Kho
→ Nhận hàng
→ Lên đường
→ Đi qua tuyến
→ Đến nơi
→ Bàn giao
→ Khách liên hệ cho chuyến tiếp theo

Người dùng scroll trang phải có cảm giác đang đi cùng
một hành trình.

Không được tạo cảm giác:

Hero
→ Section
→ Section
→ Section
→ Card Grid
→ CTA

Homepage phải là một continuous experience.

---

# 04. HAI SỢI DÂY XUYÊN SUỐT

## THE THREAD

Một đường nét đứt vàng chạy xuyên suốt trang.

Nó:

- bắt đầu từ Hero
- đi qua các chương
- biến đổi theo từng giai đoạn
- trở thành tuyến đường
- kết thúc tại CTA cuối

Nó là một storytelling device.

KHÔNG được biến nó thành decoration đơn thuần.

## THE LIGHT

Ánh sáng thay đổi theo hành trình:

Bình minh
→ sáng
→ trưa
→ chiều
→ hoàng hôn
→ đêm
→ sáng hôm sau

Background chuyển liên tục.

Không tạo các block màu cứng:

SECTION A = cream
SECTION B = white
SECTION C = navy

nếu transition có thể diễn ra tự nhiên.

---

# 05. STORY STRUCTURE

Homepage gồm 7 chương:

01 — KHỞI HÀNH
02 — CHUYỆN CỦA HÀNG
03 — TRÊN ĐƯỜNG
04 — HÀNG CỦA BẠN NẶNG BAO NHIÊU?
05 — LÊN BẮC
06 — NGƯỜI VÀ XE
07 — ĐẾN LƯỢT HÀNG CỦA BẠN

Nhưng:

"7 chương" là INFORMATION ARCHITECTURE.

Không phải yêu cầu tạo 7 loại component khác nhau.

Không được cố tạo một UI pattern mới chỉ để chứng minh
rằng mỗi chương "khác nhau".

Sự khác biệt phải đến từ:
- content
- composition
- scale
- image treatment
- typography
- whitespace
- spatial relationship

chứ không phải từ việc nhồi thêm component.

---

# 06. CHƯƠNG 1 — KHỞI HÀNH

Eyebrow:

Vận tải hàng hoá · Thanh Hóa

H1:

Hàng đi đúng đường, đến đúng nơi.

Description:

Hậu Nguyễn chở hàng từ Hà Tĩnh, Nghệ An, Thanh Hóa lên các tỉnh
phía Bắc và Tây Bắc. Bạn nói hàng gì, đi đâu. Phần đường xa để chúng tôi.

CTA:

Hỏi giá chuyến hàng

Secondary:

Xem hành trình ↓

Visual:

- typography lớn
- một hình ảnh xe tràn mép
- không card
- không badge
- không statistics
- không icon-grid

H1 phải là visual focal point.

Xe chỉ đóng vai trò minh họa cho hành trình.

---

# 07. CHƯƠNG 2 — CHUYỆN CỦA HÀNG

Không dùng card.

Một câu lớn:

"Mỗi chuyến hàng là một lời hứa với người đang chờ ở đầu bên kia.
Chúng tôi giữ lời đó, từ kho đến tận bàn giao."

Chỉ sử dụng những nội dung thực sự đã được khách xác nhận.

Không tự biến câu trên thành một cam kết pháp lý nếu khách chưa duyệt.

---

# 08. CHƯƠNG 3 — TRÊN ĐƯỜNG

Video là visual storytelling.

Không biến video thành:

video + 3 cards + statistics + CTA.

Video phải là nhân vật chính.

Text tối thiểu:

"Kho. Đường. Đèo. Nơi nhận."

Nhãn:

"Hình ảnh minh họa"

Video:
- muted
- loop
- autoplay khi vào viewport
- pause khi ra viewport
- không ảnh hưởng accessibility
- không gây layout shift

---

# 09. CHƯƠNG 4 — NHU CẦU VẬN CHUYỂN

Không tạo fleet card grid.

Không:

[3.5t Card]
[6t Card]
[8t Card]
[10t Card]
[15t Card]

Thay vào đó:

INTERACTIVE LOAD SELECTOR

3.5
6
8
10
15 tấn

Khi thay đổi:

- ảnh
- tải trọng
- thể tích nếu dữ liệu thực sự tồn tại
- loại thùng
- thông tin liên quan

được thay đổi theo lựa chọn.

Mục tiêu UX:

Giúp khách tìm phương án phù hợp với hàng.

Không phải:

"showcase fleet."

---

# 10. DỮ LIỆU XE

Chỉ sử dụng dữ liệu thực tế có trong:

- app
- fleet.json
- assets
- nội dung khách cung cấp

Nếu field không tồn tại:

→ không tự tạo.

Nếu field tồn tại nhưng chưa xác minh:

→ không biến nó thành claim.

Không tự suy luận:

- loại hàng phù hợp
- tải trọng thực tế
- kích thước thùng
- thể tích
- thương hiệu xe
- khả năng vận chuyển
- giá
- tuyến
- thời gian giao hàng

---

# 11. CHƯƠNG 5 — LÊN BẮC

Đây là storytelling bằng tuyến.

Không dùng card.

Không dùng danh sách tỉnh thành dài.

Visual:

Hà Tĩnh
    \
Nghệ An ----→ Phía Bắc
    /
Thanh Hóa

và nhánh:

→ Tây Bắc

Sợi tuyến trở thành bản đồ.

Một câu:

"Ba điểm đi. Một hướng: lên Bắc."

Dòng phụ:

"Sơ đồ minh hoạ. Hỏi chúng tôi lịch xe chạy tuyến bạn cần."

Chỉ sử dụng địa danh đã được xác nhận.

---

# 12. CHƯƠNG 6 — NGƯỜI VÀ XE

Không dùng gallery grid thông thường.

Có thể dùng collage bất đối xứng.

Nhưng:

Mỗi ảnh phải có mục đích.

Không được:

image
image
image
image
image

chỉ để tạo cảm giác "nhiều hình".

Caption chỉ xuất hiện nếu nội dung của ảnh thực sự chứng minh được caption.

Ví dụ:

"Bốc hàng tại kho"

chỉ sử dụng khi ảnh thực sự thể hiện hoạt động đó.

---

# 13. CHƯƠNG 7 — CONVERSION

Đây là điểm kết thúc câu chuyện.

Không tạo một CTA section generic:

"Cần giải pháp vận tải?"
"Liên hệ ngay!"

Thay bằng:

Hàng gì, đi đâu?

Form:

- Hàng gì
- Đi từ đâu đến đâu
- Số điện thoại

CTA:

Gửi, chúng tôi gọi lại

Hotline:

0823 040 412

Zalo:

Nhắn Zalo

Sợi tuyến kết thúc tại CTA.

---

# 14. ANTI-TEMPLATE LAW

TUYỆT ĐỐI KHÔNG tạo homepage theo template:

Hero
→ Features
→ 3 Cards
→ Statistics
→ Services
→ Testimonials
→ CTA

Không sử dụng pattern:

Eyebrow
Heading
Paragraph
3 Cards
Button

lặp lại nhiều lần.

Không tạo section chỉ vì:

"website đang thiếu section."

Không tạo component chỉ vì:

"section đang hơi trống."

Không lấy component từ library trước rồi tìm nội dung
để nhét vào.

---

# 15. CONTENT FIRST

Luôn theo thứ tự:

USER NEED
↓
CONTENT
↓
CONTENT HIERARCHY
↓
STORY
↓
COMPOSITION
↓
VISUAL DIRECTION
↓
COMPONENT

TUYỆT ĐỐI KHÔNG:

COMPONENT
↓
CONTENT

---

# 16. ONE SECTION = ONE PRIMARY IDEA

Trước khi tạo section phải xác định:

PRIMARY IDEA:
...

USER SHOULD UNDERSTAND:
...

SUPPORTING INFORMATION:
...

USER ACTION:
...

VISUAL PURPOSE:
...

Nếu không xác định được:

→ Không tạo section.

---

# 17. ANTI-NOISE RULE

Mọi element phải có lý do.

Element chỉ được tồn tại nếu thuộc ít nhất một nhóm:

1. INFORMATION
2. NAVIGATION
3. ACTION
4. CONTEXT
5. VISUAL STORYTELLING
6. BRAND EXPRESSION

Nếu không thuộc nhóm nào:

→ REMOVE.

Không tự thêm:

- badge
- pill
- icon
- mini-card
- floating card
- statistic
- number
- divider
- decorative text
- random label
- random CTA
- random quote

---

# 18. EMPTY SPACE RULE

Khoảng trắng không phải lỗi.

KHÔNG được lấp khoảng trắng bằng component.

Nếu section trống:

1. kiểm tra hierarchy
2. kiểm tra composition
3. kiểm tra typography
4. kiểm tra image treatment
5. giữ nguyên whitespace nếu nó có chủ đích

Không:

"section hơi trống → thêm card."

---

# 19. REMOVE BEFORE ADD

Khi section có vấn đề:

REMOVE
↓
MERGE
↓
REWRITE
↓
REORDER
↓
RECOMPOSE
↓
ADJUST SPACING
↓
ADJUST TYPOGRAPHY
↓
ADJUST IMAGE
↓
ADD COMPONENT

Không được ADD trước.

---

# 20. CARD RESTRICTION

Card không phải layout mặc định.

Chỉ dùng card khi information thực sự có:

- independent identity
- independent hierarchy
- interaction
- comparison
- boundary

Nếu chỉ dùng card để chia layout:

→ Không dùng card.

---

# 21. VISUAL COMPLEXITY BUDGET

Một section không được đồng thời có quá nhiều:

- cards
- badges
- icons
- floating elements
- gradients
- decorative lines
- giant numbers
- buttons
- text styles
- overlapping images

CONTENT COMPLEXITY cao
→ VISUAL COMPLEXITY phải giảm.

VISUAL COMPLEXITY cao
→ CONTENT phải giảm.

Không để cả hai cùng đạt đỉnh.

---

# 22. IMAGE RULE

Mỗi image phải trả lời:

"Tại sao hình ảnh này tồn tại?"

Nó phải làm ít nhất một việc:

- explain
- demonstrate
- establish atmosphere
- establish trust
- show environment
- show process
- show scale
- support storytelling

Không dùng image chỉ để lấp layout.

Không lặp lại cùng một hình ở nhiều section nếu nó làm giảm
giá trị visual storytelling.

---

# 23. RESPONSIVE RULE

Mobile không phải desktop thu nhỏ.

Mobile có quyền:

- đổi thứ tự
- đổi crop
- đổi layout
- đổi typography
- đổi image placement
- ẩn tertiary information
- đổi CTA position

Nhưng không được mất PRIMARY INFORMATION.

Không dùng:

overflow-x: hidden

để che lỗi.

---

# 24. TYPOGRAPHY RULE

Typography phải tạo hierarchy.

Không sử dụng:

- random font size
- random bold
- random uppercase
- random letter spacing
- random giant number
- random highlighted words

Mỗi typography level phải có lý do.

---

# 25. THREE SECOND TEST

Ở mỗi section:

Trong 3 giây đầu tiên:

1. Người dùng nhìn thấy gì?
2. Người dùng hiểu gì?
3. Người dùng biết làm gì tiếp?

Nếu không trả lời được:

→ section chưa đạt.

---

# 26. AWWWARDS PRINCIPLE

Awwwards-inspired KHÔNG đồng nghĩa:

- animation nhiều
- WebGL
- gradient
- parallax
- 3D
- particle
- floating cards

Chất lượng phải đến từ:

- art direction
- typography
- composition
- content architecture
- visual storytelling
- whitespace
- responsive design
- image direction
- interaction quality

Không clone website khác.

Chỉ nghiên cứu principle.

---

# 27. MOTION

Motion phục vụ câu chuyện.

Homepage chỉ có 3 hệ thống motion chính:

1. THE THREAD
2. THE LIGHT
3. CONTENT REVEAL / TRANSITION

Không thêm animation thứ tư chỉ để tạo "wow".

Không animation nếu animation làm:

- khó đọc
- khó tương tác
- tăng loading
- giảm performance
- gây motion sickness
- che content

prefers-reduced-motion phải được hỗ trợ.

---

# 28. DESIGN REVIEW

Sau khi hoàn thành mỗi page:

Đóng vai một khách hàng chưa từng biết Hậu Nguyễn.

Không xem source code.

Chỉ xem trải nghiệm.

Trả lời:

1. Tôi có hiểu công ty làm gì trong 5 giây không?
2. Tôi có hiểu website đang kể câu chuyện gì không?
3. Tôi có biết bước tiếp theo phải làm gì không?
4. Section nào dư?
5. Section nào bị lặp?
6. Section nào giống template?
7. Section nào có visual noise?
8. Có element nào không cần thiết?
9. Có thông tin nào bị chôn?
10. Có section nào đang cố nói quá nhiều thứ?
11. Mobile có giữ đúng hierarchy không?
12. Website có đang bán "xe" thay vì "dịch vụ vận chuyển" không?

Nếu phát hiện vấn đề:

→ sửa trước khi hoàn thành.

---

# 29. FINAL DESIGN TEST

Một design tốt phải đạt:

LESS COMPONENTS
+
MORE MEANING

LESS NOISE
+
MORE HIERARCHY

LESS TEMPLATE
+
MORE ART DIRECTION

LESS DECORATION
+
MORE STORY

LESS CONTENT
+
MORE CLARITY

LESS "WE HAVE THIS"
+
MORE "THIS SOLVES YOUR PROBLEM"
