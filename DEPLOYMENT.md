# TaskFlow Pro - デプロイメントガイド

## 🚀 本番環境

### GitHub Pages
- **URL**: https://hiro-lgtm.github.io/
- **自動デプロイ**: main ブランチへのプッシュで自動更新
- **SSL**: 自動適用

### Firebase 設定
- **Project ID**: curious-ocean-416413
- **認証**: Google認証のみ
- **データベース**: Firestore

## 🔧 開発環境

### ローカル開発
```bash
# 簡易サーバー起動（推奨）
python -m http.server 8000
# または
npx http-server
```

### 対応ブラウザ
- ✅ **Chrome/Edge** - 完全対応
- ✅ **Safari** - 完全対応  
- ✅ **Firefox** - 完全対応
- ⚠️ **Arc** - 対応済み（Firebase SDK読み込み強化）

### トラブルシューティング
1. **認証エラー** → Firebase Console で承認済みドメイン確認
2. **同期しない** → Ctrl+Shift+R でハードリフレッシュ
3. **Arc問題** → Firebase SDK読み込み確認、他ブラウザも試行

## 📱 PWA対応
- ✅ manifest.json 設定済み
- ✅ アプリアイコン設定済み
- ✅ ホーム画面追加可能