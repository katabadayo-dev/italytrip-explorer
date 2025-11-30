# 🇮🇹 ItalyTrip Explorer – Siena Edition  
**「情報の深さ」と「写真のリアリティ」を重視した、  
日本人旅行者向け観光スポット探索アプリ（実開発：約6時間 / 2日間）**

---

## 🔍 Project Overview  
ItalyTrip Explorer は、  
**SNS評価やフォロワー数に左右されず、  
“自分が本当に行きたい場所” を判断できる**ことを目的とした  
**イタリア観光向けWebアプリ（初期版：シエナ）**です。

📍 **地図上のスポットをクリックすると**  
- 写真（すべて現地撮影）  
- ストーリー（歴史・文化・空気感）  
- 撮影のコツ（Photo Tip）  
- 実用情報（チケット・営業時間など）  
を、**最小操作で深く理解できます。**

---

## 🎯 Concept & Design Policy
- 📷 **写真はすべて現地撮影（加工は明度調整のみ）**
- ❌SNS評価（いいね数など）はデザイン評価対象外
- 🔍「行きたい／行きたくない」をユーザー自身が判断できる設計
- 🧭 **地図クリックのみで旅準備が完結**
- 🎨 UX設計は *旅のテンポ感* を重視

---

## 🗺 対応都市（2025/02 時点）

| 都市 | 実装状況 |
|------|----------|
| **Siena（シエナ）** | ✔ 完成（本リリース） |
| Milano（ミラノ） | ⏳ 次期対応予定 |
| Roma（ローマ） | 📝 構成検討中 |

---

## 📌 Main Features
| 機能 | 内容 |
|------|------|
| 🗺 マップ | Leaflet.jsによるインタラクティブ表示 |
| 📍 スポット詳細 | 写真 / ストーリー / Tips / 実用情報 |
| 🖼 複数写真対応 | 今後ギャラリーUI化予定 |
| 📱 レスポンシブ対応 | PC・スマホ |
| 🔁 拡張性 | JSON管理で都市追加が容易 |

---

## 💻 Tech Stack
| Category | Used |
|----------|------|
| **Front-End** | HTML / CSS / JavaScript (Vanilla) |
| **Map Library** | Leaflet.js |
| **Data Format** | JSON |
| **Development Tools** | VS Code（Live Server） |
| **Hosting（予定）** | GitHub Pages |

---

## 🔧 How to Use（開発者用）

1. Clone
```bash
git clone https://github.com/ユーザー名/ItalyTrip-Explorer.git
