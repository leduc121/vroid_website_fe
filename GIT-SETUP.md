# Hướng dẫn Setup Git và Deploy lên GitHub Pages

## Bước 1: Khởi tạo Git Repository

Chạy các lệnh sau trong thư mục project:

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/leduc121/vroid_website_fe.git
git push -u origin main
```

## Bước 2: Tạo nhánh `duc` để development

```bash
git checkout -b duc
git push -u origin duc
```

## Bước 3: Cấu hình GitHub Pages

1. Vào repository trên GitHub: https://github.com/leduc121/vroid_website_fe
2. Click vào **Settings** → **Pages**
3. Trong phần **Source**, chọn **Deploy from a branch**
4. Chọn nhánh **gh-pages** và folder **/ (root)**
5. Click **Save**

## Bước 4: Workflow tự động

Sau khi setup xong, workflow sẽ hoạt động như sau:

- **Khi bạn push code lên nhánh `main`**: GitHub Actions sẽ tự động build và deploy lên GitHub Pages
- **Website sẽ live tại**: `https://leduc121.github.io/vroid_website_fe/`

## Làm việc hàng ngày

### Push code từ nhánh `duc`

```bash
git add .
git commit -m "your message"
git push origin duc
```

### Merge từ `duc` sang `main` để deploy

```bash
git checkout main
git merge duc
git push origin main
```

Sau khi push lên `main`, GitHub Actions sẽ tự động build và deploy website.

## Kiểm tra trạng thái deployment

- Vào tab **Actions** trên GitHub repository để xem quá trình build và deploy
- Nếu thành công, website sẽ live sau 1-2 phút

## Lưu ý quan trọng

⚠️ **Base Path**: Nếu routing hoặc assets không load đúng, bạn cần cấu hình base path trong `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/vroid_website_fe/',
  // ... các config khác
})
```
