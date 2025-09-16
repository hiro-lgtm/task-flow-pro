# 🚀 TaskFlow Pro デプロイメントガイド

TaskFlow Pro の本番環境への展開とブラウザ対応について

## 📱 ブラウザ対応状況

### ✅ 完全対応ブラウザ
- **Safari (iOS/macOS)** - 主要ターゲット、完全最適化済み
- **Chrome (デスクトップ/Android)** - 完全対応、高速動作
- **Edge (デスクトップ)** - Chromiumベース、完全対応

### Firebase 設定

TaskFlow Pro では Firebase を使用してリアルタイムデータ同期を実現しています。

#### 必要な設定
1. Firebase Console でプロジェクト作成
2. Authentication を有効化
3. Firestore Database の設定
4. セキュリティルールの適用

#### セキュリティルール
`firestore.rules` ファイルに以下のルールを適用：

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### 🔧 Arc Browser 特別対応

Arc Browser ユーザー向けの追加設定が実装されています：

- **Popup認証対応**: Google認証のポップアップ制御
- **Domain許可設定**: Firebase認証ドメインの自動追加
- **レンダリング最適化**: Arc特有の表示問題を解決
- **Touch操作対応**: タッチ操作での操作感向上

詳細は `ARC-SETUP.md` を参照してください。

## ⚠️ 注意点

### Google APIs
- Google Calendar API 使用時はOAuth2認証が必要
- 適切なスコープ設定を確認
- API利用制限に注意

### データプライバシー
- すべてのデータはローカルストレージに保存
- Firebase使用時のみクラウド同期
- 個人情報の取り扱いに配慮

---

**最終更新**: 2025年1月8日