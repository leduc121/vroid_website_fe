# AI Studio - Hướng Dẫn Sử Dụng

## 📖 Tổng Quan

AI Studio cho phép bạn tạo VRoid assets tùy chỉnh bằng AI. Bạn chỉ cần mô tả ý tưởng, AI sẽ generate texture hoặc VRM file hoàn chỉnh.

---

## 🎯 Workflow Cơ Bản

### Bước 1: Mô Tả Asset
```
Nhập prompt mô tả chi tiết asset bạn muốn:
Ví dụ: "A futuristic cyberpunk jacket with neon blue accents and digital patterns"
```

### Bước 2: Chọn Style Preset
Chọn 1 trong 4 phong cách:
- **Anime**: Phong cách anime/manga truyền thống
- **Cyberpunk**: Tương lai, công nghệ, neon
- **Kawaii**: Dễ thương, pastel, cute
- **Gothic**: Tối, bí ẩn, Victorian

### Bước 3: Chọn Category & Sub-Category

#### Main Categories:
- **Top**: Áo, jacket, coat
- **Bottoms**: Quần, váy
- **Shoes**: Giày dép
- **Accessories**: Phụ kiện (tóc, mũ, kính...)

#### Sub-Categories (tự động hiện theo Main Category):

**Top:**
- Shirt
- Coat
- Hoodies
- Blazer
- Jacket
- T-Shirt

**Bottoms:**
- Pants
- Long Pants
- Short
- Skirt
- Jeans

**Shoes:**
- Sneakers
- Boots
- Sandals
- Heels

**Accessories:**
- Hair
- Hat
- Glasses
- Jewelry
- Bag

### Bước 4: Generate
Click **"Generate Asset"** và đợi AI xử lý (5-10 giây)

---

## 💾 Hai Lựa Chọn Download

Sau khi AI generate xong, bạn có **2 options**:

### Option A: Download Texture (.PNG) 
**Dành cho:** Advanced users, muốn full control

**Bạn nhận được:**
- File PNG texture chất lượng cao
- Có thể edit trong Photoshop/GIMP
- Import vào VRoid Studio để customize thêm

**Workflow:**
```
1. Click "Download Texture (.PNG)"
2. Nhận file: [asset_name]_texture.png
3. (Optional) Edit trong image editor
4. Mở VRoid Studio
5. Import texture vào phần tương ứng
6. Customize character (thêm outfit, hair, etc.)
7. Export VRM file
```

**Ưu điểm:**
- ✅ Hoàn toàn linh hoạt
- ✅ Có thể edit texture
- ✅ Mix-match với assets khác
- ✅ Tạo full character outfit

**Nhược điểm:**
- ❌ Cần biết VRoid Studio
- ❌ Mất thời gian hơn

---

### Option B: Generate VRM File (Enhanced) ⭐
**Dành cho:** Beginners, muốn nhanh chóng

**Bạn nhận được:**
- VRM file hoàn chỉnh, ready to use
- Character với AI texture đã apply
- Full outfit preset

**Workflow:**
```
1. Click "Generate VRM File"
2. Chọn customization options:
   
   a) Base Character Template:
      - Male
      - Female
      - Chibi
   
   b) Preset Outfit:
      - Casual (jeans + sneakers)
      - Formal (pants + dress shoes)
      - Sporty (shorts + running shoes)
      - Street (cargo pants + boots)
   
   c) Basic Customization:
      - Hair Color (Black/Brown/Blonde/Red/Blue/etc.)
      - Skin Tone (Light/Medium/Dark)
      - Eye Color (Brown/Blue/Green/etc.)

3. Click "Generate"
4. Đợi 10-15 giây
5. Download VRM file
6. Import vào VRChat/VSeeFace/VTube Studio
```

**Ưu điểm:**
- ✅ Cực kỳ nhanh, 1-click
- ✅ Không cần VRoid Studio
- ✅ Full character với outfit
- ✅ Basic customization available
- ✅ Ready to use ngay

**Nhược điểm:**
- ❌ Ít flexible hơn Option A
- ❌ Giới hạn trong presets có sẵn

---

## 🎨 Tips & Best Practices

### Viết Prompt Hiệu Quả:

**✅ Good Prompts:**
```
"A sleek black leather jacket with silver zippers and punk rock patches"
"Pastel pink hoodie with cute cat ears and kawaii emoticon prints"
"Victorian gothic dress with lace details and dark purple accents"
```

**❌ Bad Prompts:**
```
"jacket" (quá chung chung)
"something cool" (không cụ thể)
"áo đẹp" (thiếu details)
```

### Chọn Category Đúng:

**Quan trọng:** Category/Sub-category giúp AI chọn đúng template
- Top/Jacket → Template áo khoác
- Bottoms/Pants → Template quần dài
- Shoes/Sneakers → Template giày thể thao

**Sai category = Kết quả không như mong đợi!**

### Style Preset Matching:

| Style | Phù Hợp Với | Không Phù Hợp |
|-------|-------------|---------------|
| **Anime** | Bright colors, clean lines | Realistic textures |
| **Cyberpunk** | Neon, tech, futuristic | Cute, pastel |
| **Kawaii** | Pastel, cute, soft | Dark, edgy |
| **Gothic** | Dark, mysterious, elegant | Bright, cheerful |

---

## 🔄 Workflow So Sánh

### Scenario: Tạo "Cyberpunk Jacket"

**Option A (Texture):**
```
Time: ~15-20 phút
Steps: 7 bước
Skill: Cần biết VRoid Studio
Result: Full custom character với jacket AI

1. Generate texture (5s)
2. Download PNG
3. (Optional) Edit trong Photoshop
4. Mở VRoid Studio
5. Import texture
6. Build character (hair, pants, shoes)
7. Export VRM
```

**Option B (VRM):**
```
Time: ~2-3 phút
Steps: 4 bước
Skill: Không cần
Result: Complete character với jacket AI + preset outfit

1. Generate texture (5s)
2. Choose: Male + Casual + Blue hair + Medium skin
3. Generate VRM (10s)
4. Download & use
```

---

## 📚 Publish to Shop

Sau khi tạo asset, bạn có thể publish lên Shop để bán:

1. Click **"Publish to Shop"**
2. Nhập thông tin:
   - Title
   - Price
   - Description
3. Asset sẽ xuất hiện trên Shop page
4. Người khác có thể mua và download

---

## ❓ FAQ

### Q: Tôi có thể edit VRM file sau khi download không?
**A:** VRM file đã baked, không thể edit trực tiếp. Nếu muốn edit, dùng Option A (Download Texture) và làm việc trong VRoid Studio.

### Q: Option B có thể tạo full outfit không?
**A:** Có! Option B Enhanced cho phép chọn preset outfit (Casual/Formal/Sporty/Street) kèm theo AI texture.

### Q: Tôi có thể generate nhiều lần với cùng prompt không?
**A:** Có, mỗi lần generate sẽ cho kết quả hơi khác nhau do tính ngẫu nhiên của AI.

### Q: File VRM có thể dùng ở đâu?
**A:** VRM files tương thích với:
- VRChat
- VSeeFace
- VTube Studio
- Virtual Cast
- Cluster
- Và nhiều VR/VTuber platforms khác

### Q: Tôi cần license gì để sử dụng?
**A:** Assets bạn generate thuộc về bạn. Có thể dùng cho:
- Personal use
- Commercial use (VTubing, streaming)
- Resale (nếu publish to shop)

---

## 🆘 Troubleshooting

### Texture không khớp với model:
- **Nguyên nhân:** Chọn sai category/sub-category
- **Giải pháp:** Generate lại với đúng category

### VRM file không import được:
- **Nguyên nhân:** Software không support VRM format
- **Giải pháp:** Dùng VRM-compatible software (VRChat, VSeeFace, etc.)

### AI generate không đúng ý:
- **Nguyên nhân:** Prompt không đủ chi tiết
- **Giải pháp:** Viết prompt cụ thể hơn, thêm details về màu sắc, pattern, style

---

## 🎓 Tutorials

### How to Import Texture to VRoid Studio:
1. Mở VRoid Studio
2. Create/Open character
3. Chọn phần cần apply texture (Tops/Bottoms/etc.)
4. Click "Import" → Chọn PNG file
5. Adjust position/scale nếu cần
6. Save & Export VRM

### How to Use VRM in VRChat:
1. Download VRM file
2. Convert VRM to VRChat avatar (dùng VRChat SDK)
3. Upload to VRChat
4. Enjoy!

---

## 📞 Support

Nếu cần hỗ trợ:
- Email: support@vroid-market.com
- Discord: [VRoid Community]
- Documentation: /docs

---

**Happy Creating! ✨**
